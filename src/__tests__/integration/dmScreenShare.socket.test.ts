// src/__tests__/integration/dmScreenShare.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";
import { app, server } from "../../server";

jest.setTimeout(30000);

describe("DM Screen Share Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let workspace: any;
    let dmConversation: any;
    let connectTimeout: NodeJS.Timeout | null = null;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start test server on dedicated port
        await new Promise<void>((resolve) => {
            server.listen(4007, () => {
                console.log("Test server listening on 4007");
                resolve();
            });
        });

        // create two users
        user = await prisma.user.create({
            data: { email: "screen1@example.com", password: "pwd", name: "Screen User 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "screen2@example.com", password: "pwd", name: "Screen User 2" },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        // create workspace and add both users (DM tied to workspace)
        workspace = await prisma.workspace.create({
            data: {
                name: "DM ScreenShare Workspace",
                slug: `dm-screen-ws-${Date.now()}`,
                ownerId: user.id,
                members: {
                    create: [
                        { userId: user.id, role: "OWNER" },
                        { userId: otherUser.id, role: "MEMBER" },
                    ],
                },
            },
        });

        // create direct message conversation and participants
        dmConversation = await prisma.directMessageConversation.create({
            data: {
                workspaceId: workspace.id,
                participants: {
                    create: [{ userId: user.id }, { userId: otherUser.id }],
                },
            },
        });
    });

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4007", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4007", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;

        function joinRoomsNoAck() {
            // join the dm room (server handler uses socket.join(`dm:${conversationId}`))
            clientSocket.emit("join:dm", dmConversation.id);
            otherSocket.emit("join:dm", dmConversation.id);

            // clear fallback and finish after small delay so server processes join
            if (connectTimeout) {
                clearTimeout(connectTimeout);
                connectTimeout = null;
            }
            setTimeout(() => done(), 80);
        }

        clientSocket.on("connect", () => {
            connected++;
            if (connected === 2) joinRoomsNoAck();
        });
        otherSocket.on("connect", () => {
            connected++;
            if (connected === 2) joinRoomsNoAck();
        });

        // fallback to fail early (store id and clear when we succeed)
        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            done(new Error("Sockets failed to connect/join in beforeEach"));
        }, 8000);
    });

    afterEach(() => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();
        if (connectTimeout) {
            clearTimeout(connectTimeout);
            connectTimeout = null;
        }
    });

    afterAll(async () => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();

        // cleanup
        await prisma.message.deleteMany({ where: { conversationId: dmConversation.id } }).catch(() => { });
        await prisma.userOnDM.deleteMany({ where: { dmId: dmConversation.id } }).catch(() => { });
        await prisma.directMessageConversation.delete({ where: { id: dmConversation.id } }).catch(() => { });
        await prisma.workspace.delete({ where: { id: workspace.id } }).catch(() => { });

        await prisma.$disconnect();
        server.close();
    });

    it("should forward screenShareOffer to other participant", (done) => {
        otherSocket.once("dm:call:incomingScreenShareOffer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("offer");
                // offer shape may vary — check a nested field if you need:
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:screenShareOffer", { conversationId: dmConversation.id, offer: { sdp: "fake-offer" } });
    });

    it("should forward screenShareAnswer to other participant", (done) => {
        otherSocket.once("dm:call:screenShareAnswer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("answer");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:screenShareAnswer", { conversationId: dmConversation.id, answer: { sdp: "fake-answer" } });
    });

    it("should forward screenShare ICE candidate to other participant", (done) => {
        otherSocket.once("dm:call:screenShareIceCandidate", (data: any) => {
            try {
                expect(data).toHaveProperty("candidate", "fake-candidate");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:screenShareIceCandidate", { conversationId: dmConversation.id, candidate: "fake-candidate" });
    });

    it("should broadcast screenStopped event when stopping screen share", (done) => {
        otherSocket.once("dm:call:screenStopped", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:stopScreenShare", { conversationId: dmConversation.id });
    });
});

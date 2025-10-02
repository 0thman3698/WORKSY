// src/__tests__/integration/dmCall.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";

jest.setTimeout(30000);

describe("DM Call Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let workspace: any;
    let dmConversation: any;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start server for this suite on dedicated port
        await new Promise<void>((resolve) => {
            server.listen(4005, () => {
                console.log("Test server listening on 4005");
                resolve();
            });
        });

        // create users
        user = await prisma.user.create({
            data: { email: "dmcall1@example.com", password: "pwd", name: "DM Call 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "dmcall2@example.com", password: "pwd", name: "DM Call 2" },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        // create a workspace and add both users (DM is tied to workspace in your schema)
        workspace = await prisma.workspace.create({
            data: {
                name: "DM Call Workspace",
                slug: `dm-call-ws-${Date.now()}`,
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

    let connectTimeout: NodeJS.Timeout | null = null;

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4005", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4005", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;

        function joinRoomsNoAck() {
            // emit join (server's handler uses socket.join(`dm:${conversationId}`) )
            clientSocket.emit("join:dm", dmConversation.id);
            otherSocket.emit("join:dm", dmConversation.id);

            // clear fallback timeout — we're about to finish
            if (connectTimeout) {
                clearTimeout(connectTimeout);
                connectTimeout = null;
            }

            // brief delay so server has time to add sockets to room
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

        // fallback timeout (store id so we can clear it)
        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            done(new Error("Sockets failed to connect in beforeEach"));
        }, 8000);
    });

    afterEach(() => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();
        // clear any leftover timeout
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

    it("should forward dm call offer to other participant", (done) => {
        otherSocket.once("dm:call:incomingOffer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("offer");
                // offer shape depends on your app; check a field if present
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:offer", { conversationId: dmConversation.id, offer: { sdp: "fake-offer" } });
    });

    it("should forward dm call answer to other participant", (done) => {
        otherSocket.once("dm:call:answer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("answer");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:answer", { conversationId: dmConversation.id, answer: { sdp: "fake-answer" } });
    });

    it("should forward dm ICE candidate to other participant", (done) => {
        otherSocket.once("dm:call:iceCandidate", (data: any) => {
            try {
                expect(data).toHaveProperty("candidate");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:iceCandidate", { conversationId: dmConversation.id, candidate: "fake-candidate" });
    });

    it("should broadcast dm call end to room", (done) => {
        otherSocket.once("dm:call:end", () => {
            done();
        });

        clientSocket.emit("dm:call:end", { conversationId: dmConversation.id });
    });

    it("should send direct busy signal to specific socket id", (done) => {
        // note: handler does io.to(toUserId).emit(...). For deterministic testing we pass otherSocket.id
        otherSocket.once("dm:call:busy", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:busy", { toUserId: otherSocket.id });
    });
});

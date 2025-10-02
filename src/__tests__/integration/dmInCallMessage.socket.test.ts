// src/__tests__/integration/dmInCallMessage.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";
import { app, server } from "../../server";

jest.setTimeout(30000);

describe("DM In-Call Message Socket.IO", () => {
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

        // start server for this suite on a dedicated port
        await new Promise<void>((resolve) => {
            server.listen(4006, () => {
                console.log("Test server listening on 4006");
                resolve();
            });
        });

        // create two users
        user = await prisma.user.create({
            data: { email: "incall1@example.com", password: "pwd", name: "InCall User 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "incall2@example.com", password: "pwd", name: "InCall User 2" },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        // create workspace and add both users (DM tied to workspace)
        workspace = await prisma.workspace.create({
            data: {
                name: "DM InCall Workspace",
                slug: `dm-incall-ws-${Date.now()}`,
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
        clientSocket = Client("http://localhost:4006", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4006", { auth: { token: otherToken }, transports: ["websocket"] });

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

        // cleanup (no persistent messages in this handler, but safe to run)
        await prisma.message.deleteMany({ where: { conversationId: dmConversation.id } }).catch(() => { });
        await prisma.userOnDM.deleteMany({ where: { dmId: dmConversation.id } }).catch(() => { });
        await prisma.directMessageConversation.delete({ where: { id: dmConversation.id } }).catch(() => { });
        await prisma.workspace.delete({ where: { id: workspace.id } }).catch(() => { });

        await prisma.$disconnect();
        server.close();
    });

    it("should broadcast in-call message to DM room", (done) => {
        const payload = { conversationId: dmConversation.id, content: "Hello in call" };

        otherSocket.once("dm:call:inCallNewMessage", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("content", payload.content);
                expect(data).toHaveProperty("timestamp");
                // timestamp should be an ISO string
                expect(typeof data.timestamp).toBe("string");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:inCallMessage", payload);
    });

    it("should trim content before broadcasting", (done) => {
        const payload = { conversationId: dmConversation.id, content: "   trimmed message   " };

        otherSocket.once("dm:call:inCallNewMessage", (data: any) => {
            try {
                expect(data.content).toBe("trimmed message");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:inCallMessage", payload);
    });

    it("should emit dm:error when message is empty or whitespace", (done) => {
        // server emits dm:error back to the sender socket
        clientSocket.once("dm:error", (msg: any) => {
            try {
                expect(msg).toBe("In-call message cannot be empty.");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:call:inCallMessage", { conversationId: dmConversation.id, content: "   " });
    });
});

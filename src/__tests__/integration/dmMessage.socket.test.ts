// src/__tests__/integration/dmMessage.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";
import { app, server } from "../../server";

jest.setTimeout(40000);

describe("DM Messages Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let dmConversation: any;
    let createdMessage: any;
    let connectTimeout: NodeJS.Timeout | null = null;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start server
        await new Promise<void>((resolve) => {
            server.listen(4004, () => {
                console.log("Test server listening on 4004");
                resolve();
            });
        });

        // create two users
        user = await prisma.user.create({
            data: { email: "dmuser1@example.com", password: "pwd", name: "DM User 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "dmuser2@example.com", password: "pwd", name: "DM User 2" },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        const workspace = await prisma.workspace.create({
            data: {
                name: "DM Workspace",
                slug: "dm-ws",
                ownerId: user.id,
                members: {
                    create: [
                        { userId: user.id, role: "OWNER" },
                        { userId: otherUser.id, role: "MEMBER" },
                    ],
                },
            },
        });

        dmConversation = await prisma.directMessageConversation.create({
            data: {
                workspaceId: workspace.id,
                participants: {
                    create: [
                        { userId: user.id },
                        { userId: otherUser.id },
                    ],
                },
            },
        });
    });

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4004", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4004", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;

        function tryJoinNoAck() {
            clientSocket.emit("join:dm", dmConversation.id);
            otherSocket.emit("join:dm", dmConversation.id);
            setTimeout(() => done(), 80); // small delay so server processes the join
        }

        clientSocket.on("connect", () => {
            connected++;
            if (connected === 2) tryJoinNoAck();
        });
        otherSocket.on("connect", () => {
            connected++;
            if (connected === 2) tryJoinNoAck();
        });

        // fallback to fail early (longer window)
        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            done(new Error("Sockets failed to connect/join in beforeEach"));
        }, 8000);
    });

    afterEach(() => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();
        if (connectTimeout) { clearTimeout(connectTimeout); connectTimeout = null; }
    });

    afterAll(async () => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();

        await prisma.message.deleteMany({ where: { conversationId: dmConversation.id } });
        await prisma.userOnDM.deleteMany({ where: { dmId: dmConversation.id } });
        await prisma.directMessageConversation.delete({ where: { id: dmConversation.id } });

        await prisma.$disconnect();
        server.close();
    });

    it("should join DM and send/receive a message", (done) => {
        const payload = { conversationId: dmConversation.id, content: "Hello DM from test" };

        otherSocket.once("dm:newMessage", (msg: any) => {
            try {
                expect(msg).toHaveProperty("content", payload.content);
                expect(msg).toHaveProperty("userId", user.id);
                createdMessage = msg;
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:send", payload);
    });

    it("should edit a DM message", (done) => {
        const editPayload = { messageId: createdMessage.id, newContent: "Edited DM content" };

        otherSocket.once("dm:message:edited", (updated: any) => {
            try {
                expect(updated.id).toBe(createdMessage.id);
                expect(updated.content).toBe(editPayload.newContent);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:message:edit", editPayload);
    });

    it("should delete a DM message", (done) => {
        otherSocket.once("dm:message:deleted", (data: any) => {
            try {
                expect(data).toHaveProperty("messageId", createdMessage.id);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:message:delete", createdMessage.id);
    });

    it("should fetch all DM messages via callback", (done) => {
        clientSocket.emit("dm:getAll", { conversationId: dmConversation.id, query: {} }, (res: any) => {
            try {
                expect(res).toHaveProperty("status", "success");
                expect(Array.isArray(res.data)).toBe(true);
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should broadcast typing and stopTyping", (done) => {
        otherSocket.once("dm:userTyping", (data: any) => {
            try {
                expect(data).toHaveProperty("userId", user.id);
                otherSocket.once("dm:userStoppedTyping", (d2: any) => {
                    try {
                        expect(d2).toHaveProperty("userId", user.id);
                        done();
                    } catch (err) {
                        done(err);
                    }
                });
                clientSocket.emit("dm:stopTyping", { conversationId: dmConversation.id });
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("dm:typing", { conversationId: dmConversation.id });
    });
});

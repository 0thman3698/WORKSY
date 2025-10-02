// src/__tests__/integration/reaction.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";
import { app, server } from "../../server";

jest.setTimeout(30000);

describe("Reaction Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let workspace: any;
    let dmConversation: any;
    let message: any;
    let connectTimeout: NodeJS.Timeout | null = null;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start test server
        await new Promise<void>((resolve) => {
            server.listen(4010, () => {
                console.log("Test server listening on 4010");
                resolve();
            });
        });

        // create users
        user = await prisma.user.create({
            data: { email: "reaction1@example.com", password: "pwd", name: "Reaction User 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "reaction2@example.com", password: "pwd", name: "Reaction User 2" },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        // workspace + dm conversation
        workspace = await prisma.workspace.create({
            data: {
                name: "Reaction Workspace",
                slug: `reaction-ws-${Date.now()}`,
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
                    create: [{ userId: user.id }, { userId: otherUser.id }],
                },
            },
        });

        // create message to react on
        message = await prisma.message.create({
            data: {
                conversationId: dmConversation.id,
                userId: user.id,
                content: "Hello with reaction!",
            },
        });
    });

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4010", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4010", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;

        function joinRoomsNoAck() {
            // join dm room by messageId (حسب الكود في initReactionHandlers)
            clientSocket.emit("join:dm", message.id);
            otherSocket.emit("join:dm", message.id);

            if (connectTimeout) {
                clearTimeout(connectTimeout);
                connectTimeout = null;
            }
            setTimeout(() => done(), 100);
        }

        clientSocket.on("connect", () => {
            connected++;
            if (connected === 2) joinRoomsNoAck();
        });
        otherSocket.on("connect", () => {
            connected++;
            if (connected === 2) joinRoomsNoAck();
        });

        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            done(new Error("Sockets failed to connect in beforeEach"));
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

        await prisma.messageReaction.deleteMany({ where: { messageId: message.id } }).catch(() => { });
        await prisma.message.delete({ where: { id: message.id } }).catch(() => { });
        await prisma.userOnDM.deleteMany({ where: { dmId: dmConversation.id } }).catch(() => { });
        await prisma.directMessageConversation.delete({ where: { id: dmConversation.id } }).catch(() => { });
        await prisma.workspace.delete({ where: { id: workspace.id } }).catch(() => { });

        await prisma.$disconnect();
        server.close();
    });

    it("should add or update reaction and emit reaction:updated", (done) => {
        otherSocket.once("reaction:updated", (data: any) => {
            try {
                expect(data).toHaveProperty("messageId", message.id);
                expect(data.reactions.length).toBeGreaterThan(0);
                expect(data.reactions[0]).toHaveProperty("emoji", "👍");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("reaction:addOrUpdate", { messageId: message.id, emoji: "👍" });
    });

    it("should return reactions list on reaction:get", (done) => {
        clientSocket.once("reaction:list", (data: any) => {
            try {
                expect(data).toHaveProperty("messageId", message.id);
                expect(Array.isArray(data.reactions)).toBe(true);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("reaction:get", message.id);
    });

    it("should emit error on invalid reaction data", (done) => {
        clientSocket.once("reaction:error", (err: any) => {
            try {
                expect(err).toBeTruthy();
                done();
            } catch (e) {
                done(e);
            }
        });

        clientSocket.emit("reaction:addOrUpdate", { messageId: "", emoji: "" });
    });
});

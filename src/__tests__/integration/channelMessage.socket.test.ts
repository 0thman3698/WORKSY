import { io as Client, Socket } from "socket.io-client";
import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { generateAccessToken } from "../../utils/jwt";
import { cleanupDb } from "../../utils/cleanup";

let user: any;
let workspace: any;
let token: string;
let clientSocket: Socket;
let channel: any;
let createdMessage: any;

beforeAll(async () => {
    await cleanupDb();
    await prisma.$connect();
    await new Promise<void>((resolve) => {
        server.listen(4000, () => {
            console.log("Test server listening on 4000");
            resolve();
        });
    });
    user = await prisma.user.create({
        data: { name: "Test User", email: "user@example.com", password: "@Test1234" },
    });
    token = "Bearer " + generateAccessToken(user.id, user.role);

    workspace = await prisma.workspace.create({
        data: {
            name: "Default Workspace",
            slug: `default-ws-${Date.now()}`,
            ownerId: user.id,
            members: { create: [{ userId: user.id, role: "OWNER" }] },
        },
    });

    channel = await prisma.channel.create({
        data: {
            name: "general",
            workspaceId: workspace.id,
            ownerId: user.id,
            isPublic: true,
        },
    });
});

afterAll(async () => {
    if (clientSocket?.connected) {
        clientSocket.disconnect();
    }
    await prisma.channel.delete({ where: { id: channel.id } });
    await prisma.$disconnect();
    server.close();
});

describe("Channel Messages Socket.IO", () => {
    beforeEach((done) => {
        clientSocket = Client("http://localhost:4000", {
            auth: { token },
            transports: ["websocket"],
        });
        clientSocket.on("connect", () => {
            done();
        });
    });

    afterEach(() => {
        if (clientSocket?.connected) {
            clientSocket.disconnect();
            clientSocket.removeAllListeners();
        }
    });

    it("should join a channel and send/receive a message", (done) => {
        const testMessage = {
            channelId: channel.id,
            content: "Hello from test",
        };

        clientSocket.emit("joinChannel", channel.id);

        clientSocket.once("newMessage", (msg) => {
            try {
                console.log("New message received:", msg);
                expect(msg.content).toBe(testMessage.content);
                expect(msg.channelId).toBe(channel.id);
                expect(msg.userId).toBe(user.id);
                createdMessage = msg; // save for edit/delete tests
                done();
            } catch (err) {
                done(err);
            }
        });

        setTimeout(() => {
            clientSocket.emit("sendMessage", testMessage);
        }, 100)
    }, 20000);

    it("should edit a message", (done) => {
        const payload = {
            messageId: createdMessage.id,
            newContent: "Edited content",
        };

        clientSocket.once("message:edit:success", (updated) => {
            try {
                expect(updated.id).toBe(createdMessage.id);
                expect(updated.content).toBe(payload.newContent);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("editMessage", payload);
    }, 20000);

    it("should delete a message", (done) => {
        clientSocket.once("message:delete:success", (data) => {
            try {
                console.log(data)
                expect(data.id).toBe(createdMessage.id);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("message:delete", createdMessage.id);
    });

    it("should fetch all messages", (done) => {
        const testMessage = {
            channelId: channel.id,
            content: "Another test msg",
        };

        clientSocket.once("allMessages", (msgs) => {
            try {
                expect(Array.isArray(msgs)).toBe(true);
                expect(msgs.length).toBeGreaterThan(0);
                expect(msgs[0]).toHaveProperty("content");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("sendMessage", testMessage);

        setTimeout(() => {
            clientSocket.emit("getAllMessages", channel.id);
        }, 100);
    }, 20000);
});

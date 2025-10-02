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

beforeAll(async () => {
    await cleanupDb();
    await prisma.$connect();
    await new Promise<void>((resolve) => {
        server.listen(4001, () => {
            console.log("Test server listening on 4001");
            resolve();
        });
    });

    user = await prisma.user.create({
        data: { name: "Typing User", email: "typing@example.com", password: "@Test1234" },
    });
    token = "Bearer " + generateAccessToken(user.id, user.role);


    workspace = await prisma.workspace.create({
        data: {
            name: "Default Workspace",
            slug: `default-ws-${Date.now()}`,
            ownerId: user.id,
            members: {
                create: [
                    { userId: user.id, role: "OWNER" }

                ]
            },
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

describe("Channel Typing Socket.IO", () => {
    beforeEach((done) => {
        clientSocket = Client("http://localhost:4001", {
            auth: { token },
            transports: ["websocket"],
        });
        clientSocket.on("connect", () => {
            clientSocket.emit("joinChannel", channel.id);
            done();
        });
    });

    afterEach(() => {
        if (clientSocket?.connected) {
            clientSocket.disconnect();
            clientSocket.removeAllListeners();
        }
    });

    it("should emit userTyping event when typing", (done) => {
        const otherClient = Client("http://localhost:4001", {
            auth: { token },
            transports: ["websocket"],
        });

        otherClient.on("connect", () => {
            otherClient.emit("joinChannel", channel.id);

            otherClient.on("userTyping", (data) => {
                try {
                    expect(data).toHaveProperty("userId", user.id);
                    done();
                } catch (err) {
                    done(err);
                } finally {
                    otherClient.disconnect();
                }
            });

            clientSocket.emit("typing", { channelId: channel.id });
        });
    }, 10000);

    it("should emit userStoppedTyping event when stopTyping", (done) => {
        const otherClient = Client("http://localhost:4001", {
            auth: { token },
            transports: ["websocket"],
        });

        otherClient.on("connect", () => {
            otherClient.emit("joinChannel", channel.id);

            otherClient.on("userStoppedTyping", (data) => {
                try {
                    expect(data).toHaveProperty("userId", user.id);
                    done();
                } catch (err) {
                    done(err);
                } finally {
                    otherClient.disconnect();
                }
            });

            clientSocket.emit("stopTyping", { channelId: channel.id });
        });
    }, 10000);
});

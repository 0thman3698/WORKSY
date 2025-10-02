import { io as Client, Socket } from "socket.io-client";
import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";

jest.setTimeout(30000);

describe("Channel Call Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let channel: any;
    let workspace: any;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start server for tests (ensure port same as client uses)
        await new Promise<void>((resolve) => {
            server.listen(4002, () => {
                console.log("Test server listening on 4002");
                resolve();
            });
        });

        // create users
        user = await prisma.user.create({ data: { email: "calluser1@example.com", password: "pwd", name: "Call User 1" } });
        otherUser = await prisma.user.create({ data: { email: "calluser2@example.com", password: "pwd", name: "Call User 2" } });

        token = "Bearer " + generateAccessToken(user.id, user.role);
        otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        workspace = await prisma.workspace.create({
            data: {
                name: "Default Workspace",
                slug: `default-ws-${Date.now()}`,
                ownerId: user.id,
                members: {
                    create: [
                        { userId: user.id, role: "OWNER" },
                        { userId: otherUser.id, role: 'MEMBER' }

                    ]
                },
            },
        });

        channel = await prisma.channel.create({
            data: {
                name: "Test Channel",
                workspaceId: workspace.id,
                ownerId: user.id,
                UserOnChannels: {
                    create: [{ userId: user.id, role: 'ADMIN' }, { userId: otherUser.id, role: 'MEMBER' }]
                }

            }
        });

    }, 30000);
    let connectTimeout: NodeJS.Timeout | null = null;

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4002", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4002", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;
        function tryJoin() {
            // both connected -> perform join with ack callbacks and wait both acks
            let acks = 0;
            const onAck = (res: any) => {
                acks++;
                if (acks === 2) {
                    // clear fallback timeout
                    if (connectTimeout) {
                        clearTimeout(connectTimeout);
                        connectTimeout = null;
                    }
                    done();
                }
            };

            clientSocket.emit("channel:join", { channelId: channel.id }, onAck);
            otherSocket.emit("channel:join", { channelId: channel.id }, onAck);
        }

        clientSocket.on("connect", () => { connected++; if (connected === 2) tryJoin(); });
        otherSocket.on("connect", () => { connected++; if (connected === 2) tryJoin(); });

        // fallback timeout (in case ack never comes) to avoid hanging tests forever
        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            if (connected < 2) {
                // call done with error so test fails instead of hanging
                done(new Error("Sockets failed to connect in beforeEach"));
            }
        }, 5000);
    });

    afterEach(() => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();

        // ensure fallback timeout cleared in case afterEach runs before it
        if (connectTimeout) {
            clearTimeout(connectTimeout);
            connectTimeout = null;
        }
    });

    afterAll(async () => {
        if (clientSocket?.connected) clientSocket.disconnect();
        if (otherSocket?.connected) otherSocket.disconnect();

        await prisma.userOnChannel.deleteMany({ where: { channelId: channel.id } });
        await prisma.channel.delete({ where: { id: channel.id } });
        await prisma.$disconnect();

        server.close();
    });

    it("should send and receive call offer", (done) => {
        otherSocket.once("channel:call:incomingOffer", (data: any) => {
            console.log("📩 otherSocket received incomingOffer:", data);
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("sdp", "fake-offer-sdp"); // handler emits sdp at top-level for incomingOffer in our updated handler
                done();
            } catch (err) {
                done(err);
            }
        });

        // send offer with sdp
        clientSocket.emit("channel:call:offer", { channelId: channel.id, sdp: "fake-offer-sdp" });
    });

    it("should send and receive call answer", (done) => {
        otherSocket.once("channel:call:incomingAnswer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("sdp", "fake-answer-sdp");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("channel:call:answer", { channelId: channel.id, sdp: "fake-answer-sdp" });
    });

    it("should send and receive ICE candidate", (done) => {
        otherSocket.once("channel:call:incomingCandidate", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("candidate", "fake-candidate");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("channel:call:candidate", { channelId: channel.id, candidate: "fake-candidate" });
    });
});

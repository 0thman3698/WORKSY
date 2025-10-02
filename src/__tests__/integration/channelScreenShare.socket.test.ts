// src/__tests__/integration/channelScreenShare.socket.test.ts
import { io as Client, Socket } from "socket.io-client";
import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";

jest.setTimeout(30000);

describe("Channel Screen Share Socket.IO", () => {
    let clientSocket: Socket;
    let otherSocket: Socket;
    let user: any;
    let otherUser: any;
    let token: string;
    let otherToken: string;
    let workspace: any;
    let channel: any;
    let connectTimeout: NodeJS.Timeout | null = null;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // start server on a dedicated test port
        await new Promise<void>((resolve) => {
            server.listen(4003, () => {
                console.log("Test server listening on 4003");
                resolve();
            });
        });

        // Create users
        user = await prisma.user.create({
            data: { email: "screen1@example.com", password: "pwd", name: "Screen User 1" },
        });
        otherUser = await prisma.user.create({
            data: { email: "screen2@example.com", password: "pwd", name: "Screen User 2" },
        });

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

    beforeEach((done) => {
        clientSocket = Client("http://localhost:4003", { auth: { token }, transports: ["websocket"] });
        otherSocket = Client("http://localhost:4003", { auth: { token: otherToken }, transports: ["websocket"] });

        let connected = 0;
        function tryJoin() {
            // join both sockets into the channel using ack callbacks and wait both acks
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

            // emit channel:join with callback ack (handler exists in your call handler)
            clientSocket.emit("channel:join", { channelId: channel.id }, onAck);
            otherSocket.emit("channel:join", { channelId: channel.id }, onAck);
        }

        clientSocket.on("connect", () => {
            connected++;
            if (connected === 2) tryJoin();
        });
        otherSocket.on("connect", () => {
            connected++;
            if (connected === 2) tryJoin();
        });

        // fallback timeout (in case something went wrong)
        connectTimeout = setTimeout(() => {
            connectTimeout = null;
            done(new Error("Sockets failed to connect/join in beforeEach"));
        }, 5000);
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

        // clean DB relations then channel
        if (channel?.id) {
            await prisma.userOnChannel.deleteMany({ where: { channelId: channel.id } }).catch(() => { });
            await prisma.channel.delete({ where: { id: channel.id } }).catch(() => { });
        }

        await prisma.$disconnect();
        server.close();
    });

    it("should send and receive screen share offer", (done) => {
        otherSocket.once("channel:call:incomingScreenShareOffer", (data: any) => {
            try {
                // payload from handler: { fromUserId, offer }
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("offer");
                expect(data.offer).toHaveProperty("sdp", "fake-screen-offer-sdp");
                done();
            } catch (err) {
                done(err);
            }
        });

        // send offer: handler expects { channelId, offer }
        clientSocket.emit("channel:call:screenShareOffer", {
            channelId: channel.id,
            offer: { sdp: "fake-screen-offer-sdp" },
        });
    });

    it("should send and receive screen share answer", (done) => {
        // Handler emits event name: 'channel:call:screenShareAnswer' (note: no 'incoming' prefix in handler)
        otherSocket.once("channel:call:screenShareAnswer", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                expect(data).toHaveProperty("answer");
                expect(data.answer).toHaveProperty("sdp", "fake-screen-answer-sdp");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("channel:call:screenShareAnswer", {
            channelId: channel.id,
            answer: { sdp: "fake-screen-answer-sdp" },
        });
    });

    it("should forward screen share ICE candidate", (done) => {
        // handler emits 'channel:call:screenShareIceCandidate' (same name)
        otherSocket.once("channel:call:screenShareIceCandidate", (data: any) => {
            try {
                expect(data).toHaveProperty("candidate", "fake-screen-candidate");
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("channel:call:screenShareIceCandidate", {
            channelId: channel.id,
            candidate: "fake-screen-candidate",
        });
    });

    it("should notify when screen share stopped", (done) => {
        otherSocket.once("channel:call:screenStopped", (data: any) => {
            try {
                expect(data).toHaveProperty("fromUserId", user.id);
                done();
            } catch (err) {
                done(err);
            }
        });

        clientSocket.emit("channel:call:stopScreenShare", { channelId: channel.id });
    });
});

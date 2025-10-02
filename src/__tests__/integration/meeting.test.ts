import prisma from "../../config/db";
import request from "supertest";
import { app, server } from "../../server";
import { cleanupDb } from "../../utils/cleanup";
import { generateAccessToken } from "../../utils/jwt";

// Mock googleapis
jest.mock("googleapis", () => {
    const eventsMock = {
        insert: jest.fn().mockResolvedValue({
            data: { id: "google-event-id", htmlLink: "http://google.com/event", hangoutLink: "http://meet.google.com/test" },
        }),
        patch: jest.fn().mockResolvedValue({}),
        delete: jest.fn().mockResolvedValue({}),
    };

    return {
        google: {
            auth: {
                OAuth2: jest.fn().mockImplementation(() => ({
                    generateAuthUrl: jest.fn().mockReturnValue("http://fake-auth-url"),
                    getToken: jest.fn().mockResolvedValue({ tokens: { access_token: "fake-access", refresh_token: "fake-refresh" } }),
                    setCredentials: jest.fn(),
                    refreshAccessToken: jest.fn().mockResolvedValue({
                        credentials: { access_token: "new-access" },
                    }),
                })),
            },
            calendar: jest.fn().mockReturnValue({
                events: eventsMock,
            }),
            people: jest.fn().mockReturnValue({
                people: {
                    get: jest.fn().mockResolvedValue({
                        data: { emailAddresses: [{ value: "test@gmail.com" }], names: [{ displayName: "Fake User" }] },
                    }),
                },
            }),
        },
    };
});

describe("MeetingService Integration", () => {
    let user: any;
    let workspace: any;
    let channel: any;
    let token: string;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        user = await prisma.user.create({
            data: {
                name: "Test User",
                email: "test@user.com",
                password: "@Test1234",
            },
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
                UserOnChannels: {
                    create: { userId: user.id, role: "OWNER" },
                },
            },
        });
    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
        server.close();
    });

    it("should schedule a meeting successfully", async () => {
        const res = await request(app)
            .post(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings`)
            .set("Authorization", token)
            .send({
                title: "Daily Standup",
                description: "Team sync",
                startTime: new Date(Date.now() + 3600000).toISOString(),
                endTime: new Date(Date.now() + 7200000).toISOString(),
                location: "Zoom",
            });

        expect(res.status).toBe(201);
        expect(res.body.data).toHaveProperty("title", "Daily Standup");
    });

    it("should forbid scheduling meeting if not channel member", async () => {
        const otherUser = await prisma.user.create({
            data: {
                name: "Other User",
                email: "other@test.com",
                password: "@Test1234",
            },
        });
        const otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

        const res = await request(app)
            .post(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings`)
            .set("Authorization", otherToken)
            .send({
                title: "Hacker Meeting",
                description: "Should fail",
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 3600000).toISOString(),
            });

        expect(res.status).toBe(403);
    });

    it("should get all meetings in a channel", async () => {
        const res = await request(app)
            .get(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings`)
            .set("Authorization", token);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should get a meeting by id", async () => {
        const meeting = await prisma.meeting.create({
            data: {
                title: "Planning",
                description: "Planning meeting",
                startTime: new Date(Date.now() + 3600000),
                endTime: new Date(Date.now() + 7200000),
                channelId: channel.id,
                organizerId: user.id,
            },
        });

        const res = await request(app)
            .get(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings/${meeting.id}`)
            .set("Authorization", token);

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("title", "Planning");
    });

    it("should update a meeting successfully", async () => {
        const meeting = await prisma.meeting.create({
            data: {
                title: "Retro",
                description: "Old meeting",
                startTime: new Date(Date.now() + 3600000),
                endTime: new Date(Date.now() + 7200000),
                channelId: channel.id,
                organizerId: user.id,
            },
        });

        const res = await request(app)
            .put(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings/${meeting.id}`)
            .set("Authorization", token)
            .send({ title: "Updated Retro" });

        expect(res.status).toBe(200);
        expect(res.body.data.title).toBe("Updated Retro");
    });

    it("should soft delete a meeting successfully", async () => {
        const meeting = await prisma.meeting.create({
            data: {
                title: "One-time",
                description: "To delete",
                startTime: new Date(Date.now() + 3600000),
                endTime: new Date(Date.now() + 7200000),
                channelId: channel.id,
                organizerId: user.id,
            },
        });

        const res = await request(app)
            .delete(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/meetings/${meeting.id}`)
            .set("Authorization", token);

        expect(res.status).toBe(200);

        const deleted = await prisma.meeting.findUnique({ where: { id: meeting.id } });
        expect(deleted?.deletedAt).not.toBeNull();
    });
});

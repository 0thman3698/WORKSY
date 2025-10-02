import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { generateAccessToken } from "../../utils/jwt";
import { cleanupDb } from "../../utils/cleanup";
import { ChannelRole } from "@prisma/client";

describe("Channel Members Integration", () => {
    let owner: any;
    let member: any;
    let tokenOwner: string;
    let tokenMember: string;
    let workspace: any;
    let channel: any;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        owner = await prisma.user.create({
            data: {
                name: "Owner User",
                email: "owner@test.com",
                password: "@Test1234",
            },
        });
        tokenOwner = "Bearer " + generateAccessToken(owner.id, owner.role);

        member = await prisma.user.create({
            data: {
                name: "Member User",
                email: "member@test.com",
                password: "@Test1234",
            },
        });
        tokenMember = "Bearer " + generateAccessToken(member.id, member.role);

        workspace = await prisma.workspace.create({
            data: {
                name: "Default Workspace",
                slug: `default-ws-${Date.now()}`,
                ownerId: owner.id,
                members: {
                    create: [
                        { userId: owner.id, role: "OWNER" },
                        { userId: member.id, role: 'MEMBER' }
                    ]
                },
            },
        });

        channel = await prisma.channel.create({
            data: {
                name: "general",
                workspaceId: workspace.id,
                ownerId: owner.id,
                isPublic: true,
            },
        });

    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
        server.close();
    });

    it("should allow user to join a channel", async () => {

        const res = await request(app)
            .post(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/members`)
            .set("Authorization", tokenMember);

        expect(res.status).toBe(201);
        expect(res.body.data).toHaveProperty("userId", member.id);
    });

    it("should return all channel members", async () => {
        const res = await request(app)
            .get(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/members`)
            .set("Authorization", tokenOwner);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should prevent owner from leaving the channel", async () => {
        const res = await request(app)
            .delete(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/members`)
            .set("Authorization", tokenOwner);

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/cannot leave/i);
    });

    it("should allow member to leave the channel", async () => {
        // Add member again if needed
        await prisma.userOnChannel.upsert({
            where: {
                userId_channelId: {
                    userId: member.id,
                    channelId: channel.id,
                },
            },
            update: { deletedAt: null, role: ChannelRole.MEMBER },
            create: {
                userId: member.id,
                channelId: channel.id,
                role: ChannelRole.MEMBER,
            },
        });

        const res = await request(app)
            .delete(`/api/v1/workspace/${workspace.id}/channels/${channel.id}/members`)
            .set("Authorization", tokenMember);

        expect(res.status).toBe(200);
        expect(res.body.data.deletedAt).not.toBeNull();
    });

    it("should change a member's role", async () => {
        // Add member again
        await prisma.userOnChannel.upsert({
            where: {
                userId_channelId: {
                    userId: member.id,
                    channelId: channel.id,
                },
            },
            update: { deletedAt: null, role: ChannelRole.MEMBER },
            create: {
                userId: member.id,
                channelId: channel.id,
                role: ChannelRole.MEMBER,
            },
        });

        const res = await request(app)
            .patch(
                `/api/v1/workspace/${workspace.id}/channels/${channel.id}/members/${member.id}/role`
            )
            .set("Authorization", tokenOwner)
            .send({ role: ChannelRole.ADMIN });
        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("role", ChannelRole.ADMIN);
    });

    it("should kick a member from the channel", async () => {
        // Add member again
        await prisma.userOnChannel.upsert({
            where: {
                userId_channelId: {
                    userId: member.id,
                    channelId: channel.id,
                },
            },
            update: { deletedAt: null, role: ChannelRole.MEMBER },
            create: {
                userId: member.id,
                channelId: channel.id,
                role: ChannelRole.MEMBER,
            },
        });

        const res = await request(app)
            .delete(
                `/api/v1/workspace/${workspace.id}/channels/${channel.id}/members/${member.id}`
            )
            .set("Authorization", tokenOwner);

        expect(res.status).toBe(200);
        expect(res.body.data.deletedAt).not.toBeNull();
    });

    it("should transfer channel ownership", async () => {
        // Add member back
        await prisma.userOnChannel.upsert({
            where: {
                userId_channelId: {
                    userId: member.id,
                    channelId: channel.id,
                },
            },
            update: { deletedAt: null, role: ChannelRole.MEMBER },
            create: {
                userId: member.id,
                channelId: channel.id,
                role: ChannelRole.MEMBER,
            },
        });

        const res = await request(app)
            .patch(
                `/api/v1/workspace/${workspace.id}/channels/${channel.id}/members/transfer-ownership`
            )
            .set("Authorization", tokenOwner)
            .send({ newOwnerId: member.id });

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("ownerId", member.id);
    });
});

import request from "supertest";
import { app } from "../../server";
import prisma from "../../config/db";
import { generateAccessToken } from "../../utils/jwt";
import { WorkspaceRole } from "@prisma/client";
import { cleanupDb } from "../../utils/cleanup";

describe("Workspace Members Integration (via Invites)", () => {
    let owner: any;
    let ownerToken: string;
    let workspace: any;

    beforeAll(async () => {
        await prisma.$connect();
    });

    beforeEach(async () => {
        await cleanupDb();

        owner = await prisma.user.create({
            data: { name: "Owner", email: "owner@example.com", password: "@Test1234" },
        });
        ownerToken = "Bearer " + generateAccessToken(owner.id, owner.role);

        workspace = await prisma.workspace.create({
            data: {
                name: "Default Workspace",
                slug: `default-ws-${Date.now()}`,
                ownerId: owner.id,
                members: { create: [{ userId: owner.id, role: "OWNER" }] },
            },
        });
    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
    });

    // -------- INVITE + ACCEPT --------
    describe("Invite & Accept", () => {
        it("should invite and accept a new member", async () => {
            const newUser = await prisma.user.create({
                data: { name: "User1", email: "user1@example.com", password: "@Test1234" },
            });
            const newUserToken = "Bearer " + generateAccessToken(newUser.id, newUser.role);

            const inviteRes = await request(app)
                .post(`/api/v1/workspace/${workspace.id}/invites`)
                .set("Authorization", ownerToken)
                .send({ email: newUser.email, role: WorkspaceRole.MEMBER });

            expect(inviteRes.status).toBe(201);
            const token = inviteRes.body.data.token;

            const acceptRes = await request(app)
                .patch(`/api/v1/invite/accept/${token}`)
                .set("Authorization", newUserToken);

            expect(acceptRes.status).toBe(200);

            const membership = await prisma.userOnWorkspace.findUnique({
                where: {
                    userId_workspaceId: { userId: newUser.id, workspaceId: workspace.id },
                },
            });
            expect(membership).not.toBeNull();
            expect(membership?.role).toBe("MEMBER");
        });
    });

    // -------- REMOVE MEMBER --------
    describe("DELETE /api/v1/workspace/:id/members/:userId", () => {
        it("should remove a member", async () => {
            const member = await prisma.user.create({
                data: { name: "User2", email: "user2@example.com", password: "@Test1234" },
            });
            await prisma.userOnWorkspace.create({
                data: { userId: member.id, workspaceId: workspace.id, role: "MEMBER" },
            });

            const res = await request(app)
                .delete(`/api/v1/workspace/${workspace.id}/members/${member.id}`)
                .set("Authorization", ownerToken);

            expect(res.status).toBe(200);
            expect(res.body.data.deletedAt).not.toBeNull();
        });
    });

    // -------- LEAVE WORKSPACE --------
    describe("DELETE /api/v1/workspace/:id/members", () => {
        it("should allow a non-owner to leave", async () => {
            const member = await prisma.user.create({
                data: { name: "User3", email: "user3@example.com", password: "@Test1234" },
            });
            const memberToken = "Bearer " + generateAccessToken(member.id, member.role);

            await prisma.userOnWorkspace.create({
                data: { userId: member.id, workspaceId: workspace.id, role: "MEMBER" },
            });

            const res = await request(app)
                .delete(`/api/v1/workspace/${workspace.id}/members`)
                .set("Authorization", memberToken);

            expect(res.status).toBe(200);
            expect(res.body.data.deletedAt).not.toBeNull();
        });
    });

    // -------- CHANGE ROLE --------
    describe("PATCH /api/v1/workspace/:id/members/:userId/role", () => {
        it("should change member role", async () => {
            const member = await prisma.user.create({
                data: { name: "User4", email: "user4@example.com", password: "@Test1234" },
            });
            await prisma.userOnWorkspace.create({
                data: { userId: member.id, workspaceId: workspace.id, role: "MEMBER" },
            });

            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}/members/${member.id}/role`)
                .set("Authorization", ownerToken)
                .send({ role: WorkspaceRole.ADMIN });

            expect(res.status).toBe(200);
            expect(res.body.data.role).toBe("ADMIN");
        });
    });

    // -------- GET ALL MEMBERS --------
    describe("GET /api/v1/workspace/:id/members", () => {
        it("should fetch all active members", async () => {
            const res = await request(app)
                .get(`/api/v1/workspace/${workspace.id}/members`)
                .set("Authorization", ownerToken);

            expect(res.status).toBe(200);
            expect(res.body.data.length).toBe(1);
            expect(res.body.data[0].user.id).toBe(owner.id);
        });
    });

    // -------- TRANSFER OWNERSHIP --------
    describe("PATCH /api/v1/workspace/:id/members/transfer-ownership", () => {
        it("should transfer ownership to another active member", async () => {
            const newOwner = await prisma.user.create({
                data: { name: "User5", email: "user5@example.com", password: "@Test1234" },
            });
            await prisma.userOnWorkspace.create({
                data: { userId: newOwner.id, workspaceId: workspace.id, role: "MEMBER" },
            });

            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}/members/transfer-ownership`)
                .set("Authorization", ownerToken)
                .send({ newOwnerId: newOwner.id });

            expect(res.status).toBe(200);
            expect(res.body.data.ownerId).toBe(newOwner.id);
        });
    });
});

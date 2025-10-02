import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { generateAccessToken } from "../../utils/jwt";
import { cleanupDb } from "../../utils/cleanup";
import { Role } from "@prisma/client";

describe("UserService Integration", () => {
    let user: any;
    let token: string;

    beforeAll(async () => {
        await prisma.$connect();
    });

    beforeEach(async () => {
        await cleanupDb();

        user = await prisma.user.create({
            data: {
                name: "Test User",
                email: "testuser@example.com",
                password: "@Test1234",

            },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);
    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
        server.close();
    });

    // -------- GET CURRENT USER --------
    describe("GET /api/v1/users/me", () => {
        it("should fetch current user", async () => {
            const res = await request(app)
                .get("/api/v1/users/me")
                .set("Authorization", token);

            expect(res.status).toBe(200);
            expect(res.body.data.email).toBe(user.email);
        });

        it("should return 404 if user does not exist", async () => {
            await prisma.user.delete({ where: { id: user.id } });

            const res = await request(app)
                .get("/api/v1/users/me")
                .set("Authorization", token);

            expect(res.status).toBe(401);
        });
    });

    // -------- UPDATE ME --------
    describe("PATCH /api/v1/users/me", () => {
        it("should update allowed fields", async () => {
            const res = await request(app)
                .patch("/api/v1/users/me")
                .set("Authorization", token)
                .send({ name: "Updated Name", avatar: "https://example.com/mhmd.png" });

            expect(res.status).toBe(200);
            expect(res.body.data.name).toBe("Updated Name");
            expect(res.body.data.avatar).toBe("https://example.com/mhmd.png");
        });

        it("should throw 400 if updating disallowed fields", async () => {
            const res = await request(app)
                .patch("/api/v1/users/me")
                .set("Authorization", token)
                .send({ name: 'does not matter', role: Role.APP_OWNER });


            expect(res.status).toBe(400);
            expect(res.body.message).toMatch(/Validation failed/i);
        });
    });

    // -------- SOFT DELETE USER --------
    describe("DELETE /api/v1/users/me", () => {
        it("should soft delete user", async () => {
            const owner = await prisma.user.create({
                data: { name: "Owner", email: "owner2@example.com", password: "@Test1234", role: Role.APP_OWNER },
            });
            const ownerToken = "Bearer " + generateAccessToken(owner.id, owner.role);
            const res = await request(app)
                .delete(`/api/v1/users/${user.id}`)
                .set("Authorization", ownerToken);

            expect(res.status).toBe(200);

            const deletedUser = await prisma.user.findUnique({ where: { id: user.id } });
            expect(deletedUser?.deletedAt).not.toBeNull();
        });
    });

    // -------- GET ALL USERS (APP_ADMIN) --------
    describe("GET /api/v1/users", () => {
        it("should fetch all users for APP_OWNER", async () => {
            const owner = await prisma.user.create({
                data: { name: "Owner", email: "owner@example.com", password: "@Test1234", role: Role.APP_OWNER },
            });
            const ownerToken = "Bearer " + generateAccessToken(owner.id, owner.role);

            const res = await request(app)
                .get("/api/v1/users")
                .set("Authorization", ownerToken);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body.data)).toBe(true);
        });

        it("should return 403 if non-APP_OWNER tries to fetch users", async () => {
            const res = await request(app)
                .get("/api/v1/users")
                .set("Authorization", token);

            expect(res.status).toBe(403);
        });
    });

    // -------- UPDATE USER ROLE (APP_ADMIN) --------
    describe("PATCH /api/v1/users/:id/role", () => {
        it("should allow APP_OWNER to update user role", async () => {
            const owner = await prisma.user.create({
                data: { name: "Owner", email: "owner2@example.com", password: "@Test1234", role: Role.APP_OWNER },
            });
            const ownerToken = "Bearer " + generateAccessToken(owner.id, owner.role);

            const res = await request(app)
                .patch(`/api/v1/users/${user.id}/role`)
                .set("Authorization", ownerToken)
                .send({ newRole: Role.APP_ADMIN });

            expect(res.status).toBe(200);
            expect(res.body.data.role).toBe(Role.APP_ADMIN);
        });

        it("should return 400 if APP_OWNER tries to change their own role", async () => {
            const owner = await prisma.user.create({
                data: { name: "Owner", email: "owner3@example.com", password: "@Test1234", role: Role.APP_OWNER },
            });
            const ownerToken = "Bearer " + generateAccessToken(owner.id, owner.role);

            const res = await request(app)
                .patch(`/api/v1/users/${owner.id}/role`)
                .set("Authorization", ownerToken)
                .send({ newRole: Role.APP_ADMIN });

            expect(res.status).toBe(400);
        });

        it("should return 403 if non-APP_OWNER tries to change role", async () => {
            const res = await request(app)
                .patch(`/api/v1/users/${user.id}/role`)
                .set("Authorization", token)
                .send({ newRole: Role.APP_ADMIN });

            expect(res.status).toBe(403);
        });
    });
});

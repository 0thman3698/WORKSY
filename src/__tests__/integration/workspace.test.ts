import request from 'supertest'
import { app, server } from '../../server'
import prisma from '../../config/db'
import { generateAccessToken } from "../../utils/jwt"
import { cleanupDb } from '../../utils/cleanup'


describe('Workspace Integration', () => {
    let user: any;
    let token: string;
    let workspace: any;

    beforeAll(async () => {
        await prisma.$connect();
    });

    beforeEach(async () => {
        await cleanupDb()

        user = await prisma.user.create({
            data: {
                name: 'Test User',
                email: 'testuser@example.com',
                password: '@Test1234',
            },
        });

        token = "Bearer " + generateAccessToken(user.id, user.role);

        // const res = await request(app)
        //     .post("/api/v1/workspace")
        //     .set("Authorization", token)
        //     .send({ name: "Default Workspace" });

        // workspace = res.body.data;

        workspace = await prisma.workspace.create({
            data: {
                name: "Default Workspace",
                slug: `default-ws-${Date.now()}`,
                ownerId: user.id,
                members: {
                    create: [
                        { userId: user.id, role: "OWNER" },
                    ],
                },
            },
        });
    });

    afterAll(async () => {
        await cleanupDb()
        await prisma.$disconnect();
    });

    // -------- CREATE --------
    describe('POST /api/v1/workspace', () => {
        it('should create workspace', async () => {
            const res = await request(app)
                .post("/api/v1/workspace")
                .set("Authorization", token)
                .send({ name: "My Test Workspace" });

            expect(res.status).toBe(201);
            expect(res.body.data.name).toBe("My Test Workspace");
        });

        it("should return error if user creates duplicate workspace name", async () => {
            await request(app)
                .post("/api/v1/workspace")
                .set("Authorization", token)
                .send({ name: "Duplicate Workspace" });

            const res = await request(app)
                .post("/api/v1/workspace")
                .set("Authorization", token)
                .send({ name: "Duplicate Workspace" });

            expect(res.status).toBe(400);
            expect(res.body.message).toMatch(/already have a workspace/i);
        });

        it("should return 400 if name is missing", async () => {
            const res = await request(app)
                .post("/api/v1/workspace")
                .set("Authorization", token)
                .send({});

            expect(res.status).toBe(400);
        });
    });

    // -------- READ --------
    describe('GET /api/v1/workspace', () => {
        it("should fetch my workspaces", async () => {
            const res = await request(app)
                .get("/api/v1/workspace")
                .set("Authorization", token);

            expect(res.status).toBe(200);
            expect(res.body.data.length).toBe(1);
            expect(res.body.data[0].owner.id).toBe(user.id);
        });

        it("should return empty array if user has no workspaces", async () => {
            const otherUser = await prisma.user.create({
                data: {
                    name: 'Other User',
                    email: 'other@example.com',
                    password: '@Test1234',
                },
            });
            const otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

            const res = await request(app)
                .get("/api/v1/workspace")
                .set("Authorization", otherToken);

            expect(res.status).toBe(200);
            expect(res.body.data).toEqual([]);
        });
    });

    // -------- UPDATE --------
    describe('PATCH /api/v1/workspace/:id', () => {
        it("should update workspace", async () => {
            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}`)
                .set("Authorization", token)
                .send({ name: 'Updated Workspace' });

            expect(res.status).toBe(200);
            expect(res.body.data.name).toBe("Updated Workspace");
        });

        it("should return 404 if workspace not found", async () => {
            const fakeId = "11111111-1111-1111-1111-111111111111";
            const res = await request(app)
                .patch(`/api/v1/workspace/${fakeId}`)
                .set("Authorization", token)
                .send({ name: "Doesn't Matter" });

            expect(res.status).toBe(404);
        });

        it("should return 403 if user is not owner", async () => {
            const otherUser = await prisma.user.create({
                data: {
                    name: 'Other User',
                    email: 'other@example.com',
                    password: '@Test1234',
                },
            });
            const otherToken = "Bearer " + generateAccessToken(otherUser.id, otherUser.role);

            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}`)
                .set("Authorization", otherToken)
                .send({ name: "not owner" });

            expect(res.status).toBe(403);
        });
    });

    // -------- DELETE --------
    describe('DELETE /api/v1/workspace/:id', () => {
        it('should delete workspace', async () => {
            const res = await request(app)
                .delete(`/api/v1/workspace/${workspace.id}`)
                .set("Authorization", token);

            expect(res.status).toBe(200);
        });

        it('should return 404 if workspace already deleted', async () => {
            await request(app)
                .delete(`/api/v1/workspace/${workspace.id}`)
                .set("Authorization", token);

            const res = await request(app)
                .delete(`/api/v1/workspace/${workspace.id}`)
                .set("Authorization", token);

            expect(res.status).toBe(404);
        });
    });

    // -------- AUTH ERRORS --------
    describe('Authorization checks', () => {
        it("should return 401 if no token provided", async () => {
            const res = await request(app)
                .get("/api/v1/workspace");

            expect(res.status).toBe(401);
        });

        it("should return 401 if token is invalid", async () => {
            const res = await request(app)
                .get("/api/v1/workspace")
                .set("Authorization", "Bearer invalidtoken");

            expect(res.status).toBe(401);
        });
    });
});

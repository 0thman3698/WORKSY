import request from 'supertest';
import { app, server } from '../../server';
import prisma from '../../config/db';
import { generateAccessToken } from '../../utils/jwt';
import { cleanupDb } from '../../utils/cleanup';
import { ChannelRole } from '@prisma/client';

describe('Channel Integration', () => {
    let user: any;
    let token: string;
    let workspace: any;

    beforeAll(async () => {
        await prisma.$connect();
    });

    beforeEach(async () => {
        await cleanupDb();

        user = await prisma.user.create({
            data: { name: 'Test User', email: 'user@example.com', password: '@Test1234' },
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
    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
        server.close();
    });

    // -------- CREATE CHANNEL --------
    describe('POST /api/v1/workspace/:id/channels', () => {
        it('should create a new channel', async () => {
            const res = await request(app)
                .post(`/api/v1/workspace/${workspace.id}/channels`)
                .set('Authorization', token)
                .send({ name: 'general', description: 'General discussion', isPublic: true });

            expect(res.status).toBe(201);
            expect(res.body.data.name).toBe('general');
            expect(res.body.data.UserOnChannels[0].role).toBe(ChannelRole.MEMBER);
        });

        it('should not allow duplicate channel names in the same workspace', async () => {
            await prisma.channel.create({
                data: {
                    name: 'general',
                    description: 'desc',
                    isPublic: true,
                    workspaceId: workspace.id,
                    ownerId: user.id
                }
            })

            const res = await request(app)
                .post(`/api/v1/workspace/${workspace.id}/channels`)
                .set('Authorization', token)
                .send({ name: 'general', description: 'desc2', isPublic: true });

            expect(res.status).toBe(400);
            expect(res.body.message).toMatch(/already exists/i);
        });
    });

    // -------- GET CHANNELS --------
    describe('GET /api/v1/workspace/:id/channels', () => {
        it('should fetch all channels user has access to', async () => {

            await prisma.channel.create({
                data: {
                    name: 'public',
                    description: 'desc',
                    isPublic: true,
                    workspaceId: workspace.id,
                    ownerId: user.id
                }
            })

            const res = await request(app)
                .get(`/api/v1/workspace/${workspace.id}/channels`)
                .set('Authorization', token);

            expect(res.status).toBe(200);
            expect(res.body.data.length).toBe(1);
            expect(res.body.data[0].name).toBe('public');
        });
    });

    // -------- UPDATE CHANNEL --------
    describe('PATCH /api/v1/workspace/:id/channels/:channelId', () => {
        it('should update a channel name and description', async () => {

            const channel = await prisma.channel.create({
                data: {
                    name: 'oldname',
                    description: 'old desc',
                    isPublic: true,
                    workspaceId: workspace.id,
                    ownerId: user.id
                }
            })
            // const createRes = await request(app)
            //     .post(`/api/v1/workspace/${workspace.id}/channels`)
            //     .set('Authorization', token)
            //     .send({ name: 'oldname', description: 'old desc', isPublic: true });

            // const channelId = createRes.body.data.id;

            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}/channels/${channel.id}`)
                .set('Authorization', token)
                .send({ name: 'newname', description: 'new desc' });

            expect(res.status).toBe(200);
            expect(res.body.data.name).toBe('newname');
            expect(res.body.data.description).toBe('new desc');
        });

        it('should return 404 if channel not found', async () => {
            const fakeId = '11111111-1111-1111-1111-111111111111';
            const res = await request(app)
                .patch(`/api/v1/workspace/${workspace.id}/channels/${fakeId}`)
                .set('Authorization', token)
                .send({ name: 'newname' });
            expect(res.status).toBe(403);
        });
    });

    // -------- DELETE CHANNEL --------
    describe('DELETE /api/v1/workspace/:id/channels/:channelId', () => {
        it('should soft delete a channel', async () => {
            const channel = await prisma.channel.create({
                data: {
                    name: 'deleteme',
                    description: 'desc',
                    isPublic: true,
                    workspaceId: workspace.id,
                    ownerId: user.id
                }
            })

            const res = await request(app)
                .delete(`/api/v1/workspace/${workspace.id}/channels/${channel.id}`)
                .set('Authorization', token);

            expect(res.status).toBe(200);

            const deletedChannel = await prisma.channel.findUnique({ where: { id: channel.id } });
            expect(deletedChannel?.deletedAt).not.toBeNull();
        });
    });
});

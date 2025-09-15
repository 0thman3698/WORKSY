import { workspaceService } from '../services/workspace.service';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from '../utils/fillter';

// 🛠️ Mock prisma
jest.mock('../config/db');

// 🛠️ Mock utils
jest.mock('../utils/fillter', () => ({
    buildPrismaQuery: jest.fn(),
}));

describe('WorkspaceService', () => {
    const userId = 'user-123';
    const workspaceId = 'ws-123';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // ---------------- createWorkspace ----------------
    describe('createWorkspace', () => {
        it('should throw error if user already has workspace with same name', async () => {
            (prisma.workspace.findFirst as any).mockResolvedValueOnce({ id: 'ws1' });

            await expect(
                workspaceService.createWorkspace({ name: 'Test' }, userId),
            ).rejects.toThrow('You already have a workspace with this name');
        });

        it('should throw error if slug already exists', async () => {
            (prisma.workspace.findFirst as any)
                .mockResolvedValueOnce(null) // no workspace with same name
                .mockResolvedValueOnce({ id: 'ws2' }); // but slug exists

            await expect(
                workspaceService.createWorkspace({ name: 'Test' }, userId),
            ).rejects.toThrow('A workspace with similar slug already exists');
        });

        it('should throw error if user exceeded max workspaces', async () => {
            (prisma.workspace.findFirst as any)
                .mockResolvedValueOnce(null) // no same name
                .mockResolvedValueOnce(null); // no slug conflict
            (prisma.workspace.count as any).mockResolvedValueOnce(5);

            process.env.MAX_WORKSPACES = '5';

            await expect(
                workspaceService.createWorkspace({ name: 'Test' }, userId),
            ).rejects.toThrow('You can only create up to 5 workspaces.');
        });

        it('should create a workspace successfully', async () => {
            (prisma.workspace.findFirst as any)
                .mockResolvedValueOnce(null)
                .mockResolvedValueOnce(null);
            (prisma.workspace.count as any).mockResolvedValueOnce(0);

            const created = { id: 'ws-new', name: 'Test' };
            (prisma.workspace.create as any).mockResolvedValueOnce(created);

            const result = await workspaceService.createWorkspace({ name: 'Test' }, userId);

            expect(result).toEqual({ workspace: created });
            expect(prisma.workspace.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        name: 'Test',
                        ownerId: userId,
                        members: expect.any(Object),
                    }),
                }),
            );
        });
    });

    // ---------------- getMyWorkspaces ----------------
    describe('getMyWorkspaces', () => {
        it('should return mapped workspaces', async () => {
            (buildPrismaQuery as any).mockReturnValue({
                filters: null,
                orderBy: null,
                skip: undefined,
                take: undefined,
            });

            (prisma.userOnWorkspace.findMany as any).mockResolvedValueOnce([
                {
                    role: 'OWNER',
                    workspace: {
                        id: 'ws1',
                        name: 'My WS',
                        owner: { id: 'u1', name: 'Owner1' },
                    },
                },
            ]);

            const result = await workspaceService.getMyWorkspaces(userId, {});

            expect(result).toEqual([
                {
                    id: 'ws1',
                    name: 'My WS',
                    role: 'OWNER',
                    owner: { id: 'u1', name: 'Owner1' },
                },
            ]);
        });
    });

    // ---------------- updateWorkspace ----------------
    describe('updateWorkspace', () => {
        it('should throw if another workspace with same name exists', async () => {
            (prisma.workspace.findFirst as any).mockResolvedValueOnce({ id: 'ws2' });

            await expect(
                workspaceService.updateWorkspace(workspaceId, { name: 'Test' }, userId),
            ).rejects.toThrow('You already have another workspace with this name.');
        });

        it('should update workspace successfully', async () => {
            (prisma.workspace.findFirst as any).mockResolvedValueOnce(null);

            const updated = { id: workspaceId, name: 'Updated WS' };
            (prisma.workspace.update as any).mockResolvedValueOnce(updated);

            const result = await workspaceService.updateWorkspace(
                workspaceId,
                { name: 'Updated WS' },
                userId,
            );

            expect(result).toEqual(updated);
        });
    });

    // ---------------- deleteWorkspace ----------------
    describe('deleteWorkspace', () => {
        it('should throw if workspace not found', async () => {
            (prisma.workspace.findUnique as any).mockResolvedValueOnce(null);

            await expect(
                workspaceService.deleteWorkspace(workspaceId, userId),
            ).rejects.toThrow('Workspace not found.');
        });

        it('should throw if workspace already deleted', async () => {
            (prisma.workspace.findUnique as any).mockResolvedValueOnce({
                id: workspaceId,
                deletedAt: new Date(),
            });

            await expect(
                workspaceService.deleteWorkspace(workspaceId, userId),
            ).rejects.toThrow('Workspace is already deleted.');
        });

        it('should soft delete workspace', async () => {
            (prisma.workspace.findUnique as any).mockResolvedValueOnce({
                id: workspaceId,
                deletedAt: null,
            });

            const deleted = { id: workspaceId, deletedAt: new Date() };
            (prisma.workspace.update as any).mockResolvedValueOnce(deleted);

            const result = await workspaceService.deleteWorkspace(workspaceId, userId);

            expect(result).toEqual(deleted);
            expect(prisma.workspace.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: { id: workspaceId },
                    data: expect.objectContaining({
                        deletedAt: expect.any(Date),
                    }),
                }),
            );
        });
    });

    // ---------------- getWorkspaceById ----------------
    describe('getWorkspaceById', () => {
        it('should throw if workspace not found or deleted', async () => {
            (prisma.workspace.findFirst as any).mockResolvedValueOnce(null);

            await expect(
                workspaceService.getWorkspaceById(workspaceId),
            ).rejects.toThrow('Workspace not found or is already deleted');
        });

        it('should return workspace if exists', async () => {
            const ws = { id: workspaceId, name: 'My WS', deletedAt: null };
            (prisma.workspace.findFirst as any).mockResolvedValueOnce(ws);

            const result = await workspaceService.getWorkspaceById(workspaceId);

            expect(result).toEqual(ws);
        });
    });
});

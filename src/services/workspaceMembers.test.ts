import prisma from '../config/db'
import { workspaceMembersService } from '../services/workspaceMembers'
import { Role, WorkspaceRole } from '@prisma/client'

jest.mock('../config/db')

describe('WorkspaceMembersService', () => {
    const userId = 'user-123'
    const workspaceId = 'ws-123'
    const targetUserId = 'user-456'

    beforeEach(() => {
        jest.clearAllMocks()
    })

    /////add member////////
    describe('addMember', () => {
        it('should throw  error if user is member of this workspace', async () => {
            (prisma.userOnWorkspace.findUnique as any).mockResolvedValue({ deletedAt: null })
            await expect(workspaceMembersService.addMember(workspaceId, userId)).rejects.toThrow("User is already a member of this workspace.")
            expect(prisma.userOnWorkspace.findUnique).toHaveBeenCalledWith({
                where: { userId_workspaceId: { userId, workspaceId } }
            })
        })

        it('should restore if deleted', async () => {
            (prisma.userOnWorkspace.findUnique as any).mockResolvedValue({ userId, workspaceId, deletedAt: new Date() })
                ; (prisma.userOnWorkspace.update as any).mockResolvedValue({ userId, workspaceId, deletedAt: null })

            await expect(workspaceMembersService.addMember(workspaceId, userId)).resolves.toEqual({ userId, workspaceId, deletedAt: null })

            expect(prisma.userOnWorkspace.update).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    userId_workspaceId: { userId, workspaceId },
                },
                data: { deletedAt: null, role: WorkspaceRole.MEMBER }

            }))
        })

        it('should create if not existng', async () => {
            (prisma.userOnWorkspace.findUnique as any).mockResolvedValue(null)
                ; (prisma.userOnWorkspace.create as any).mockResolvedValue({ userId, workspaceId, deletedAt: null })

            await expect(workspaceMembersService.addMember(workspaceId, userId)).resolves.toEqual({ userId, workspaceId, deletedAt: null })
            expect(prisma.userOnWorkspace.create).toHaveBeenCalledWith({ data: { userId, workspaceId, role: WorkspaceRole.MEMBER } })

        })

    })
    describe('removeMember', () => {

        it('should throw error if workspace not found', async () => {
            (prisma.workspace.findUnique as jest.Mock).mockReturnValue(null)

            await expect(workspaceMembersService.removeMember(workspaceId, targetUserId, userId)).rejects.toThrow("Workspace not found.")
            expect(prisma.workspace.findUnique).toHaveBeenCalledWith({
                where: { id: workspaceId },
                select: { ownerId: true }
            })

        })

        it('should throw error if trying to remove himself', async () => {
            (prisma.workspace.findUnique as jest.Mock).mockReturnValue({ ownerId: "owner" })

            await expect(workspaceMembersService.removeMember(workspaceId, userId, userId)).rejects.toThrow("You cannot remove yourself from the workspace.")
        })

        it('should throw error if trying to remove owner', async () => {
            (prisma.workspace.findUnique as jest.Mock).mockReturnValue({ ownerId: targetUserId })

            await expect(workspaceMembersService.removeMember(workspaceId, targetUserId, userId)).rejects.toThrow("You can't remove the workspace owner.")
        })
        it('should throw if member not found', async () => {
            (prisma.workspace.findUnique as jest.Mock).mockReturnValue({ ownerId: 'OWNER' })
                ; (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue(null)

            await expect(workspaceMembersService.removeMember(workspaceId, targetUserId, userId)).rejects.toThrow("User is not an active member of this workspace.")
        })

        it('should soft delete member', async () => {
            const updated = { userId: targetUserId, deletedAt: new Date() };
            (prisma.workspace.findUnique as jest.Mock).mockReturnValue({ ownerId: 'OWNER' })

                ; (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue({ deletedAt: null })
                ; (prisma.userOnWorkspace.update as jest.Mock).mockReturnValue(updated)

            const result = await workspaceMembersService.removeMember(workspaceId, targetUserId, userId)

            expect(result).toEqual(updated);

        })
    })
    describe('leaveMember', () => {
        it('should throw if workspace not found', async () => {
            (prisma.workspace.findUnique as jest.Mock).
                mockReturnValue(null)

            await expect(workspaceMembersService.leaveMember(workspaceId, userId)).rejects.toThrow('Workspace not found.')
        })
        it('should throw if owner try to leave', async () => {
            (prisma.workspace.findUnique as jest.Mock).
                mockReturnValue({ ownerId: userId })

            await expect(workspaceMembersService.leaveMember(workspaceId, userId)).rejects.toThrow('Workspace owner cannot leave. Transfer ownership first.')
        })
        it('should throw if you are not member of workspace', async () => {
            (prisma.workspace.findUnique as jest.Mock).
                mockReturnValue({ ownerId: 'Owner' })
                ; (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue(null)

            await expect(workspaceMembersService.leaveMember(workspaceId, userId)).rejects.toThrow('You are not an active member of this workspace.')
        })
        it('should soft delete self', async () => {
            const updated = { userId, deletedAt: new Date() };

            (prisma.workspace.findUnique as jest.Mock).
                mockReturnValue({ ownerId: 'Owner' })
                ; (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue({ deletedAt: null })
                ; (prisma.userOnWorkspace.update as jest.Mock).mockReturnValue(updated)

            await expect(workspaceMembersService.leaveMember(workspaceId, userId)).resolves.toEqual(updated)
        })
    })
    describe('ChangeMemberRole', () => {
        it('should throw if user not found', async () => {
            (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue(null)

            await expect(workspaceMembersService.changeMemberRole(workspaceId, targetUserId, 'ADMIN')).rejects.toThrow('User not found or is not an active member.')
        })
        it('should update member role', async () => {
            (prisma.userOnWorkspace.findUnique as jest.Mock).mockReturnValue({ deletetAt: null })
                ; (prisma.userOnWorkspace.update as jest.Mock).mockReturnValue({ targetUserId, role: 'ADMIN' })

            await expect(workspaceMembersService.changeMemberRole(workspaceId, targetUserId, 'ADMIN')).resolves.toEqual({ targetUserId, role: 'ADMIN' })
        })

    })
    describe('getAllMembers', () => {
        it('should return active members with user info', async () => {
            const members = [{ user: { id: "u1", name: "test", email: "t@e.com" } }];

            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue(members);

            await expect(workspaceMembersService.getAllMembers(workspaceId)).resolves.toEqual(members)

        })
    })
    describe('transferWorkspaceOwnership', () => {
        it("should throw if new owner not active", async () => {
            (prisma.userOnWorkspace.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(workspaceMembersService.transferWorkspaceOwnership(workspaceId, targetUserId)).rejects.toThrow('New owner must be an active member of the workspace.')
        })
        it("should update workspace and set role to OWNER", async () => {
            const updatedWs = { id: workspaceId, ownerId: targetUserId };
            (prisma.userOnWorkspace.findUnique as jest.Mock).mockResolvedValue({ deletedAt: null, role: WorkspaceRole.MEMBER })
                ; (prisma.workspace.update as jest.Mock).mockResolvedValue(updatedWs)
                ; (prisma.userOnWorkspace.update as jest.Mock).mockResolvedValue({ role: WorkspaceRole.OWNER, userId: targetUserId })

            await expect(workspaceMembersService.transferWorkspaceOwnership(workspaceId, targetUserId)).resolves.toEqual(updatedWs)

        })
    })
})
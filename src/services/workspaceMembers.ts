import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { WorkspaceRole } from '@prisma/client';

export class WorkspaceMembersService {
    async addMember(workspaceId: string, userId: string, role: WorkspaceRole = WorkspaceRole.MEMBER) {
        const existing = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId, workspaceId } },
        });

        if (existing && !existing.deletedAt) {
            throw ApiError.badRequest("User is already a member of this workspace.");
        }

        if (existing && existing.deletedAt) {
            return await prisma.userOnWorkspace.update({
                where: { userId_workspaceId: { userId, workspaceId } },
                data: { deletedAt: null, role },
            });
        }

        return await prisma.userOnWorkspace.create({
            data: { userId, workspaceId, role },
        });
    }

    async removeMember(workspaceId: string, targetUserId: string, userId: string) {
        const workspace = await prisma.workspace.findUnique({
            where: { id: workspaceId },
            select: { ownerId: true },
        });

        if (!workspace) throw ApiError.notFound("Workspace not found.");

        if (targetUserId === userId) {
            throw ApiError.badRequest("You cannot remove yourself from the workspace.");
        }

        if (workspace.ownerId === targetUserId) {
            throw ApiError.badRequest("You can't remove the workspace owner.");
        }

        const member = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId: targetUserId, workspaceId } },
        });

        if (!member || member.deletedAt) {
            throw ApiError.badRequest("User is not an active member of this workspace.");
        }

        return await prisma.userOnWorkspace.update({
            where: { userId_workspaceId: { userId: targetUserId, workspaceId } },
            data: { deletedAt: new Date() },
        });
    }

    async leaveMember(workspaceId: string, userId: string) {
        const workspace = await prisma.workspace.findUnique({
            where: { id: workspaceId },
            select: { ownerId: true },
        });

        if (!workspace) throw ApiError.notFound("Workspace not found.");
        if (workspace.ownerId === userId) {
            throw ApiError.badRequest("Workspace owner cannot leave. Transfer ownership first.");
        }

        const membership = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId, workspaceId } },
        });

        if (!membership || membership.deletedAt) {
            throw ApiError.badRequest("You are not an active member of this workspace.");
        }

        return await prisma.userOnWorkspace.update({
            where: { userId_workspaceId: { userId, workspaceId } },
            data: { deletedAt: new Date() },
        });
    }

    async changeMemberRole(workspaceId: string, targetUserId: string, role: WorkspaceRole) {
        //test
        if (!role || !Object.values(WorkspaceRole).includes(role)) {
            return ApiError.badRequest("Invalid or missing role");
        }
        const member = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId: targetUserId, workspaceId } },
        });

        if (!member || member.deletedAt) {
            throw ApiError.notFound("User not found or is not an active member.");
        }
        if (member.role === role) throw ApiError.badRequest("User already has this role");

        return await prisma.userOnWorkspace.update({
            where: { userId_workspaceId: { userId: targetUserId, workspaceId } },
            data: { role },
        });
    }

    async getAllMembers(workspaceId: string) {
        return await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                deletedAt: null,
            },
            include: {
                user: {
                    select: { id: true, name: true, email: true },
                },
            },
        });
    }

    async transferWorkspaceOwnership(workspaceId: string, newOwnerId: string) {
        const member = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId: newOwnerId, workspaceId } },
        });

        if (!member || member.deletedAt) {
            throw ApiError.badRequest("New owner must be an active member of the workspace.");
        }

        const updated = await prisma.workspace.update({
            where: { id: workspaceId },
            data: { ownerId: newOwnerId },
        });

        if (member.role !== WorkspaceRole.OWNER) {
            await prisma.userOnWorkspace.update({
                where: { userId_workspaceId: { userId: newOwnerId, workspaceId } },
                data: { role: WorkspaceRole.OWNER },
            });
        }

        return updated;
    }
}

export const workspaceMembersService = new WorkspaceMembersService()

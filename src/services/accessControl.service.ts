// services/accessControl.service.ts
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { WorkspaceRole } from '../generated/prisma';

class AccessControlService {
    private async getMembership(userId: string, workspaceId: string) {
        const workspace = await prisma.workspace.findUnique({
            where: {
                id: workspaceId,
                deletedAt: null,
            },
        });

        if (!workspace) {
            throw ApiError.notFound('Workspace not found');
        }

        const membership = await prisma.userOnWorkspace.findUnique({
            where: { userId_workspaceId: { userId, workspaceId } },
        });

        if (!membership) {
            throw ApiError.forbidden('You are not a member of this workspace');
        }

        return membership;
    }


    async checkRole(
        userId: string,
        workspaceId: string,
        allowedRoles: WorkspaceRole[] = [
            WorkspaceRole.ADMIN,
            WorkspaceRole.OWNER,
            WorkspaceRole.MEMBER,
        ],
    ) {
        const membership = await this.getMembership(userId, workspaceId);

        if (!allowedRoles.includes(membership.role)) {
            throw ApiError.forbidden(
                `Access denied: your role is '${membership.role}', required: [${allowedRoles.join(', ')}]`
            );
        }
    }

    async checkIsMember(userId: string, workspaceId: string) {
        return this.checkRole(userId, workspaceId, [
            WorkspaceRole.MEMBER,
            WorkspaceRole.ADMIN,
            WorkspaceRole.OWNER,
        ]);
    }

    async checkIsAdmin(userId: string, workspaceId: string) {
        return this.checkRole(userId, workspaceId, [
            WorkspaceRole.ADMIN,
            WorkspaceRole.OWNER,
        ]);
    }

    async checkIsOwner(userId: string, workspaceId: string) {
        return this.checkRole(userId, workspaceId, [WorkspaceRole.OWNER]);
    }
    async checkIsOwnerOrAdmin(userId: string, workspaceId: string) {
        return this.checkRole(userId, workspaceId, [WorkspaceRole.OWNER, WorkspaceRole.ADMIN])
    }
}

export const accessControlService = new AccessControlService();

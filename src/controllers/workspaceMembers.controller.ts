import { Request, Response, NextFunction } from 'express';
import { WorkspaceRole } from '../generated/prisma';
import { ApiResponse } from '../utils/apiResponse';
import { workspaceMembersService } from '../services/workspaceMembers';

export default class WorkspaceMembersController {

    static async removeMember(req: Request, res: Response, next: NextFunction) {
        const { workspaceId, memberId: targetUserId } = req.params;
        const userId = req.user!.id;

        const result = await workspaceMembersService.removeMember(workspaceId, targetUserId, userId);
        return new ApiResponse(res).success(result, 'Member removed from workspace');
    }

    static async leaveWorkspace(req: Request, res: Response, next: NextFunction) {
        const { workspaceId } = req.params;
        const userId = req.user!.id;

        const result = await workspaceMembersService.leaveMember(workspaceId, userId);
        return new ApiResponse(res).success(result, 'You left the workspace successfully');
    }

    static async changeMemberRole(req: Request, res: Response, next: NextFunction) {
        const { workspaceId, memberId: targetUserId } = req.params;
        const { newRole } = req.body as { newRole: WorkspaceRole };

        const updated = await workspaceMembersService.changeMemberRole(workspaceId, targetUserId, newRole);
        return new ApiResponse(res).success(updated, 'Member role updated successfully');
    }

    static async getAllMembers(req: Request, res: Response, next: NextFunction) {
        const { workspaceId } = req.params;

        const members = await workspaceMembersService.getAllMembers(workspaceId);
        return new ApiResponse(res).success(members, 'Workspace members fetched successfully');
    }

    static async transferWorkspaceOwnership(req: Request, res: Response, next: NextFunction) {
        const { workspaceId } = req.params;
        const { newOwnerId } = req.body as { newOwnerId: string };

        const updated = await workspaceMembersService.transferWorkspaceOwnership(workspaceId, newOwnerId);
        return new ApiResponse(res).success(updated, 'Workspace ownership transferred successfully');
    }
}

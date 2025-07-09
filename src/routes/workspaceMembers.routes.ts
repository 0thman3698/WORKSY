import express from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import WorkspaceMembersController from '../controllers/workspaceMembers.controller';
import { checkWorkspaceRole } from '../middlewares/authorization.middleware';
import { WorkspaceRole } from '../generated/prisma';

const router = express.Router({ mergeParams: true });

// Leave workspace
router.delete(
    '/',
    checkWorkspaceRole(WorkspaceRole.MEMBER),
    asyncHandler(WorkspaceMembersController.leaveWorkspace)
);

// Get all workspace members
router.get(
    '/',
    checkWorkspaceRole(WorkspaceRole.MEMBER),
    asyncHandler(WorkspaceMembersController.getAllMembers)
);

// Change member role
router.patch(
    '/:memberId/role',
    checkWorkspaceRole(WorkspaceRole.OWNER),
    asyncHandler(WorkspaceMembersController.changeMemberRole)
);

// Remove member from workspace
router.delete(
    '/:memberId',
    checkWorkspaceRole(WorkspaceRole.ADMIN),
    asyncHandler(WorkspaceMembersController.removeMember)
);

// Transfer workspace ownership
router.patch(
    '/transfer-ownership',
    checkWorkspaceRole(WorkspaceRole.OWNER),
    asyncHandler(WorkspaceMembersController.transferWorkspaceOwnership)
);

export default router;

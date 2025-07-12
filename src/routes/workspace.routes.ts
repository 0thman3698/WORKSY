import express from 'express';
import WorkspaceControllers from '../controllers/workspace.controllers';
import { validate } from '../middlewares/validation.middleware';
import { workspaceSchema } from '../validators/workspace.validators';
import { asyncHandler } from '../middlewares/asyncHandler';
import { checkWorkspaceRole } from '../middlewares/authorization.middleware';
import { WorkspaceRole } from '@prisma/client';
import channelRouter from './channel.routes';
import inviteRouter from './invite.routes';
import dmRouter from './dm.routes';
import conversationRouter from './conversation.routes';
import workspaceMembersRouter from './workspaceMembers.routes'


const router = express.Router();

router.post(
  '/',
  validate(workspaceSchema),
  asyncHandler(WorkspaceControllers.createWorkspace),
);

router.get(
  '/',
  asyncHandler(WorkspaceControllers.getMyWorkspaces)
);

router.patch(
  '/:workspaceId',
  checkWorkspaceRole(WorkspaceRole.ADMIN),
  asyncHandler(WorkspaceControllers.updateWorkspace),
);

router.delete(
  '/:workspaceId',
  checkWorkspaceRole(WorkspaceRole.OWNER),
  asyncHandler(WorkspaceControllers.deleteWorkspace),
);



router.use(
  '/:workspaceId/members',
  workspaceMembersRouter
)

router.use(
  '/:workspaceId/invites',
  inviteRouter
);

router.use(
  '/:workspaceId/channels',
  checkWorkspaceRole(WorkspaceRole.MEMBER),
  channelRouter
);

router.use(
  '/:workspaceId/dm',
  checkWorkspaceRole(WorkspaceRole.MEMBER),
  dmRouter
);

router.use('/:workspaceId/conversations',
  checkWorkspaceRole(WorkspaceRole.MEMBER),
  conversationRouter)


export default router;

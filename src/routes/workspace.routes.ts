import express from 'express';
import WorkspaceControllers from '../controllers/workspace.controllers';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { workspaceSchema } from '../validators/workspace.validators';
import { asyncHandler } from '../middlewares/asyncHandler';

import channelRouter from './channel.routes';
import inviteRouter from './invite.routes';
import dmRouter from './dm.routes';
import conversationRouter from './conversation.routes';

const router = express.Router();

router.post(
  '/',
  protect,
  validate(workspaceSchema),
  asyncHandler(WorkspaceControllers.createWorkspace),
);
router.get('/', protect, asyncHandler(WorkspaceControllers.getMyWorkspaces));
router.put(
  '/:workspaceId',
  protect,
  asyncHandler(WorkspaceControllers.updateWorkspace),
);
router.delete(
  '/:workspaceId',
  protect,
  asyncHandler(WorkspaceControllers.deleteWorkspace),
);

router.use('/:workspaceId/invites', inviteRouter);

router.use('/:workspaceId/channels', channelRouter);

router.use('/:workspaceId/dm', dmRouter)

router.use('/:workspaceId/conversations', conversationRouter)

export default router;

// src/routes/channel.routes.ts
import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import ChannelControllers from '../controllers/channel.controller';
import { createChannelSchema } from '../validators/channel.validators';

import { checkChannelRole, checkWorkspaceRole } from '../middlewares/authorization.middleware';
import { ChannelRole, WorkspaceRole } from '@prisma/client';

import channelMembersRouter from './channelMembers.routes';
import channelMessageRouter from './channelMessage.routes';
import meetingRoutes from "./meeting.routes"
import AIController from '../controllers/ai.controller';
import { summarizeChannelSchema } from '../validators/ai.validators';


const router = express.Router({ mergeParams: true });


router.post(
  '/',
  checkWorkspaceRole(WorkspaceRole.ADMIN),
  validate(createChannelSchema),
  asyncHandler(ChannelControllers.createChannel),
);

router.get(
  '/',
  asyncHandler(ChannelControllers.getAllChannels)
);

router.get(
  '/:channelId',
  asyncHandler(ChannelControllers.getChannel)
);

router.patch(
  '/:channelId',
  checkChannelRole(ChannelRole.ADMIN),
  asyncHandler(ChannelControllers.updateChannel)
);

router.delete(
  '/:channelId',
  checkWorkspaceRole(WorkspaceRole.OWNER),
  asyncHandler(ChannelControllers.deleteChannel)
);



// AI: summarize channel messages
router.post(
  '/:channelId/summary',
  checkChannelRole(ChannelRole.MEMBER),
  validate(summarizeChannelSchema),
  asyncHandler(AIController.summarizeChannelMessages)
);


router.use(
  '/:channelId/members',
  channelMembersRouter
);

router.use("/:channelId/meetings", checkChannelRole(ChannelRole.MEMBER), meetingRoutes);
router.use("/:channelId/messages", checkChannelRole(ChannelRole.MEMBER), channelMessageRouter);

export default router;

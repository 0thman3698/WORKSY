import express from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import ChannelMembersControllers from '../controllers/channelMembers.controller';
import { checkChannelRole } from '../middlewares/authorization.middleware';
import { ChannelRole } from '../generated/prisma';
const router = express.Router({ mergeParams: true });

router.post(
    '/',
    asyncHandler(ChannelMembersControllers.joinChannel),
);
router.delete('/', checkChannelRole(ChannelRole.MEMBER), asyncHandler(ChannelMembersControllers.leaveChannel))
router.get('/', checkChannelRole(ChannelRole.MEMBER), asyncHandler(ChannelMembersControllers.getALLChannelMembers))

export default router;
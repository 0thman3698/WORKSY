import express from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import ChannelMembersControllers from '../controllers/channelMembers.controller';
import { checkChannelRole } from '../middlewares/authorization.middleware';
import { ChannelRole } from '@prisma/client';

const router = express.Router({ mergeParams: true });

// Join channel
router.post(
    '/',
    asyncHandler(ChannelMembersControllers.joinChannel)
);

// Leave channel
router.delete(
    '/',
    checkChannelRole(ChannelRole.MEMBER),
    asyncHandler(ChannelMembersControllers.leaveChannel)
);

// Get all channel members
router.get(
    '/',
    checkChannelRole(ChannelRole.MEMBER),
    asyncHandler(ChannelMembersControllers.getALLChannelMembers)
);

// Change member role
router.patch(
    '/:memberId/role',
    checkChannelRole(ChannelRole.OWNER),
    asyncHandler(ChannelMembersControllers.changeMemberRole)
);

// Kick member
router.delete(
    '/:memberId',
    checkChannelRole(ChannelRole.ADMIN),
    asyncHandler(ChannelMembersControllers.kickMember)
);

// Transfer channel ownership
router.patch(
    '/transfer-ownership',
    checkChannelRole(ChannelRole.OWNER),
    asyncHandler(ChannelMembersControllers.transferChannelOwnership)
);

export default router;

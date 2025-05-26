import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import ChannelMembersControllers from '../controllers/channelMembers.controller';
const router = express.Router({ mergeParams: true });

router.post(
    '/',
    protect,
    asyncHandler(ChannelMembersControllers.joinChannel),
);
router.delete('/', protect, asyncHandler(ChannelMembersControllers.leaveChannel))
router.get('/', protect, asyncHandler(ChannelMembersControllers.getALLChannelMembers))

export default router;
import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import ChannelControllers from '../controllers/channel.controller';
import { createChannelSchema } from '../validators/channel.validators';
const router = express.Router({ mergeParams: true });

import channelMembersRouter from './channelMembers.routes'
import messageRouter from './message.routes'

router.post(
  '/',
  protect,
  validate(createChannelSchema),
  asyncHandler(ChannelControllers.createChannel),
);
router.get('/', protect, asyncHandler(ChannelControllers.getAllChannels));
router.get('/:channelId', protect, asyncHandler(ChannelControllers.getChannel));
router.patch('/:channelId', protect, asyncHandler(ChannelControllers.updateChannel));
router.delete('/:channelId', protect, asyncHandler(ChannelControllers.deleteChannel));


router.use('/:channelId/members', channelMembersRouter)
router.use('/:channelId/messages', messageRouter);


export default router;

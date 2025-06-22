import express from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
import DmControllers from '../controllers/messages.controller';
const router = express.Router({ mergeParams: true });

// router.post('/:otherUserId', protect, asyncHandler(DmControllers.createConversation))

export default router;

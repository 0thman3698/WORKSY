import express from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = express.Router({ mergeParams: true });

// router.post('/:otherUserId', asyncHandler(DmControllers.createConversation))

export default router;

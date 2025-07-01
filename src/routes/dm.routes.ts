import express from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
import DmControllers from '../controllers/dm.controller';
const router = express.Router({ mergeParams: true });

router.post('/:otherUserId', asyncHandler(DmControllers.createConversation))

export default router;

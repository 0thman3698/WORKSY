import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import { createMessageSchema } from '../validators/message.validators';
import MessageControllers from '../controllers/message.controller';
const router = express.Router({ mergeParams: true });

router.post('/', protect, validate(createMessageSchema), asyncHandler(MessageControllers.sendMessage))

export default router;

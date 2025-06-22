import express from 'express';
import conversationController from '../controllers/conversation.controllers';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import { createConversationSchema, createGroupConversationSchema } from '../validators/conversation.validtors';

const router = express.Router({ mergeParams: true });

router.post('/one-to-one', protect, validate(createConversationSchema), asyncHandler(conversationController.createConversation));

router.post('/group', protect, validate(createGroupConversationSchema), asyncHandler(conversationController.createGroupConversation));

router.get('/', protect, asyncHandler(conversationController.getMyConversations))

export default router;

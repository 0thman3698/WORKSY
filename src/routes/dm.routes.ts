import express from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = express.Router({ mergeParams: true });
import multer from 'multer';
import MessageControllers from '../controllers/message.controller';
import AIController from '../controllers/ai.controller';
import { validate } from '../middlewares/validation.middleware';
import { summarizeDMMessagesSchema } from '../validators/ai.validators';


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 25 * 1024 * 1024, // Limit file size to 25MB
    },
});
router.post('/:conversationId', protect, upload.array('files'),
    asyncHandler(MessageControllers.sendDMMessage))

// AI: summarize DM conversation
router.post('/:conversationId/summary', protect, validate(summarizeDMMessagesSchema), asyncHandler(AIController.summarizeDMMessages))

export default router;

import express from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = express.Router({ mergeParams: true });
import multer from 'multer';
import MessageControllers from '../controllers/message.controller';


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 25 * 1024 * 1024, // Limit file size to 25MB
    },
});
router.post('/', protect, upload.array('files'),
    asyncHandler(MessageControllers.sendChannelMessage))

export default router;

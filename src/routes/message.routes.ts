import { Router } from 'express';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';
import MessageControllers from '../controllers/message.controller';
import multer from 'multer'; 

const router = Router({ mergeParams: true });

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024, // Limit file size to 25MB
  },
});

router.post(
  '/',
  protect,
  upload.array('files'),
  asyncHandler(MessageControllers.sendMessage)
);

router.get(
  '/',
  asyncHandler(MessageControllers.getAllMessages)
);


export default router;

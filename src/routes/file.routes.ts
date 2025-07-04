import { Router } from 'express';
import multer from 'multer';
import FileControllers from '../controllers/file.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

router.post('/upload', upload.single('file'), asyncHandler(FileControllers.uploadFile));


router.get('/:fileId', asyncHandler(FileControllers.getFileMetadata));

router.get('/:fileId/download', asyncHandler(FileControllers.downloadFile));

router.delete('/:fileId', asyncHandler(FileControllers.deleteFile));

export default router;
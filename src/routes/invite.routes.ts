import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import { acceptInviteSchema, CreateInviteSchema } from '../validators/invite.validators';
import InviteControllers from '../controllers/invite.controller';
import { inviteService } from 'src/services/invite.service';
const router = express.Router();

router.post('/', protect, validate(CreateInviteSchema), asyncHandler(InviteControllers.createInvite))
router.post('/accept', protect, validate(acceptInviteSchema), asyncHandler(InviteControllers.acceptInvite))

export default router;
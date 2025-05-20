import express from 'express';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import { acceptInviteSchema, CreateInviteSchema } from '../validators/invite.validators';
import InviteControllers from '../controllers/invite.controller';
const router = express.Router({ mergeParams: true });

router.post(
  '/',
  protect,
  validate(CreateInviteSchema),
  asyncHandler(InviteControllers.createInvite),
);
router.patch('/accept/:token', protect, asyncHandler(InviteControllers.acceptInvite));

export default router;

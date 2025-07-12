import express from 'express';
import { validate } from '../middlewares/validation.middleware';
import { asyncHandler } from '../middlewares/asyncHandler';
import { CreateInviteSchema } from '../validators/invite.validators';
import InviteControllers from '../controllers/invite.controller';

import { checkWorkspaceRole } from '../middlewares/authorization.middleware';
import { WorkspaceRole } from '@prisma/client';

const router = express.Router({ mergeParams: true });

router.post(
  '/',
  checkWorkspaceRole(WorkspaceRole.ADMIN),
  validate(CreateInviteSchema),
  asyncHandler(InviteControllers.createInvite),
);


router.patch(
  '/accept/:token',
  asyncHandler(InviteControllers.acceptInvite)
);

export default router;

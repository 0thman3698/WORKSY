import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validate } from '../middlewares/validation.middleware';
import { updateUserSchema } from '../validators/user.validators';
import { checkGlobalRole } from '../middlewares/authorization.middleware';
import { Role } from '../generated/prisma';

const router = Router();

router.use(checkGlobalRole(Role.APP_ADMIN));


router.get('/users', asyncHandler(UserController.getAllUsers));
router.patch('/users/:id', validate(updateUserSchema), asyncHandler(UserController.updateUserById));
router.patch('/users/:id/role', checkGlobalRole(Role.APP_OWNER), asyncHandler(UserController.updateUserRole));
router.delete('/users/:id', asyncHandler(UserController.softDeleteUser));

export default router;

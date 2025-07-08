import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validate } from '../middlewares/validation.middleware';
import { updateMeSchema } from '../validators/user.validators';
import { updateUserSchema } from '../validators/user.validators';
import { checkGlobalRole } from '../middlewares/authorization.middleware';
import { Role } from '../generated/prisma';

const router = Router();

//User Routes

router.get('/me', asyncHandler(UserController.getCurrentUser));
router.patch('/me', validate(updateMeSchema), asyncHandler(UserController.updateMe));

//Admin Routes
router.use(checkGlobalRole(Role.APP_ADMIN));


router.get('/', asyncHandler(UserController.getAllUsers));
router.patch('/:id', validate(updateUserSchema), asyncHandler(UserController.updateUserById));
router.patch('/:id/role', checkGlobalRole(Role.APP_OWNER), asyncHandler(UserController.updateUserRole));
router.delete('/:id', asyncHandler(UserController.softDeleteUser));

export default router;


import express from 'express';
// import { registerSchema } from '@validators/auth.validators';
// import { validate } from '@middlewares/validation.middleware';
// import AuthController from '@controllers/auth.controller';
import { loginSchema, registerSchema } from '../validators/auth.validators';
import { validate } from '../middlewares/validation.middleware';
import AuthController from '../controllers/auth.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = express.Router();

router.post('/register',validate(registerSchema), asyncHandler(AuthController.register));
router.post('/login', validate(loginSchema) ,asyncHandler(AuthController.login));
// router.post('/forgotPassword', forgotPassword);
// router.patch('/resetPassword/:token', resetPassword);
// router.post('/refresh-token', refreshToken);
// router.post('/logout', logout);

export default router;


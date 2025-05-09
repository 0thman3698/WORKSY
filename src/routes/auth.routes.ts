
import express from 'express';
// import { registerSchema } from '@validators/auth.validators';
// import { validate } from '@middlewares/validation.middleware';
// import AuthController from '@controllers/auth.controller';
import { registerSchema } from '../validators/auth.validators';
import { validate } from '../middlewares/validation.middleware';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

router.post('/register',validate(registerSchema), AuthController.register);
// router.post('/login', login);
// router.post('/forgotPassword', forgotPassword);
// router.patch('/resetPassword/:token', resetPassword);
// router.post('/refresh-token', refreshToken);
// router.post('/logout', logout);

export default router;


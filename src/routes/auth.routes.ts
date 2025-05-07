import express from 'express';
import { register, login, refreshToken, logout, forgotPassword, resetPassword } from '../controllers/auth.controller';
import { protect } from '../middlewares/protect';
import { restrictTo } from '../middlewares/restrictTo';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);

export default router;

import express from "express";
import {
  changePasswordSchema,
  forgotPassSchema,
  loginSchema,
  logoutSchema,
  registerSchema,
  resetPasswordSchema,
  verifyLoginOtpSchema,
  resendLoginOtpSchema,
  linkAccountSchema,
  resendVerificationSchema,
  verifyPinSchema
} from "../validators/auth.validators";
import { validate } from "../middlewares/validation.middleware";
import AuthController from "../controllers/auth.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { authenticate } from "../middlewares/passportAuth";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Start of register

router.post(
  "/register",
  validate(registerSchema),
  asyncHandler(AuthController.register)
);

router.post('/verify-email/:token', asyncHandler(AuthController.verifyRegisterEmail));

router.post(
  "/resend-verification",
  validate(resendVerificationSchema),
  asyncHandler(AuthController.resendVerificationEmail)
);

// End of register

const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts'
});
router.post(
  "/login",
  loginRateLimiter,
  validate(loginSchema),
  asyncHandler(AuthController.login)
);

router.post(
  "/login/verify-otp",
  validate(verifyLoginOtpSchema),
  asyncHandler(AuthController.verifyLoginOtp)
);

// New OTP resend route
router.post(
  "/login/resend-otp",
  validate(resendLoginOtpSchema),
  asyncHandler(AuthController.resendLoginOtp)
);

router.post("/refresh-token", asyncHandler(AuthController.refreshToken));

router.post(
  "/logout",
  validate(logoutSchema),
  asyncHandler(AuthController.logout)
);

router.patch(
  "/change-password",
  validate(changePasswordSchema),
  asyncHandler(AuthController.changePassword)
);

// forgot-password routes

router.post(
  "/forgot-password/request-pin",
  validate(forgotPassSchema),
  asyncHandler(AuthController.forgotPassword)
);


const pinVerificationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many PIN verification attempts from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});
router.post(
  "/forgot-password/verify-pin",
  pinVerificationLimiter,
  validate(verifyPinSchema),
  asyncHandler(AuthController.verifyPin)
);


const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: 'Too many password reset attempts'
});

router.post(
  "/forgot-password/reset",
  passwordResetLimiter,
  validate(resetPasswordSchema),
  asyncHandler(AuthController.resetPassword)
);

router.post(
  "/forgot-password/resend-pin",
  validate(forgotPassSchema),
  asyncHandler(AuthController.resendResetPin)
);
// End of forgot-password

// Google OAuth routes
router.get("/google", AuthController.googleAuth);
router.get("/google/callback", asyncHandler(AuthController.googleCallback));

// Microsoft OAuth routes
router.get("/microsoft", AuthController.microsoftAuth);
router.get(
  "/microsoft/callback",
  asyncHandler(AuthController.microsoftCallback)
);


router.post(
  "/google/link",
  validate(linkAccountSchema),
  authenticate,
  asyncHandler(AuthController.linkAccount)
);

router.delete(
  "/google/unlink",
  authenticate,
  asyncHandler(AuthController.unlinkAccount)
);
export default router;

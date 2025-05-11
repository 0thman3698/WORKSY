import express from "express";
// import { registerSchema } from '@validators/auth.validators';
// import { validate } from '@middlewares/validation.middleware';
// import AuthController from '@controllers/auth.controller';
import {
  forgotPassSchema,
  loginSchema,
  logoutSchema,
  registerSchema,
  resetPasswordSchema,
} from "../validators/auth.validators";
import { validate } from "../middlewares/validation.middleware";
import AuthController from "../controllers/auth.controller";
import { asyncHandler } from "../middlewares/asyncHandler";

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  asyncHandler(AuthController.register)
);
router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(AuthController.login)
);
router.post(
  "/forgot-password",
  validate(forgotPassSchema),
  asyncHandler(AuthController.forgotPassword)
);
router.patch(
  "/reset-password/:token",
  validate(resetPasswordSchema),
  asyncHandler(AuthController.resetPassword)
);
router.post("/refresh-token", asyncHandler(AuthController.refreshToken));
router.post(
  "/logout",
  validate(logoutSchema),
  asyncHandler(AuthController.logout)
);

export default router;

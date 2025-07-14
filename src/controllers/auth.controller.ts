import { NextFunction, Request, Response } from "express";
import passport from "passport";
// pages
import { sendEmail } from "../utils/sendEmail";
import { createResetPasswordTemplate } from "../constants/emailTemplates";
import { ILogin, IRegister } from "../interfaces/auth.interface";
import { ApiResponse } from "../utils/apiResponse";
import { authService } from "../services/auth.service";
import { verifyToken } from "..//utils/jwt";
import { ApiError } from "../utils/apiError";
import { createLoginOtpTemplate } from "../constants/OTP_Template";

export default class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const user = await authService.registerUser(name, email, password);

      new ApiResponse(res).created(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          token: user.emailVerificationToken // for testing

        },
        "Registration successful. Please check your email to verify your account."
      );
    } catch (error) {
      next(error);
    }
  }

  static async verifyRegisterEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { token } = req.params;

      const user = await authService.verifyEmail(token);

      console.log("user", user);

      new ApiResponse(res).success({
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
        token: user.emailVerificationToken
      });
    } catch (error) {
      next(error);
    }
  }

  static async resendVerificationEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email } = req.body;
      const { message } = await authService.resendVerificationEmail(email);
      new ApiResponse(res).success(message); //user for testing
    } catch (error) {
      next(error);
    }
  }

  static async login(
    req: Request<{}, {}, ILogin, {}>,
    res: Response,
    next: NextFunction
  ) {
    const userData = req.body;
    try {
      const { message, sessionToken, otp } =
        await authService.initiateLogin(userData) as {
          message: string;
          sessionToken: string;
          otp: string;
        };

      // Send OTP email
      const html = createLoginOtpTemplate(otp!);
      await sendEmail({
        to: userData.email,
        subject: "Your Worksy Login OTP",
        html,
      });

      return new ApiResponse(res).success(
        { sessionToken, email: userData.email, otp },
        message
      );
    } catch (error: any) {
      if (error instanceof ApiError) {
        throw error;
      }
      console.error("Login process (initiate) error:", error);
      throw ApiError.internal("Failed to initiate login process.");
    }
  }

  static async verifyLoginOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, otp, sessionToken } = req.body;

      const authResponse = await authService.verifyLoginOtp(
        email,
        otp,
        sessionToken
      );

      res.cookie("refreshToken", authResponse.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/api/v1/auth/refresh-token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return new ApiResponse(res).success(
        {
          accessToken: authResponse.accessToken,
          user: authResponse.user,
        },
        "Login successful"
      );
    } catch (error: any) {
      if (error instanceof ApiError) {
        return next(error);
      }

      console.error("Verify login OTP error:", error);
      return next(ApiError.internal("Failed to verify OTP"));
    }
  }

  static async resendLoginOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, sessionToken } = req.body;

      const { message, otp } = await authService.resendLoginOtp(
        email,
        sessionToken
      );

      const html = createLoginOtpTemplate(otp!);
      await sendEmail({
        to: email,
        subject: "Your Worksy Login OTP - Resent",
        html,
      });

      return new ApiResponse(res).success(null, message);
    } catch (error: any) {
      if (error instanceof ApiError) {
        return next(error);
      }

      console.error("Resend login OTP error:", error);
      return next(ApiError.internal("Failed to resend login OTP"));
    }
  }

  static async refreshToken(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw ApiError.unauthorized("No refresh token");

    const decoded = verifyToken(refreshToken);
    if (!decoded?.userId) {
      throw ApiError.unauthorized("Invalid refresh token");
    }
    // Find user with matching refresh token
    const tokens = await authService.refreshToken(refreshToken, decoded);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/api/v1/auth/refresh-token",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return new ApiResponse(res).success(
      { newToken: tokens.accessToken },
      "Tokens refreshed successfully"
    );
  }

  static async logout(
    req: Request<{}, {}, { userId: string }, {}>,
    res: Response
  ) {
    const { userId } = req.body;
    const response = await authService.logout(userId);
    return new ApiResponse(res).success(
      response,
      "User logged out successfully"
    );
  }

  static async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, oldPassword, newPassword, confirmPassword } = req.body;
      await authService.changePassword(email, oldPassword, newPassword);

      return new ApiResponse(res).success(
        null,
        "Password changed successfully"
      );
    } catch (error: any) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(ApiError.internal("Failed to change password"));
    }
  }

  // Forgot password starts
  static async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const { pin: resetPin, token: resetToken } =
        await authService.forgotPassword(email);
      const html = createResetPasswordTemplate(resetPin);

      await sendEmail({
        to: email,
        subject: "Reset your Worksy password",
        html,
      });

      return new ApiResponse(res).success(
        { resetToken },
        `Reset PIN has been sent to ${email}.`
      );
    } catch (error: any) {
      if (error instanceof ApiError) {
        if (error.statusCode === 404) {
          return next(
            ApiError.notFound("If this email exists, a reset PIN has been sent")
          );
        }
        return next(error);
      }

      console.error("Request PIN error:", error);
      return next(ApiError.internal("Failed to send reset PIN"));
    }
  }

  static async verifyPin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, pin } = req.body;

      const { isValid, resetToken } = await authService.verifyResetPin(
        email,
        pin
      );

      console.log(isValid, resetToken);

      if (!isValid || !resetToken) {
        throw ApiError.badRequest("Invalid or expired PIN");
      }

      return new ApiResponse(res).success(
        { resetToken },
        "PIN verified successfully."
      );
    } catch (error: any) {
      if (error instanceof ApiError) {
        return next(error);
      }

      console.error("Verify PIN error:", error);
      return next(ApiError.internal("Failed to verify PIN"));
    }
  }

  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, resetToken, newPassword, confirmPassword } = req.body;

      const weakPasswords = ["password", "abc12345", "12345678"];
      if (weakPasswords.includes(newPassword.toLowerCase())) {
        throw ApiError.validation(
          "Password is too weak. Please choose a stronger password"
        );
      }

      await authService.resetPassword(email, newPassword, resetToken);

      await authService.clearResetPin(email);

      return new ApiResponse(res).success(null, "Password reset successfully");
    } catch (error: any) {
      if (
        error.message === "Invalid or expired token" ||
        error.statusCode === 401 ||
        error.statusCode === 400
      ) {
        return next(
          ApiError.unauthorized(
            "Invalid or expired reset token, or password reset failed."
          )
        );
      }

      if (error instanceof ApiError) {
        return next(error);
      }

      console.error("Reset password error:", error);
      return next(ApiError.internal("Failed to reset password"));
    }
  }

  static async resendResetPin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const { canResend, waitSeconds } =
        await authService.canResendResetPin(email);

      if (!canResend) {
        throw ApiError.tooManyRequests(
          waitSeconds
            ? `Please wait ${waitSeconds} seconds before requesting a new PIN`
            : "Too many PIN requests"
        );
      }

      const { pin, token } = await authService.forgotPassword(email);

      await sendEmail({
        to: email,
        subject: "Your Password Reset PIN",
        html: createResetPasswordTemplate(pin),
      });

      return new ApiResponse(res).success(
        null,
        "If the email exists, a reset PIN has been sent"
      );
    } catch (error) {
      next(
        error instanceof ApiError
          ? error
          : ApiError.internal("Failed to process request")
      );
    }
  }
  // Forgot password ends

  // Google OAuth routes
  static googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
  });
  // Microsoft OAuth routes
  static microsoftAuth = passport.authenticate("microsoft", {
    scope: ["user.read"],
  });

  // OAuth
  static async googleCallback(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("google", { session: false }, async (err, user) => {
      try {
        if (err) {
          console.error("Google OAuth error:", err);
          return res.redirect(
            `${process.env.CLIENT_URL}/login?error=oauth_error`
          );
        }

        if (!user) {
          return res.redirect(
            `${process.env.CLIENT_URL}/login?error=oauth_failed`
          );
        }

        // Generate tokens for the user
        const authResponse = await authService.handleOAuthSuccess(user);

        // Set refresh token cookie
        res.cookie("refreshToken", authResponse.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/api/v1/auth/refresh-token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Redirect to frontend with access token
        const redirectUrl = `${process.env.CLIENT_URL}/auth/callback.html?token=${authResponse.accessToken}`;
        return res.redirect(redirectUrl);
      } catch (error) {
        console.error("Google callback error:", error);
        return res.redirect(
          `${process.env.CLIENT_URL}/login?error=oauth_error`
        );
      }
    })(req, res, next);
  }

  static async microsoftCallback(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    passport.authenticate(
      "microsoft",
      { session: false },
      async (err: any, user: any) => {
        try {
          if (err) {
            console.error("Microsoft OAuth error:", err);
            return res.redirect(
              `${process.env.CLIENT_URL}/login?error=oauth_error`
            );
          }

          if (!user) {
            return res.redirect(
              `${process.env.CLIENT_URL}/login?error=oauth_failed`
            );
          }

          // Generate tokens for the user
          const authResponse = await authService.handleOAuthSuccess(user);

          // Set refresh token cookie
          res.cookie("refreshToken", authResponse.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/api/auth/refresh-token",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          });

          // Redirect to frontend with access token
          const redirectUrl = `${process.env.CLIENT_URL}/auth/callback?token=${authResponse.accessToken}`;
          return res.redirect(redirectUrl);
        } catch (error) {
          console.error("Microsoft callback error:", error);
          return res.redirect(
            `${process.env.CLIENT_URL}/login?error=oauth_error`
          );
        }
      }
    )(req, res, next);
  }

  static async linkAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { provider, oauthId, email } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        throw ApiError.unauthorized("User not authenticated");
      }

      await authService.linkOAuthAccount(userId, provider, oauthId, email);

      return new ApiResponse(res).success(
        null,
        `${provider} account linked successfully`
      );
    } catch (error) {
      return next(error);
    }
  }

  static async unlinkAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        throw ApiError.unauthorized("Authentication required");
      }

      await authService.unlinkOAuthAccount(userId);

      return new ApiResponse(res).success(
        null,
        "Google account unlinked successfully"
      );
    } catch (error) {
      console.error("Unlink account error:", error);
      next(
        error instanceof ApiError
          ? error
          : ApiError.internal("Unlinking failed")
      );
    }
  }
}

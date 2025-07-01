// 3rd party
import bcrypt from "bcryptjs";
import crypto from "crypto";

// pages
import { ApiError } from "./../utils/apiError";
import prisma from "../config/db";
import {
  generateAccessToken,
  generateRefreshToken,
  generateToken,
  verifyToken,
} from "../utils/jwt";
import {
  IAuthResponse,
  ILogin,
  IRegister,
  ITokens,
} from "../interfaces/auth.interface";
import { sendEmailVerificationEmail } from "../constants/sendEmailVerificationEmail";

const saltRounds = 10;

export class AuthService {
  private RESEND_COOLDOWN_SECONDS = 60;

  private async generateAuthTokens(user: {
    id: string;
    email: string;
    role: string;
  }): Promise<ITokens> {
    const accessToken = generateAccessToken(user.id, user.role);
    const refreshToken = generateRefreshToken(user.id, user.role);

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    return { accessToken, refreshToken };
  }

  private getOtpCooldown(sentAt: Date, waitTime: number): number {
    const elapsed = Date.now() - sentAt.getTime();
    const cooldownMs = waitTime * 1000;
    return Math.max(0, Math.ceil((cooldownMs - elapsed) / 1000));
  }

  private async clearLoginOtp(email: string): Promise<void> {
    try {
      await prisma.user.updateMany({
        where: { email },
        data: {
          loginOtp: null,
          loginOtpExpires: null,
          loginSessionToken: null,
          loginOtpSentAt: null,
        },
      });
    } catch (error) {
      console.error("Error clearing login OTP:", error);
    }
  }

  async registerUser(name: string, email: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(400, "Email already in use");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const emailVerificationToken = generateToken({ email }, "1d");
    const emailVerificationTokenExpires = new Date(
      Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    );

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        emailVerificationToken: emailVerificationToken,
        emailVerificationTokenExpires: emailVerificationTokenExpires,
      },
    });

    await sendEmailVerificationEmail(email, name, emailVerificationToken);

    return user;
  }

  async verifyEmail(token: string) {
    const decoded = verifyToken(token);

    if (!decoded || !decoded.email) {
      throw new ApiError(400, "Invalid or expired verification token");
    }

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Check if token matches and isn't expired
    if (
      user.emailVerificationToken !== token ||
      (user.emailVerificationTokenExpires &&
        new Date() > user.emailVerificationTokenExpires)
    ) {
      console.log("saddddddddddddddddddddddddddddddddd");

      throw new ApiError(400, "Invalid or expired verification token");
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        emailVerificationToken: null,
        emailVerificationTokenExpires: null,
      },
    });

    return updatedUser;
  }

  async resendVerificationEmail(email: string): Promise<{ message: string }> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    if (user.isVerified) {
      throw new ApiError(400, "Email is already verified");
    }

    // Check resend cooldown
    if (user.emailVerificationTokenSentAt) {
      const cooldownMs = 60 * 1000; // 1 minute cooldown
      const timeSinceLastSent =
        Date.now() - user.emailVerificationTokenSentAt.getTime();

      if (timeSinceLastSent < cooldownMs) {
        const remainingSeconds = Math.ceil(
          (cooldownMs - timeSinceLastSent) / 1000
        );
        throw new ApiError(
          429,
          `Please wait ${remainingSeconds} seconds before requesting a new verification email`
        );
      }
    }

    // 4. Generate new token
    const emailVerificationToken = generateToken({ email }, "1d");
    const emailVerificationTokenExpires = new Date(
      Date.now() + 24 * 60 * 60 * 1000
    );

    // 5. Update user record
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerificationToken,
        emailVerificationTokenExpires,
        emailVerificationTokenSentAt: new Date(),
      },
    });

    // 6. Send email
    await sendEmailVerificationEmail(
      user.email,
      user.name,
      emailVerificationToken
    );

    return { user, message: "Verification email resent successfully" }; // user for testin
  }

  async initiateLogin(
    loginData: ILogin
  ): Promise<{ message: string; sessionToken: string }> {
    const user = await prisma.user.findUnique({
      where: { email: loginData.email },
    });

    if (!user) {
      throw ApiError.unauthorized("Incorrect email or password");
    }

    if (!user.isVerified) {
      throw ApiError.forbidden("Please verify your email first");
    }

    if (user.loginOtpSentAt) {
      const cooldownRemaining = this.getOtpCooldown(user.loginOtpSentAt, 30);
      if (cooldownRemaining > 0) {
        throw ApiError.tooManyRequests(`Wait ${cooldownRemaining}s before new OTP`);
      }
    }

    const isPasswordMatch = await bcrypt.compare(
      loginData.password,
      user.password!
    );

    if (!isPasswordMatch) {
      throw ApiError.unauthorized("Incorrect email or password");
    }

    if (user.deletedAt) {
      throw ApiError.badRequest("Account has been deactivated");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const sessionToken = crypto.randomBytes(32).toString("hex");
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    const otpSentAt = new Date();

    const hashedOtp = await bcrypt.hash(otp, saltRounds);

    try {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          loginOtp: hashedOtp,
          loginOtpExpires: otpExpires,
          loginSessionToken: sessionToken,
          loginOtpSentAt: otpSentAt,
        },
      });

      return {
        message: "OTP sent to your email",
        sessionToken,
        otp
      };
    } catch (error) {
      console.error("Error storing login OTP:", error);
      throw ApiError.internal("Failed to send OTP");
    }
  }

  async verifyLoginOtp(
    email: string,
    otp: string,
    sessionToken: string
  ): Promise<IAuthResponse> {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email,
          loginOtp: { not: null },
          loginOtpExpires: { gt: new Date() },
          loginSessionToken: sessionToken,
          deletedAt: null,
          isVerified: true,
        },
      });

      if (!user || !user.loginOtp) {
        if (user) {
          await this.clearLoginOtp(email);
        }
        throw ApiError.unauthorized("Invalid or expired OTP");
      }

      const isValidOtp = await bcrypt.compare(otp, user.loginOtp);

      if (!isValidOtp) {
        await this.clearLoginOtp(email);
        throw ApiError.unauthorized("Invalid OTP");
      }

      await this.clearLoginOtp(email);

      const tokens = await this.generateAuthTokens(user);

      return {
        ...tokens,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar || undefined,
        },
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      console.error("Error verifying login OTP:", error);
      throw ApiError.internal("Failed to verify OTP");
    }
  }

  async resendLoginOtp(
    email: string,
    sessionToken: string
  ): Promise<{ message: string; otp?: string }> {
    const user = await prisma.user.findFirst({
      where: {
        email,
        loginSessionToken: sessionToken,
        deletedAt: null,
      },
    });

    if (!user) {
      throw ApiError.unauthorized("Invalid session");
    }

    if (user.loginOtpSentAt) {
      const cooldownRemaining = this.getOtpCooldown(user.loginOtpSentAt, this.RESEND_COOLDOWN_SECONDS);
      if (cooldownRemaining > 0) {
        throw ApiError.tooManyRequests(`Wait ${cooldownRemaining}s before resending`);
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    const otpSentAt = new Date();

    const hashedOtp = await bcrypt.hash(otp, saltRounds);

    try {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          loginOtp: hashedOtp,
          loginOtpExpires: otpExpires,
          loginOtpSentAt: otpSentAt,
        },
      });

      return {
        message: "New OTP sent to your email",
        otp, // for testing
      };
    } catch (error) {
      console.error("Error resending login OTP:", error);
      throw ApiError.internal("Failed to resend OTP");
    }
  }

  async refreshToken(refreshToken: string, decoded: any): Promise<ITokens> {
    if (!decoded || !decoded.userId) {
      throw ApiError.unauthorized("Invalid refresh token payload");
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || user.refreshToken !== refreshToken) {
      throw ApiError.unauthorized("Invalid refresh token");
    }
    const tokens = await this.generateAuthTokens(user);
    return tokens;
  }

  async logout(userId: string): Promise<void> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw ApiError.notFound("User is not found");
    }
    await prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async changePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    if (user.deletedAt) {
      throw ApiError.badRequest("Account has been deactivated");
    }

    const isOldPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.password
    );
    if (!isOldPasswordCorrect) {
      throw ApiError.unauthorized("Old password is not correct");
    }

    const isNewPasswordSameAsOld = await bcrypt.compare(
      newPassword,
      user.password
    );
    if (isNewPasswordSameAsOld) {
      throw ApiError.badRequest(
        "New password cannot be the same as the old password."
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    try {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw ApiError.internal("Failed to change password");
    }
  }

  async forgotPassword(email: string): Promise<{ pin: string; token: string }> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    if (user.deletedAt) {
      throw ApiError.badRequest("Account has been deactivated");
    }

    if (user.resetPasswordPinSentAt) {
      const lastSentTime = user.resetPasswordPinSentAt.getTime();
      const cooldownPeriod = 2 * 60 * 1000;
      const currentTime = Date.now();

      if (currentTime - lastSentTime < cooldownPeriod) {
        const remainingSeconds = Math.ceil(
          (cooldownPeriod - (currentTime - lastSentTime)) / 1000
        );
        throw ApiError.tooManyRequests(
          `Please wait ${remainingSeconds} seconds before requesting a new PIN`
        );
      }
    }

    const resetPin = Math.floor(100000 + Math.random() * 900000).toString();
    const resetToken = crypto.randomBytes(32).toString("hex");

    const pinExpires = new Date(Date.now() + 15 * 60 * 1000);
    const pinSentAt = new Date();

    const hashedPin = await bcrypt.hash(resetPin, saltRounds);

    try {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetPasswordPin: hashedPin,
          resetPasswordPinExpires: pinExpires,
          resetPasswordToken: resetToken,
          resetPasswordPinSentAt: pinSentAt,
        },
      });

      return { pin: resetPin, token: resetToken };
    } catch (error) {
      console.error("Error storing reset PIN/Token:", error);
      throw ApiError.internal("Failed to generate reset PIN");
    }
  }

  async verifyResetPin(
    email: string,
    pin: string
  ): Promise<{
    isValid: boolean;
    resetToken?: string;
    cooldownRemaining?: number;
  }> {
    const user = await prisma.user.findFirst({
      where: { email, deletedAt: null },
      select: {
        id: true,
        resetPasswordPin: true,
        resetPasswordToken: true,
        resetPasswordPinExpires: true,
        resetPasswordPinSentAt: true,
        failedPinAttempts: true,
      },
    });

    if (!user || !user.resetPasswordPin) {
      return { isValid: false };
    }

    if (
      user.resetPasswordPinExpires &&
      new Date() > user.resetPasswordPinExpires
    ) {
      await this.clearResetPin(email);
      return { isValid: false };
    }

    const isValid = await bcrypt.compare(pin, user.resetPasswordPin);

    if (!isValid) {
      await prisma.user.update({
        where: { email },
        data: {
          failedPinAttempts: (user.failedPinAttempts || 0) + 1,
          resetPasswordPinSentAt: new Date(),
        },
      });

      if ((user.failedPinAttempts || 0) >= 4) {
        await this.clearResetPin(email);
        throw ApiError.tooManyRequests(
          "Too many failed attempts. Please request a new PIN."
        );
      }

      return { isValid: false };
    }

    await prisma.user.update({
      where: { email },
      data: {
        failedPinAttempts: 0,
        resetPasswordPin: null,
        resetPasswordPinExpires: null,
      },
    });

    return {
      isValid: true,
      resetToken: user.resetPasswordToken!,
    };
  }

  async resetPassword(
    email: string,
    newPassword: string,
    resetToken: string
  ): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
        resetPasswordToken: true,
        resetPasswordPinExpires: true,
        deletedAt: true,
      },
    });

    if (!user) throw ApiError.notFound("Invalid request");
    if (user.deletedAt) throw ApiError.badRequest("Account deactivated");
    if (!user.resetPasswordToken || user.resetPasswordToken !== resetToken) {
      await this.clearResetPin(email);
      throw ApiError.unauthorized("Invalid token");
    }
    if (
      user.resetPasswordPinExpires &&
      new Date() > user.resetPasswordPinExpires
    ) {
      await this.clearResetPin(email);
      throw ApiError.unauthorized("Expired token");
    }


    if (await bcrypt.compare(newPassword, user.password)) {
      throw ApiError.badRequest("New password must differ from current");
    }


    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: await bcrypt.hash(newPassword, 12),
        resetPasswordToken: null,
        resetPasswordPinExpires: null,
        refreshToken: null,
        updatedAt: new Date(),
      },
    });
  }

  async clearResetPin(email: string): Promise<void> {
    try {
      await prisma.user.update({
        where: { email },
        data: {
          resetPasswordPin: null,
          resetPasswordPinExpires: null,
          resetPasswordToken: null,
          resetPasswordPinSentAt: null, // Clear the sent timestamp
        },
      });
    } catch (error) {
      console.error("Error clearing reset PIN/Token:", error);
    }
  }

  async canResendResetPin(
    email: string
  ): Promise<{ canResend: boolean; waitSeconds?: number }> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        resetPasswordPinSentAt: true,
        resetPasswordPinExpires: true,
      },
    });

    if (!user?.resetPasswordPinSentAt) return { canResend: true };

    const now = new Date();
    const cooldownMs = this.RESEND_COOLDOWN_SECONDS * 1000;
    const timeSinceLastSent =
      now.getTime() - user.resetPasswordPinSentAt.getTime();

    return {
      canResend: timeSinceLastSent >= cooldownMs,
      waitSeconds:
        timeSinceLastSent < cooldownMs
          ? Math.ceil((cooldownMs - timeSinceLastSent) / 1000)
          : undefined,
    };
  }

  // OAuth
  async handleOAuthSuccess(user: any): Promise<IAuthResponse> {
    // Generate tokens for OAuth user
    const tokens = await this.generateAuthTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar || undefined,
      },
    };
  }

  async linkOAuthAccount(
    userId: string,
    provider: string,
    oauthId: string,
    email: string
  ): Promise<void> {
    const allowedProviders = ["google", "microsoft"];
    if (!allowedProviders.includes(provider.toLowerCase())) {
      throw ApiError.badRequest("Unsupported OAuth provider");
    }

    const normalizeEmail = (email: string) => email.trim().toLowerCase();
    const normalizedEmail = email.trim().toLowerCase();

    const [existingOAuthUser, currentUser] = await Promise.all([
      prisma.user.findFirst({
        where: {
          oauthProvider: provider,
          oauthId: oauthId,
          id: { not: userId },
        },
      }),
      prisma.user.findUnique({
        where: { id: userId },
      }),
    ]);

    if (existingOAuthUser) {
      throw ApiError.badRequest(
        `This ${provider} account is already linked to another user`
      );
    }

    if (!currentUser) {
      throw ApiError.notFound("User not found");
    }

    if (normalizeEmail(currentUser.email) !== normalizedEmail) {
      throw ApiError.badRequest(
        "OAuth account email does not match your registered email"
      );
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        oauthProvider: provider,
        oauthId: oauthId,
        emailVerified: true,
        updatedAt: new Date(),
      },
    });
  }

  async unlinkOAuthAccount(userId: string): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        password: true,
        oauthProvider: true,
        email: true,
      },
    });

    if (!user) {
      throw ApiError.notFound("User account not found");
    }

    if (!user.oauthProvider) {
      throw ApiError.badRequest("No linked OAuth account found");
    }

    if (!user.password) {
      throw ApiError.badRequest("Set a password before unlinking");
    }

    if (!user.emailVerified) {
      throw ApiError.forbidden("Verify your email before unlinking");
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        oauthProvider: null,
        oauthId: null,
        updatedAt: new Date(),
      },
    });
  }
}

export const authService = new AuthService();

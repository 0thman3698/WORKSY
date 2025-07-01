import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
});

export const resendVerificationSchema = z.object({
  email: z.string().nonempty().email("Invalid email format"),
});

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const verifyPinSchema = z.object({
  email: z.string().email("Invalid email format"),
  pin: z.string()
    .length(6, "PIN must be 6 digits")
    .regex(/^\d+$/, "PIN must contain only numbers")
});

export const verifyLoginOtpSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  otp: z
    .string()
    .trim()
    .regex(/^\d{6}$/, { message: "OTP must be exactly 6 digits" }),
  sessionToken: z
    .string()
    .trim()
    .nonempty({ message: "Session token is required" }),
});

export const resendLoginOtpSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  sessionToken: z
    .string()
    .trim()
    .nonempty({ message: "Session token is required" }),
});

export const logoutSchema = z.object({
  userId: z.string().trim().nonempty({ message: "userId is required" }),
});

export const forgotPassSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
});

export const resetPasswordSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  resetToken: z
    .string()
    .trim()
    .nonempty({ message: "Reset token is required" }),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const changePasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Email is required and must be valid" }), // Added email field, assuming it's passed in body
  oldPassword: z
    .string()
    .trim()
    .nonempty({ message: "Old password is required" }),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ), // Added stricter password requirements
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const linkAccountSchema = z.object({
  provider: z.string().trim().nonempty(),
  oauthId: z.string().trim().nonempty(),
  email: z.string().trim().email({ message: "Invalid email address" }),
});

// --- Export Types ---
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type ResendVerificationShemaType = z.infer<typeof resendVerificationSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type LogoutSchemaType = z.infer<typeof logoutSchema>;
export type ForgotPassSchemaType = z.infer<typeof forgotPassSchema>;
export type VerifyPinSchemaType = z.infer<typeof verifyPinSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
export type changePasswordSchemaType = z.infer<typeof changePasswordSchema>;
export type VerifyLoginOtpSchemaType = z.infer<typeof verifyLoginOtpSchema>;
export type ResendLoginOtpSchemaType = z.infer<typeof resendLoginOtpSchema>;
export type LinkAccountSchemaType = z.infer<typeof linkAccountSchema>;


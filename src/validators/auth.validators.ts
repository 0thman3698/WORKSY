import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters" }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
});

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const logoutSchema = z.object({
  userId: z.string().trim().nonempty({ message: "userId is required" }),
});

export const forgotPassSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
});


export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type LogoutSchemaType = z.infer<typeof logoutSchema>;
export type resetPassSchemaType = z.infer<typeof resetPasswordSchema>;
export type forgotPassSchemaType = z.infer<typeof forgotPassSchema>;


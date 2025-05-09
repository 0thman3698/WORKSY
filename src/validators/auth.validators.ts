import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z.string().trim().min(6, { message: 'Password must be at least 6 characters' }),
  name: z.string().trim().min(3, { message: 'Name must be at least 3 characters' }),
});

export const loginSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z.string().trim().min(6, { message: 'Password must be at least 6 characters' }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;


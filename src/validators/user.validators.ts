import { z } from 'zod';

// 🧍 Update Me - Public User update 
export const updateMeSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    avatar: z.string().url({ message: 'Invalid avatar URL' }).optional(),
}).strict().refine((data) => data.name || data.avatar, {
    message: 'You must provide at least name or avatar to update.',
    path: ['name'],
});

// 🔐 Admin - Update full user info 
export const updateUserSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    isVerified: z.boolean().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
})

export type updateMeSchemaType = z.infer<typeof updateMeSchema>;
export type updateUserSchemaType = z.infer<typeof updateUserSchema>;

import { z } from 'zod';

export const createMessageSchema = z.object({
    content: z
        .string({ required_error: 'Content is required' })
        .trim()
        .min(1, 'Message cannot be empty')
        .max(1000, 'Message is too long'),
});

export type createMessageSchemaType = z.infer<typeof createMessageSchema>
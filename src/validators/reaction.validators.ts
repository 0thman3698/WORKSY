import { z } from 'zod';

export const reactionSchema = z.object({
    messageId: z.string().uuid({ message: "Invalid message ID" }),
    emoji: z
        .string()
        .trim()
        .min(1, { message: "Emoji is required" })
        .max(10, { message: "Emoji too long" }),
});

export type ReactionSchemaType = z.infer<typeof reactionSchema>;

import { z } from 'zod';

export const createConversationSchema = z.object({
    otherUserId: z.string().uuid({ message: "Invalid user ID" }),
});

export const createGroupConversationSchema = z.object({
    otherUserIds: z.array(z.string().uuid({ message: "Invalid user ID" })).min(2, "At least 2 members required"),
});



export type CreateConversationType = z.infer<typeof createConversationSchema>;
export type CreateGroupConversationType = z.infer<typeof createGroupConversationSchema>;

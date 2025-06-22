import { z } from 'zod';

export const sendChannelMessageSchema = z.object({
    channelId: z.string().uuid({ message: "Invalid channel ID." }),
    content: z.string().trim().min(1, "Message content can't be empty.").max(2000, "Message too long."),
});

export const editChannelMessageSchema = z.object({
    messageId: z.string().uuid({ message: "Invalid message ID." }),
    newContent: z.string().trim().min(1, "New content can't be empty.").max(2000, "Message too long."),
});

export type sendChannelMessageSchemaType = z.infer<typeof sendChannelMessageSchema>;
export type editChannelMessageSchemaType = z.infer<typeof editChannelMessageSchema>;

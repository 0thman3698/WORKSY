import { z } from 'zod';

export const sendDMMessageSchema = z.object({
    conversationId: z.string().uuid({ message: "Invalid conversation ID." }),
    content: z.string().trim().min(1, "Message content can't be empty.").max(2000, "Message too long."),
});

export const editDMMessageSchema = z.object({
    messageId: z.string().uuid({ message: "Invalid message ID." }),
    newContent: z.string().trim().min(1, "New content can't be empty.").max(2000, "Message too long."),
});

export type sendDMMessageSchemaType = z.infer<typeof sendDMMessageSchema>;
export type editDMMessageSchemaType = z.infer<typeof editDMMessageSchema>;

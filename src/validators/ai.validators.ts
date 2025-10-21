import { z } from "zod";

export const summarizeChannelSchema = z.object({
    channelId: z
        .string({
            required_error: "channelId is required",
            invalid_type_error: "channelId must be a string",
        })
        .uuid("Invalid channelId format"),
});

export const summarizeDMMessagesSchema = z.object({
    conversationId: z
        .string({
            required_error: "conversationId is required",
            invalid_type_error: "conversationId must be a string",
        })
        .uuid("Invalid conversationId format"),
});

export type summarizeChannelSchemaType = z.infer<typeof summarizeChannelSchema>;
export type summarizeDMMessagesSchemaType = z.infer<typeof summarizeDMMessagesSchema>;

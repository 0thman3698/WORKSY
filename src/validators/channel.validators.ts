import { z } from 'zod';

export const createChannelSchema = z.object({
    name: z.string().min(1, 'Channel name is required'),
    description: z.string().optional(),
    isPublic: z.boolean().optional(),
});


export const updateChannelSchema = z.object({
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    isPublic: z.boolean().optional(),
});

export type updateChannelSchemaType = z.infer<typeof updateChannelSchema>;

export type createChannelSchemaType = z.infer<typeof createChannelSchema>;

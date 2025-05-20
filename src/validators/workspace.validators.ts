import { z } from 'zod';

export const workspaceSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Workspace name must be at least 3 characters' })
    .max(50, { message: 'Workspace name must not exceed 50 characters' })
    .nonempty({ message: 'Workspace name cannot be empty' }),
});

export type workspaceSchemaType = z.infer<typeof workspaceSchema>;

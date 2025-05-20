import { z } from 'zod';

export const CreateInviteSchema = z.object({
  email: z.string().email('Invalid email address'),
  // workspaceId: z.string().uuid("Invalid workspace ID"),
  role: z.enum(['MEMBER', 'ADMIN']).optional(),
});

export const acceptInviteSchema = z.object({
  token: z.string().uuid('Invalid token format'),
});

export type CreateInviteSchemaType = z.infer<typeof CreateInviteSchema>;
export type acceptInviteSchemaType = z.infer<typeof acceptInviteSchema>;

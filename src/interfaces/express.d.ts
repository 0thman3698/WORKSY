// src/interfaces/express.d.ts
import { Role } from '@prisma/client';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string | null;
}

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      role: Role;
    }

    interface Request {
      user?: User;
      workspaceId?: string;
      channelId?: string;
    }
  }
}

export { };

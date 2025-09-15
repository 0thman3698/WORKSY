import { Request, Response, NextFunction } from 'express';
import { Role, WorkspaceRole, ChannelRole } from '@prisma/client';
import prisma from '../config/db';


class UnauthorizedError extends Error {
  statusCode: number;
  constructor(message: string = 'Unauthorized', statusCode: number = 403) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = statusCode;
  }
}


export const checkGlobalRole = (requiredRole: Role) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.id) {
      return next(new UnauthorizedError('Authentication required.'));
    }

    const roleHierarchy: Record<Role, number> = {
      [Role.APP_OWNER]: 4,
      [Role.APP_ADMIN]: 3,
      [Role.MEMBER]: 2,
      [Role.GUEST]: 1,
    };

    const currentUserRole = req.user.role;
    const currentUserRoleLevel = roleHierarchy[currentUserRole];
    const requiredRoleLevel = roleHierarchy[requiredRole];

    if (currentUserRoleLevel >= requiredRoleLevel) {
      next();
    } else {
      next(new UnauthorizedError('Insufficient global privileges.'));
    }
  };
};


export const checkWorkspaceRole = (requiredRole: WorkspaceRole) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.id) {
      return next(new UnauthorizedError('Authentication required.'));
    }

    const userId = req.user.id;
    const workspaceId = req.params.workspaceId || req.body.workspaceId || req.workspaceId;

    if (!workspaceId) {
      return next(new UnauthorizedError('Workspace ID is required for this operation.'));
    }

    try {
      const workspaceRoleHierarchy: Record<WorkspaceRole, number> = {
        [WorkspaceRole.OWNER]: 3,
        [WorkspaceRole.ADMIN]: 2,
        [WorkspaceRole.MEMBER]: 1,
      };

      const userOnWorkspace = await prisma.userOnWorkspace.findUnique({
        where: {
          userId_workspaceId: {
            userId: userId,
            workspaceId: workspaceId,
          },
          deletedAt: null,
        },
        select: {
          role: true,
          workspace: {
            select: {
              ownerId: true,
            },
          },
        },
      });


      if (req.user.role === Role.APP_OWNER) {
        return next();
      }

      if (!userOnWorkspace) {
        return next(new UnauthorizedError('You are not an active member of this workspace.'));
      }

      const currentUserWorkspaceRole = userOnWorkspace.role;
      const currentUserWorkspaceRoleLevel = workspaceRoleHierarchy[currentUserWorkspaceRole];
      const requiredRoleLevel = workspaceRoleHierarchy[requiredRole];

      const isWorkspaceOwner = userOnWorkspace.workspace?.ownerId === userId;

      if (requiredRole === WorkspaceRole.OWNER) {
        if (isWorkspaceOwner) {
          return next();
        } else {
          return next(new UnauthorizedError('Only the workspace owner can perform this action.'));
        }
      }

      if (currentUserWorkspaceRoleLevel >= requiredRoleLevel || isWorkspaceOwner) {
        next();
      } else {
        next(new UnauthorizedError('Insufficient workspace privileges.'));
      }
    } catch (error) {
      console.error('Error checking workspace role:', error);
      next(new UnauthorizedError('Error checking workspace privileges.'));
    }
  };
};

export const checkChannelRole = (requiredRole: ChannelRole) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.id) {
      return next(new UnauthorizedError('Authentication required.'));
    }

    const userId = req.user.id;
    const channelId = req.params.channelId || req.body.channelId || req.channelId;
    const workspaceId = req.params.workspaceId || req.body.workspaceId || req.workspaceId;

    if (!channelId || !workspaceId) {
      return next(new UnauthorizedError('Channel ID and Workspace ID are required for this operation.'));
    }

    try {
      const channelRoleHierarchy: Record<ChannelRole, number> = {
        [ChannelRole.OWNER]: 3,
        [ChannelRole.ADMIN]: 2,
        [ChannelRole.MEMBER]: 1,
      };
      const workspaceRoleHierarchy: Record<WorkspaceRole, number> = {
        [WorkspaceRole.OWNER]: 3,
        [WorkspaceRole.ADMIN]: 2,
        [WorkspaceRole.MEMBER]: 1,
      };

      const channelDetails = await prisma.channel.findUnique({
        where: { id: channelId, deletedAt: null },
        select: {
          ownerId: true,
          workspace: {
            select: { ownerId: true }
          }
        }
      });

      if (!channelDetails) {
        return next(new UnauthorizedError('Channel not found or is deleted.'));
      }

      const isChannelOwner = channelDetails.ownerId === userId;
      const isWorkspaceOwner = channelDetails.workspace?.ownerId === userId;

      let currentUserWorkspaceRole: WorkspaceRole | undefined;
      const userOnWorkspace = await prisma.userOnWorkspace.findUnique({
        where: {
          userId_workspaceId: { userId, workspaceId },
          deletedAt: null,
        },
        select: { role: true }
      });
      if (userOnWorkspace) {
        currentUserWorkspaceRole = userOnWorkspace.role;
      }
      const currentUserWorkspaceRoleLevel = currentUserWorkspaceRole ? workspaceRoleHierarchy[currentUserWorkspaceRole] : 0; // 0 if not a member

      if (req.user.role === Role.APP_OWNER || req.user.role === Role.APP_ADMIN) {
        return next();
      }

      if (isWorkspaceOwner) {
        return next();
      }

      if (
        currentUserWorkspaceRole === WorkspaceRole.ADMIN &&
        (requiredRole === ChannelRole.ADMIN || requiredRole === ChannelRole.MEMBER)
      ) {
        return next();
      }

      const userOnChannel = await prisma.userOnChannel.findUnique({
        where: {
          userId_channelId: {
            userId: userId,
            channelId: channelId,
          },
          deletedAt: null,
        },
        select: {
          role: true,
        },
      });

      if (!userOnChannel) {
        return next(new UnauthorizedError('You are not an active member of this channel and lack sufficient privileges.'));
      }

      const currentUserChannelRole = userOnChannel.role;
      const currentUserChannelRoleLevel = channelRoleHierarchy[currentUserChannelRole];
      const requiredRoleLevel = channelRoleHierarchy[requiredRole];

      if (currentUserChannelRoleLevel >= requiredRoleLevel || isChannelOwner) {
        next();
      } else {
        next(new UnauthorizedError('Insufficient channel privileges.'));
      }
    } catch (error) {
      console.error('Error checking channel role:', error);
      next(new UnauthorizedError('Error checking channel privileges.'));
    }
  };
};


export const authorizationErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof UnauthorizedError) {
    return void res.status(err.statusCode).json({ message: err.message });
  }
  next(err);
};

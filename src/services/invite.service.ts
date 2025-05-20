import { ApiError } from './../utils/apiError';
import prisma from '../config/db';
import { acceptInviteSchemaType, CreateInviteSchemaType } from '../validators/invite.validators';
import { IUser } from '../interfaces/express';
import { v4 as uuidv4 } from 'uuid';

export async function createInvite(
  inviteData: CreateInviteSchemaType,
  workspaceId: string,
  user: IUser,
) {
  const workspace = await prisma.workspace.findUnique({
    where: {
      id: workspaceId,
    },
  });
  if (!workspace) {
    throw ApiError.notFound('Workspace not found');
  }

  const userOnWorkspace = await prisma.userOnWorkspace.findUnique({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId,
      },
    },
  });
  const userRole = userOnWorkspace?.role || (user.id === workspace.ownerId ? 'OWNER' : null);

  if (!userRole || (userRole !== 'OWNER' && userRole !== 'ADMIN')) {
    throw ApiError.forbidden('You are not authorized to invite users to this workspace');
  }

  const existingInvite = await prisma.invite.findFirst({
    where: {
      workspaceId,
      email: inviteData.email,
      status: 'PENDING',
    },
  });
  if (existingInvite) {
    throw ApiError.badRequest('Invite already sent');
  }
  const existingUser = await prisma.user.findUnique({
    where: { email: inviteData.email },
  });

  if (existingUser) {
    const isAlreadyMember = await prisma.userOnWorkspace.findUnique({
      where: {
        userId_workspaceId: {
          userId: existingUser.id,
          workspaceId,
        },
      },
    });
    if (isAlreadyMember) {
      throw ApiError.badRequest('This user is already a member of the workspace');
    }
  }
  const token = uuidv4();

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  const invite = await prisma.invite.create({
    data: {
      workspaceId,
      email: inviteData.email,
      token,
      expiresAt,
      role: inviteData.role || 'MEMBER',
      invitedById: user.id,
      status: 'PENDING',
    },
  });
  return invite;
}

export async function acceptInvite(token: string, user: IUser) {
  const invite = await prisma.invite.findUnique({
    where: {
      token,
    },
  });

  if (!invite) {
    throw ApiError.notFound('Invite not found');
  }

  if (invite.status !== 'PENDING') {
    throw ApiError.badRequest('Invite is no longer valid');
  }

  if (invite.expiresAt < new Date()) {
    throw ApiError.badRequest('Invite has expired');
  }

  const userFromDb = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!userFromDb) throw ApiError.unauthorized('User not found');

  if (invite.email !== userFromDb.email) {
    throw ApiError.forbidden('You are not allowed to accept this invite');
  }

  const isMember = await prisma.userOnWorkspace.findUnique({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId: invite.workspaceId,
      },
    },
  });
  if (isMember) {
    throw ApiError.badRequest('You are already a member of this workspace');
  }
  await prisma.userOnWorkspace.create({
    data: {
      userId: user.id,
      workspaceId: invite.workspaceId,
      role: invite.role,
    },
  });
  await prisma.invite.update({
    where: {
      token,
    },
    data: {
      status: 'ACCEPTED',
    },
  });
  return;
}

export const inviteService = {
  createInvite,
  acceptInvite,
};

import { ApiError } from './../utils/apiError';
import prisma from '../config/db';
import { CreateInviteSchemaType } from '../validators/invite.validators';
import { sendInviteEmail } from '../constants/sendInviteEmail';

import { v4 as uuidv4 } from 'uuid';

export class InviteService {

  // Creates a new invite.
  async createInvite(
    inviteData: CreateInviteSchemaType,
    workspaceId: string,
    invitedById: string,
  ) {
    const existingInvite = await prisma.invite.findFirst({
      where: {
        workspaceId,
        email: inviteData.email,
        status: 'PENDING',
        deletedAt: null,
      },
    });
    if (existingInvite) {
      throw ApiError.badRequest('An active invite for this email already exists for this workspace.');
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
          deletedAt: null,
        },
      });
      if (isAlreadyMember) {
        throw ApiError.badRequest('This user is already an active member of the workspace');
      }
    }
    const inviter = await prisma.user.findUnique({
      where: { id: invitedById },
      select: { name: true },
    });
    if (!inviter) {
      throw ApiError.notFound('Inviter not found');
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      select: { name: true },
    });

    if (!workspace) {
      throw ApiError.notFound('Workspace not found');
    }

    const token = uuidv4();

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Invite expires in 7 days

    const invite = await prisma.invite.create({
      data: {
        workspaceId,
        email: inviteData.email,
        token,
        expiresAt,
        role: inviteData.role || 'MEMBER',
        invitedById,
        status: 'PENDING',
      },
    });
    await sendInviteEmail(
      inviteData.email,
      inviter.name,
      workspace.name,
      token
    );
    return invite;
  }

  // acceptance of an invite
  async acceptInvite(token: string, userId: string) {
    const invite = await prisma.invite.findUnique({
      where: {
        token,
        deletedAt: null,
      },
    });

    if (!invite) {
      throw ApiError.notFound('Invite not found or no longer active.');
    }

    if (invite.status !== 'PENDING') {
      if (invite.expiresAt < new Date() && invite.status !== 'EXPIRED') {
        await prisma.invite.update({
          where: { id: invite.id },
          data: { status: 'EXPIRED', deletedAt: new Date() },
        });
      }
      throw ApiError.badRequest('Invite is no longer valid (status is not PENDING).');
    }

    if (invite.expiresAt < new Date()) {
      await prisma.invite.update({
        where: { id: invite.id },
        data: { status: 'EXPIRED', deletedAt: new Date() },
      });
      throw ApiError.badRequest('Invite has expired.');
    }

    const userFromDb = await prisma.user.findUnique({
      where: { id: userId, deletedAt: null },
      select: { email: true },
    });

    if (!userFromDb) {
      throw ApiError.unauthorized('Authenticated user not found or is inactive.');
    }

    if (invite.email !== userFromDb.email) {
      throw ApiError.forbidden('You are not authorized to accept this invite, email mismatch.');
    }

    const isMember = await prisma.userOnWorkspace.findUnique({
      where: {
        userId_workspaceId: {
          userId: userId,
          workspaceId: invite.workspaceId,
        },
        deletedAt: null,
      },
    });
    if (isMember) {
      throw ApiError.badRequest('You are already an active member of this workspace.');
    }

    await prisma.userOnWorkspace.create({
      data: {
        userId: userId,
        workspaceId: invite.workspaceId,
        role: invite.role,
      },
    });

    await prisma.invite.update({
      // we can find it by token 
      where: { id: invite.id },
      data: {
        status: 'ACCEPTED',
        deletedAt: new Date(),
      },
    });
    return;
  }
}

export const inviteService = new InviteService();

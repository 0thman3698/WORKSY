// pages
import { ApiError } from './../utils/apiError';
import prisma from '../config/db';
import {
  ICreateWorkspaceResponse,
  IWorkspace,
  ICreateWorkspace,
  IMyWorkspaces,
  IUpdateWorkspace,
} from '../interfaces/workspace.interface';
import { accessControlService } from './accessControl.service';

export class WorkspaceService {
  async createWorkspace(
    workspaceData: ICreateWorkspace,
    userId: string,
  ): Promise<ICreateWorkspaceResponse> {
    const existingWorkspace = await prisma.workspace.findFirst({
      where: {
        name: workspaceData.name,
        ownerId: userId,
      },
    });

    if (existingWorkspace) {
      throw ApiError.badRequest('You already have a workspace with this name');
    }

    const slug = workspaceData.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

    const existingSlug = await prisma.workspace.findUnique({ where: { slug } });
    if (existingSlug) {
      throw ApiError.badRequest('A workspace with similar slug already exists');
    }

    const workspace = await prisma.workspace.create({
      data: {
        name: workspaceData.name,
        slug,
        ownerId: userId,
        members: {
          create: [
            {
              user: { connect: { id: userId } },
              role: 'OWNER',
            },
          ],
        },
      },
    });

    return {
      workspace,
    };
  }

  async getMyWorkspaces(userId: string): Promise<IMyWorkspaces[]> {
    const memberships = await prisma.userOnWorkspace.findMany({
      where: { userId: userId },
      include: {
        workspace: {
          include: {
            owner: { select: { id: true, name: true } },
          },
        },
      },
    });
    const workspaces = memberships.map((membership: any) => ({
      id: membership.workspace.id,
      name: membership.workspace.name,
      role: membership.role,
      owner: membership.workspace.owner,
    }));
    return workspaces;
  }

  async updateWorkspace(
    workspaceId: string,
    workspaceData: IUpdateWorkspace,
    userId: string,
  ): Promise<IWorkspace> {
    await accessControlService.checkIsOwner(userId, workspaceId)

    const updatedWorkspace = await prisma.workspace.update({
      where: { id: workspaceId },
      data: { name: workspaceData.name },
    });
    return updatedWorkspace;
  }

  async deleteWorkspace(workspaceId: string, userId: string): Promise<void> {
    await accessControlService.checkIsOwner(userId, workspaceId)
    await prisma.userOnWorkspace.deleteMany({
      where: { workspaceId },
    });

    await prisma.workspace.delete({
      where: { id: workspaceId },
    });
  }
}

export const workspaceService = new WorkspaceService();

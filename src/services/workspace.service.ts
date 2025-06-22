// pages
import { ApiError } from './../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';
import prisma from '../config/db';
import {
  ICreateWorkspaceResponse,
  IWorkspace,
  ICreateWorkspace,
  IMyWorkspaces,
  IUpdateWorkspace,
} from '../interfaces/workspace.interface';
import { accessControlService } from './accessControl.service';
import { date } from 'zod';

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

  async getMyWorkspaces(userId: string, query: any): Promise<IMyWorkspaces[]> {
    const { where, orderBy, skip, take } = buildPrismaQuery({
      query,
      searchableFields: ['name'],
      filterableFields: [], // نخليها فاضية هنا لأن role في userOnWorkspace مش في workspace
    });

    const memberships = await prisma.userOnWorkspace.findMany({
      where: {
        userId,
        ...(query.role && { role: query.role }), // فلترة على userOnWorkspace.role
        workspace: {
          is: {
            ...where, // فلترة على workspace.name مثلاً
          },
        },
      },
      include: {
        workspace: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      ...(orderBy && { orderBy: { workspace: orderBy } }),
      skip,
      take,
    });

    return memberships.map((membership: any) => ({
      id: membership.workspace.id,
      name: membership.workspace.name,
      role: membership.role,
      owner: membership.workspace.owner,
    }));
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

    await prisma.workspace.update({
      where: { id: workspaceId },
      data: { deletedAt: new Date() },
    });
  }
}

export const workspaceService = new WorkspaceService();

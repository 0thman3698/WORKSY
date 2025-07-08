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

export class WorkspaceService {
  async createWorkspace(
    workspaceData: ICreateWorkspace,
    userId: string,
  ): Promise<ICreateWorkspaceResponse> {
    const existingWorkspace = await prisma.workspace.findFirst({
      where: {
        name: workspaceData.name,
        ownerId: userId,
        deletedAt: null,
      },
    });

    if (existingWorkspace) {
      throw ApiError.badRequest('You already have a workspace with this name');
    }

    const slug = workspaceData.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

    const existingSlug = await prisma.workspace.findFirst({ where: { slug, deletedAt: null, } });
    if (existingSlug) {
      throw ApiError.badRequest('A workspace with similar slug already exists');
    }
    const MAX_WORKSPACES_PER_USER = parseInt(process.env.MAX_WORKSPACES || '5');

    const userWorkspaceCount = await prisma.workspace.count({
      where: {
        ownerId: userId,
        deletedAt: null,
      },
    });

    if (userWorkspaceCount >= MAX_WORKSPACES_PER_USER) {
      throw ApiError.badRequest(`You can only create up to ${MAX_WORKSPACES_PER_USER} workspaces.`);
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
    const {
      filters: workspaceFilters,
      orderBy,
      skip,
      take,
    } = buildPrismaQuery({
      query,
      searchableFields: ['name'],
    });

    const where: any = {
      userId,
    };

    if (query.role) {
      where.role = query.role;
    }

    if (workspaceFilters) {
      where.workspace = { is: workspaceFilters };
    }

    const memberships = await prisma.userOnWorkspace.findMany({
      where,
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
    //@ts-expect-error
    return (memberships as any).map((membership) => ({
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
    if (workspaceData.name) {
      const existing = await prisma.workspace.findFirst({
        where: {
          name: workspaceData.name,
          ownerId: userId,
          deletedAt: null,
          NOT: { id: workspaceId },
        },
      });

      if (existing) {
        throw ApiError.badRequest('You already have another workspace with this name.');
      }
    }


    const updatedWorkspace = await prisma.workspace.update({
      where: { id: workspaceId },
      data: {
        ...(workspaceData.name && { name: workspaceData.name }),
        ...(workspaceData.description && { description: workspaceData.description }),
        updatedAt: new Date(),
      }
      ,
    });

    return updatedWorkspace;
  }

  async deleteWorkspace(workspaceId: string, userId: string): Promise<IWorkspace> {

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });

    if (!workspace) {
      throw ApiError.notFound('Workspace not found.');
    }

    if (workspace.deletedAt) {
      throw ApiError.badRequest('Workspace is already deleted.');
    }

    const softDeletedWorkspace = await prisma.workspace.update({
      where: { id: workspaceId },
      data: {
        deletedAt: new Date(),
        members: {
          updateMany: {
            where: { workspaceId: workspaceId },
            data: { deletedAt: new Date() }
          }
        },
        Channel: {
          updateMany: {
            where: { workspaceId: workspaceId },
            data: { deletedAt: new Date() }
          }
        },
        DirectMessageConversation: {
          updateMany: {
            where: { workspaceId: workspaceId },
            data: { deletedAt: new Date() }
          }
        }
      },
    });

    return softDeletedWorkspace;
  }
  async getWorkspaceById(workspaceId: string): Promise<IWorkspace> {
    const workspace = await prisma.workspace.findFirst({
      where: {
        id: workspaceId,
        deletedAt: null,
      },
    });

    if (!workspace) {
      throw ApiError.notFound('Workspace not found or is already deleted');
    }

    return workspace;
  }


}

export const workspaceService = new WorkspaceService();

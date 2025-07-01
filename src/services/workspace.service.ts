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

    const existingSlug = await prisma.workspace.findFirst({ where: { slug,deletedAt: null, } });
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
      where: {
        userId: userId,
        deletedAt: null,
        workspace: {
          deletedAt: null,
        },
      },
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
      slug: membership.workspace.slug, 
      description: membership.workspace.description,
      createdAt: membership.workspace.createdAt, 
    }));
    return workspaces;
  }


async updateWorkspace(
    workspaceId: string,
    workspaceData: IUpdateWorkspace,
    userId: string,
  ): Promise<IWorkspace> {
    const existingWorkspace = await prisma.workspace.findUnique({
      where: {
        id: workspaceId,
        deletedAt: null,
      },
    });

    if (!existingWorkspace) {
      throw ApiError.notFound('Workspace not found or is already deleted.');
    }

    const updatedWorkspace = await prisma.workspace.update({
      where: { id: workspaceId },
      data: {
        name: workspaceData.name,
        updatedAt: new Date(),
        description:workspaceData.description
      },
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

}

export const workspaceService = new WorkspaceService();

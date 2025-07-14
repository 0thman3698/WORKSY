import { createChannelSchemaType, updateChannelSchemaType } from '../validators/channel.validators';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { ChannelRole } from '@prisma/client';

export class ChannelService {
  async createChannel(channelData: createChannelSchemaType, workspaceId: string, userId: string) {
    await this.checkChannelNameUnique(channelData.name, workspaceId);
    await this.ensureWorkspaceHasRoom(workspaceId);

    const newChannel = await prisma.channel.create({
      data: {
        name: channelData.name,
        description: channelData.description,
        workspaceId,
        isPublic: channelData.isPublic,
        ownerId: userId,
        UserOnChannels: {
          create: {
            userId,
            role: ChannelRole.MEMBER,
          },
        },
      },
    });

    return newChannel;
  }

  async getAllChannels(workspaceId: string, userId: string) {
    return await prisma.channel.findMany({
      where: {
        workspaceId,
        deletedAt: null,
        OR: [
          { isPublic: true },
          { UserOnChannels: { some: { userId, deletedAt: null } } },
        ],
      },
    });
  }

  async getChannel(channelId: string, workspaceId: string, userId: string) {
    const channel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        workspaceId,
        deletedAt: null,
        OR: [
          { isPublic: true },
          { UserOnChannels: { some: { userId, deletedAt: null } } },
        ],
      },
    });

    if (!channel) {
      throw ApiError.notFound('Channel not found or you do not have access.');
    }

    return channel;
  }

  async updateChannel(
    channelData: updateChannelSchemaType,
    channelId: string,
    workspaceId: string
  ) {
    const channel = await this.findChannelOrThrow(channelId, workspaceId);

    if (channelData.name && channelData.name !== channel.name) {
      await this.checkChannelNameUnique(channelData.name, workspaceId, channelId);
    }

    return await prisma.channel.update({
      where: { id: channelId },
      data: {
        ...channelData,
        updatedAt: new Date(),
      },
    });
  }


  async deleteChannel(channelId: string, workspaceId: string) {
    await this.findChannelOrThrow(channelId, workspaceId);

    return await prisma.channel.update({
      where: { id: channelId },
      data: {
        deletedAt: new Date(),
        Message: {
          updateMany: {
            where: { channelId },
            data: { deletedAt: new Date() },
          },
        },
        UserOnChannels: {
          updateMany: {
            where: { channelId },
            data: { deletedAt: new Date() },
          },
        },
      },
    });
  }

  private async findChannelOrThrow(channelId: string, workspaceId: string) {
    const channel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        workspaceId,
        deletedAt: null,
      },
    });

    if (!channel) {
      throw ApiError.notFound('Channel not found or is already deleted.');
    }

    return channel;
  }

  private async checkChannelNameUnique(name: string, workspaceId: string, excludeChannelId?: string) {
    const existing = await prisma.channel.findFirst({
      where: {
        name,
        workspaceId,
        deletedAt: null,
        ...(excludeChannelId ? { NOT: { id: excludeChannelId } } : {}),
      },
    });

    if (existing) {
      throw ApiError.badRequest('A channel with this name already exists in this workspace.');
    }
  }

  private async ensureWorkspaceHasRoom(workspaceId: string) {
    const MAX_CHANNELS = parseInt(process.env.MAX_CHANNELS || '10');
    const count = await prisma.channel.count({
      where: {
        workspaceId,
        deletedAt: null,
      },
    });

    if (count >= MAX_CHANNELS) {
      throw ApiError.badRequest(`Each workspace can have up to ${MAX_CHANNELS} channels.`);
    }
  }
}

export const channelService = new ChannelService();

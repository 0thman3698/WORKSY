import { createChannelSchemaType, updateChannelSchemaType } from '../validators/channel.validators';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';

export class ChannelService {

  async createChannel(
    channelData: createChannelSchemaType,
    workspaceId: string,
    userId: string,
  ) {
    const existingChannel = await prisma.channel.findFirst({
      where: {
        name: channelData.name,
        workspaceId: workspaceId,
        deletedAt: null,
      },
    });

    if (existingChannel) {
      throw ApiError.badRequest('A channel with the same name already exists in this workspace.');
    }

    const newChannel = await prisma.channel.create({
      data: {
        name: channelData.name,
        description: channelData.description,
        workspaceId,
        isPublic: channelData.isPublic,
        ownerId: userId,
        UserOnChannel: {
          create: {
            userId: userId,
            role: 'MEMBER'
          }
        }
      },
    });

    return newChannel;
  }

  async getAllChannels(workspaceId: string, userId: string) {
    const channels = await prisma.channel.findMany({
      where: {
        workspaceId,
        deletedAt: null,
        OR: [
          { isPublic: true },
          { UserOnChannel: { some: { userId: userId, deletedAt: null } } }
        ]
      },
    });

    return channels;
  }


  async getChannel(channelId: string, workspaceId: string, userId: string) {

    const channel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        workspaceId,
        deletedAt: null,
        OR: [
          { isPublic: true },
          { UserOnChannel: { some: { userId: userId, deletedAt: null } } },
        ],
      },
    });

    if (!channel) {
      throw ApiError.notFound('Channel not found or you do not have access.');
    }

    return channel;
  }


  async updateChannel(channelData: updateChannelSchemaType, channelId: string, workspaceId: string, userId: string) {

    const existingChannel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        workspaceId,
        deletedAt: null,
      },
    });

    if (!existingChannel) {
      throw ApiError.notFound('Channel not found or is already deleted.');
    }


    if (channelData.name && channelData.name !== existingChannel.name) {
      const nameTaken = await prisma.channel.findFirst({
        where: {
          name: channelData.name,
          workspaceId,
          deletedAt: null,
          NOT: { id: channelId },
        },
      });

      if (nameTaken) {
        throw ApiError.badRequest('A channel with this name already exists in this workspace.');
      }
    }

    const updatedChannel = await prisma.channel.update({
      where: { id: channelId },
      data: {
        ...channelData,
        updatedAt: new Date(),
      },
    });
    return updatedChannel;
  }

  async deleteChannel(channelId: string, workspaceId: string, userId: string) {
    const existingChannel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        workspaceId,
        deletedAt: null,
      },
    });

    if (!existingChannel) {
      throw ApiError.notFound('Channel not found or is already deleted.');
    }

    const softDeletedChannel = await prisma.channel.update({
      where: { id: channelId },
      data: {
        deletedAt: new Date(),
        Message: {
          updateMany: {
            where: { channelId: channelId },
            data: { deletedAt: new Date() }
          }
        },
        UserOnChannel: {
          updateMany: {
            where: { channelId: channelId },
            data: { deletedAt: new Date() }
          }
        }
      },
    });

    return softDeletedChannel;
  }
}

export const channelService = new ChannelService();

import { createChannelSchemaType, updateChannelSchemaType } from '../validators/channel.validators';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';

import { accessControlService } from './accessControl.service';
import { date } from 'zod';

export class ChannelService {
    async createChannel(
        channelData: createChannelSchemaType,
        workspaceId: string,
        userId: string,
    ) {
        await accessControlService.checkIsOwnerOrAdmin(userId, workspaceId)
        const existingChannel = await prisma.channel.findFirst({
            where: {
                name: channelData.name,
                workspaceId: workspaceId,
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
            },
        });

        return newChannel;
    }

    async getAllChannels(workspaceId: string, userId: string, query: any) {
        await accessControlService.checkIsMember(userId, workspaceId)
        const { where, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['name'],
            filterableFields: ['isPublic'],
        });
        const channels = await prisma.channel.findMany({
            where: {
                workspaceId,
                AND: [
                    {
                        OR: [
                            { isPublic: true },
                            { UserOnChannels: { some: { userId } } }
                        ]
                    },
                    where,
                ],
            },
            ...(orderBy && { orderBy }),
            skip,
            take,
        });

        return channels;
    }

    async getChannel(channelId: string, workspaceId: string, userId: string) {
        await accessControlService.checkIsMember(userId, workspaceId)

        const channel = await prisma.channel.findFirst({
            where: {
                id: channelId,
                workspaceId,
                OR: [
                    { isPublic: true },
                    { UserOnChannels: { some: { userId } } },
                ],
            },
        });


        if (!channel) {
            throw ApiError.notFound('Channel not found');
        }

        return channel;
    }

    async updateChannel(channelData: updateChannelSchemaType, channelId: string, workspaceId: string, userId: string) {
        await accessControlService.checkIsOwnerOrAdmin(userId, workspaceId)

        const existingChannel = await prisma.channel.findFirst({
            where: {
                id: channelId,
                workspaceId,
            },
        });

        if (!existingChannel) {
            throw ApiError.notFound('Channel not found.');
        }

        if (channelData.name && channelData.name !== existingChannel.name) {
            const nameTaken = await prisma.channel.findFirst({
                where: {
                    name: channelData.name,
                    workspaceId,
                    NOT: { id: channelId },
                },
            });

            if (nameTaken) {
                throw ApiError.badRequest('A channel with this name already exists in this workspace.');
            }
        }
        const updatedChannel = await prisma.channel.update({
            where: { id: channelId },
            data: channelData,
        });
        return updatedChannel;
    }

    async deleteChannel(channelId: string, workspaceId: string, userId: string) {
        await accessControlService.checkIsOwnerOrAdmin(userId, workspaceId)

        const existingChannel = await prisma.channel.findFirst({
            where: {
                id: channelId,
                workspaceId,
            },
        });

        if (!existingChannel) {
            throw ApiError.notFound('Channel not found.');
        }
        await prisma.channel.update({
            where: { id: channelId },
            data: { deletedAt: new Date() }
        });

        return;
    }
}

export const channelService = new ChannelService();

import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';
import { mentionService } from './mention.service';

export class ChannelMessageService {
    async sendChannelMessage(channelId: string, content: string, userId: string) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId },
            include: {
                workspace: true,
                UserOnChannels: true,
            },
        });
        if (!channel || channel.deletedAt) {
            throw ApiError.notFound('Channel not found');
        }

        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: channel.workspaceId,
            },
        });
        if (!isMember) {
            throw ApiError.forbidden("You are not a member of this workspace.");
        }
        const message = await prisma.message.create({
            data: {
                content,
                userId,
                channelId
            },
        });


        await mentionService.handleMentions(content, message.id, channel.workspaceId, userId);

        const messageWithMentions = await prisma.message.findUnique({
            where: { id: message.id },
            include: {
                MessageMention: {
                    select: {
                        mentionedUserId: true
                    }
                }
            }
        });
        if (!messageWithMentions) {
            throw ApiError.notFound("Message not found after creation.");// handling ts
        }
        return messageWithMentions;
    }
    async getAllChannelMessages(channelId: string, userId: string, query: any) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId },
            include: {
                workspace: true,
                UserOnChannels: true,
            },
        });

        if (!channel || channel.deletedAt) {
            throw ApiError.notFound('Channel not found.');
        }

        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: channel.workspaceId,
            },
        });

        if (!isMember) {
            throw ApiError.forbidden('You are not a member of the workspace.');
        }
        if (!channel.isPublic) {
            const isChannelMember = await prisma.userOnChannels.findFirst({
                where: {
                    userId,
                    channelId,
                },
            });

            if (!isChannelMember) {
                throw ApiError.forbidden('You are not a member of this private channel.');
            }
        }

        const { where: filterWhere, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['content'],
            filterableFields: [],
        });

        // 5. جلب الرسائل
        const messages = await prisma.message.findMany({
            where: {
                AND: [
                    { channelId },
                    { deletedAt: null },
                    ...(Object.keys(filterWhere).length ? [filterWhere] : []),
                ],
            },
            orderBy: orderBy.length ? orderBy : [{ createdAt: 'asc' }],
            skip,
            take,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
                reactions: true,
                MessageMention: {
                    select: {
                        mentionedUser: {
                            select: {
                                id: true,
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        });

        return messages;
    }
    async editChannelMessage(userId: string, messageId: string, newContent: string) {

        // 1. جيب الرسالة
        const message = await prisma.message.findUnique({
            where: { id: messageId },
        });

        if (!message || message.deletedAt || !message.channelId) {
            throw ApiError.notFound("Channel message not found.");
        }

        if (message.userId !== userId) {
            throw ApiError.forbidden("You can only edit your own channel messages.");
        }

        const updated = await prisma.message.update({
            where: { id: messageId },
            data: {
                content: newContent,
                isEdited: true,
            },
        });

        return updated;
    }

    async deleteChannelMessage(userId: string, messageId: string) {
        const message = await prisma.message.findUnique({
            where: { id: messageId },
        });

        if (!message || message.deletedAt || !message.channelId) {
            throw ApiError.notFound("Channel message not found.");
        }

        if (message.userId !== userId) {
            throw ApiError.forbidden("You can only delete your own channel messages.");
        }

        const deleted = await prisma.message.update({
            where: { id: messageId },
            data: {
                deletedAt: new Date(),
            },
        });

        return deleted;
    }



}
export const channelMessageService = new ChannelMessageService();

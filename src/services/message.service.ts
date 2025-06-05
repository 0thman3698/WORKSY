import { createMessageSchemaType } from 'src/validators/message.validators';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';

export class MessageService {
    async sendMessage(channelId: string, messageData: createMessageSchemaType, userId: string) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found');
        }

        const member = await prisma.userOnChannels.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not a member of this channel');
        }
        const message = await prisma.message.create({
            data: {
                content: messageData.content,
                userId,
                channelId

            }
        })
        return message
    }
    async getAllMessages(channelId: string, userId: string) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found');
        }

        const member = await prisma.userOnChannels.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not a member of this channel');
        }
        const messages = await prisma.message.findMany({
            where: { channelId },
            orderBy: { createdAt: 'asc' },
            include: {
                user: {
                    select: { id: true, name: true }
                }

            }

        })
        return messages

    }
}
export const messageService = new MessageService();

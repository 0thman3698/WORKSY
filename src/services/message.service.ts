import { z } from 'zod';
import { createMessageSchemaType, createMessageSchema } from '../validators/message.validators';
import prisma from '../config/db'; 
import { ApiError } from '../utils/apiError';

export class MessageService {
    // Sends a message to a channel.
    async sendMessage(channelId: string, messageData: createMessageSchemaType, userId: string) {
        try {
            createMessageSchema.parse(messageData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw ApiError.badRequest(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
            }
            throw ApiError.badRequest('Invalid message data.');
        }

        const channel = await prisma.channel.findUnique({
            where: {
                id: channelId,
                deletedAt: null, 
            },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
                deletedAt: null, 
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not an active member of this channel.');
        }

        const message = await prisma.message.create({
            data: {
                content: messageData.content,
                userId,
                channelId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                       
                    }
                }
            }
        });
        return message;
    }

    // Retrieves active messages for specific channel with pagination.
    async getAllMessages(channelId: string, userId: string, limit: number = 50, skip: number = 0) {
        const channel = await prisma.channel.findUnique({
            where: {
                id: channelId,
                deletedAt: null,
            },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
                deletedAt: null,
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not an active member of this channel.');
        }

        const messages = await prisma.message.findMany({
            where: {
                channelId: channelId,
                deletedAt: null,
            },
            orderBy: { createdAt: 'asc' }, 
            take: limit,
            skip: skip, 
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
        return messages;
    }
}
export const messageService = new MessageService();

import { z } from 'zod'; // Import z for validation
import { createMessageSchemaType, createMessageSchema } from '../validators/message.validators'; // Ensure createMessageSchema is imported
import prisma from '../config/db'; // Assuming this path is correct
import { ApiError } from '../utils/apiError'; // Assuming this path is correct

export class MessageService {
    // Sends a message to a channel.
    async sendMessage(channelId: string, messageData: createMessageSchemaType, userId: string) {
        // 1. Message Content Validation (for Socket.IO calls and robustness)
        // This ensures messages sent via Socket.IO also adhere to the schema.
        try {
            createMessageSchema.parse(messageData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Return a bad request error with validation details
                throw ApiError.badRequest(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
            }
            throw ApiError.badRequest('Invalid message data.');
        }

        // 2. Verify channel exists and is active
        const channel = await prisma.channel.findUnique({
            where: {
                id: channelId,
                deletedAt: null, // Only allow sending messages to active channels
            },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        // 3. Verify user is an active member of the channel
        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
                deletedAt: null, // Only allow active members to send messages
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not an active member of this channel.');
        }

        // 4. Create the message and include the user details for real-time display
        const message = await prisma.message.create({
            data: {
                content: messageData.content,
                userId,
                channelId,
            },
            include: { // <--- ADDED THIS INCLUDE BLOCK
                user: {
                    select: {
                        id: true,
                        name: true,
                        // Add other user fields if needed for display, e.g., avatar: true
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

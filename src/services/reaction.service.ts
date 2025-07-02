import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
//helper function
export const checkUserCanReact = async (messageId: string, userId: string) => {
    const message = await prisma.message.findUnique({
        where: { id: messageId },
        include: {
            channel: {
                select: {
                    id: true,
                    UserOnChannels: {
                        where: { userId },
                        select: { userId: true },
                    },
                },
            },
            DirectMessageConversation: {
                select: {
                    id: true,
                    participants: {
                        where: { userId },
                        select: { userId: true },
                    },
                },
            },
        },
    });

    if (!message) {
        throw ApiError.notFound("Message not found");
    }

    if (message.channelId) {
        const isMember = (message.channel?.UserOnChannels?.length || 0) > 0;
        if (!isMember) throw ApiError.forbidden("You are not a member of this channel");
    }

    if (message.conversationId) {
        const isParticipant = (message.DirectMessageConversation?.participants?.length || 0) > 0;
        if (!isParticipant) throw ApiError.forbidden("You are not a participant in this DM");
    }
    if (!message.channelId && !message.conversationId) {
        throw ApiError.badRequest('Message must belong to a channel or a DM conversation');
    }

};
export class ReactionService {
    async addOrUpdateReaction(messageId: string, emoji: string, userId: string) {
        await checkUserCanReact(messageId, userId)

        const existingReaction = await prisma.messageReaction.findFirst({
            where: {
                userId,
                messageId
            }
        });


        if (existingReaction?.emoji === emoji) {
            await prisma.messageReaction.delete({
                where: {
                    userId_messageId_emoji: {
                        userId,
                        messageId,
                        emoji
                    }
                }
            });
            return { message: 'Reaction removed' };
        }
        if (existingReaction) {
            await prisma.messageReaction.delete({
                where: {
                    userId_messageId_emoji: {
                        userId,
                        messageId,
                        emoji: existingReaction.emoji
                    }
                }
            });
        }
        const newReaction = await prisma.messageReaction.create({
            data: {
                userId,
                messageId,
                emoji
            }
        });

        return newReaction;
    }
    async getReactionsForMessage(messageId: string, userId: string) {
        await checkUserCanReact(messageId, userId)

        const reactions = await prisma.messageReaction.findMany({
            where: { messageId },
            select: {
                emoji: true,
                user: {
                    select: { id: true, name: true, avatar: true }
                }
            }
        });
        return reactions
    }

}

export const reactionService = new ReactionService();

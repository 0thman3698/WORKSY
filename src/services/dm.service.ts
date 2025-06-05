import prisma from '../config/db';
import { ApiError } from '../utils/apiError';

export class DmService {
    async createConversation(userId: string, otherUserId: string, workspaceId: string) {
        //check user dont dm himself
        if (userId === otherUserId) {
            throw ApiError.badRequest("Cannot create DM with yourself.");
        }
        // check users are exists in DB
        const users = await prisma.user.findMany({
            where: { id: { in: [userId, otherUserId] } },
            select: { id: true }
        });

        if (users.length !== 2) {
            throw ApiError.badRequest("One or both users do not exist.");
        }
        //check users are in same workspace
        const members = await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                userId: { in: [userId, otherUserId] },
            },
        });

        if (members.length !== 2) {
            throw ApiError.badRequest("Both users must be in the same workspace.");
        }
        // check if there is existing conversation 
        const existingConversation = await prisma.directMessageConversation.findFirst({
            where: {
                participants: {
                    every: {
                        userId: { in: [userId, otherUserId] }
                    }
                },
                AND: [
                    {
                        participants: {
                            some: { userId },
                        },
                    },
                    {
                        participants: {
                            some: { userId: otherUserId },
                        },
                    },
                ],
                workspaceId
            },
            include: { participants: true },
        });


        if (existingConversation && existingConversation.participants.length === 2) {
            return existingConversation;
        }

        const newConversation = await prisma.directMessageConversation.create({
            data: {
                workspace: { connect: { id: workspaceId } },
                participants: {
                    create: [
                        { user: { connect: { id: userId } } },
                        { user: { connect: { id: otherUserId } } }
                    ],
                },
            },
            include: { participants: true }
        });

        return newConversation;
    }
    async sendMessage(content: string, conversationId: string, userId: string) {
        //check convesation exist
        const conversation = await prisma.directMessageConversation.findUnique({
            where: { id: conversationId },
            include: {
                participants: true,
                workspace: {
                    include: {
                        members: true
                    }
                }
            }
        })
        if (!conversation) {
            throw ApiError.notFound("Conversation not found.");

        }
        //check user in conversation
        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not a participant in this conversation.");
        }
        //check user in workspace
        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspaceId,
            }
        });
        if (!isMember) {
            throw ApiError.forbidden("User not part of the workspace.");
        }


        //createMessage
        const message = await prisma.message.create({
            data: {
                content,
                conversationId,
                userId
            }
        })
        return message;
    }
    async getAllMessages(conversationId: string, userId: string) {
        //check convesation exist
        const conversation = await prisma.directMessageConversation.findUnique({
            where: { id: conversationId },
            include: {
                participants: true,
                workspace: {
                    include: {
                        members: true
                    }
                }
            }
        })
        if (!conversation) {
            throw ApiError.notFound("Conversation not found.");

        }
        //check user in conversation
        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not a participant in this conversation.");
        }
        //check user in workspace
        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspaceId,
            }
        });
        if (!isMember) {
            throw ApiError.forbidden("User not part of the workspace.");
        }
        //get all messages
        const messages = await prisma.message.findMany({
            where: { conversationId },
            orderBy: { createdAt: 'asc' },
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
    async getUserConversations(workspaceId: string, userId: string) {
        // تأكد إن المستخدم عضو في الـ workspace
        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId,
            },
        });
        if (!isMember) {
            throw ApiError.forbidden("User not part of the workspace.");
        }

        // هات كل المحادثات اللي هو مشارك فيها
        const conversations = await prisma.directMessageConversation.findMany({
            where: {
                workspaceId,
                participants: {
                    some: { userId },
                },
            },
            include: {
                participants: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                messages: {
                    orderBy: { createdAt: 'desc' },
                    take: 1, // آخر رسالة
                    select: {
                        content: true,
                        createdAt: true,
                    },
                },
            },
        });

        return conversations;
    }
    // delete messages and conversaions not handeled yet.

}

export const dmService = new DmService();

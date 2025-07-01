import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { z } from 'zod';
import { createMessageSchema } from '../validators/message.validators';


export class DmService {
    // direct message conversation between two users
    async createConversation(userId: string, otherUserId: string, workspaceId: string) {
        if (userId === otherUserId) {
            throw ApiError.badRequest("Cannot create DM with yourself.");
        }

        const users = await prisma.user.findMany({
            where: {
                id: { in: [userId, otherUserId] },
                deletedAt: null
            },
            select: { id: true }
        });

        if (users.length !== 2) {
            throw ApiError.badRequest("One or both users do not exist or are inactive.");
        }

        const otherUserIsWorkspaceMember = await prisma.userOnWorkspace.findUnique({
            where: {
                userId_workspaceId: {
                    userId: otherUserId,
                    workspaceId: workspaceId,
                },
                deletedAt: null,
            },
            select: { userId: true } 
        });

        if (!otherUserIsWorkspaceMember) {
            throw ApiError.badRequest("The other user is not an active member of this workspace.");
        }

        const existingConversation = await prisma.directMessageConversation.findFirst({
            where: {
                workspaceId,
                deletedAt: null,
                AND: [
                    { participants: { some: { userId: userId, deletedAt: null } } },
                    { participants: { some: { userId: otherUserId, deletedAt: null } } },
                ],
            },
            include: {
                participants: {
                    where: { deletedAt: null },
                    include: {
                        user: {
                            select: { id: true, name: true, avatar: true }
                        }
                    }
                }
            },
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
            include: {
                participants: {
                    where: { deletedAt: null },
                    include: {
                        user: {
                            select: { id: true, name: true, avatar: true } 
                        }
                    }
                }
            }
        });

        return newConversation;
    }

    // Sends direct message within conversation.
    async sendMessage(conversationId: string, content: string, userId: string) {
        try {
            createMessageSchema.parse({ content });
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw ApiError.badRequest(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
            }
            throw ApiError.badRequest('Invalid message content.');
        }

        const conversation = await prisma.directMessageConversation.findUnique({
            where: {
                id: conversationId,
                deletedAt: null, 
            },
            include: {
                participants: {
                    where: { deletedAt: null }, 
                    select: { userId: true } 
                },
                workspace: {
                    select: { id: true } 
                }
            }
        });

        if (!conversation) {
            throw ApiError.notFound("Conversation not found or is inactive.");
        }

        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not an active participant in this conversation.");
        }

        const isMemberOfWorkspace = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspace.id,
                deletedAt: null,
            }
        });
        if (!isMemberOfWorkspace) {
            throw ApiError.forbidden("User is not an active member of the workspace associated with this conversation.");
        }

        const message = await prisma.message.create({
            data: {
                content,
                conversationId,
                userId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    }
                }
            }
        });
        return message;
    }

    // Retrieves active messages for specific direct message conversation with pagination.
    async getAllMessages(conversationId: string, userId: string, limit: number = 50, skip: number = 0) {
        const conversation = await prisma.directMessageConversation.findUnique({
            where: {
                id: conversationId,
                deletedAt: null,
            },
            include: {
                participants: {
                    where: { deletedAt: null }, 
                    select: { userId: true } 
                },
                workspace: {
                    select: { id: true } 
                }
            }
        });

        if (!conversation) {
            throw ApiError.notFound("Conversation not found or is inactive.");
        }

        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not an active participant in this conversation.");
        }

        const isMemberOfWorkspace = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspace.id,
                deletedAt: null,
            }
        });
        if (!isMemberOfWorkspace) {
            throw ApiError.forbidden("User is not an active member of the workspace associated with this conversation.");
        }

        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId,
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
                        avatar: true,
                    }
                }
            }
        });

        return messages;
    }

    // Retrieves all active direct message conversations
    async getUserConversations(workspaceId: string, userId: string) {
        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId,
                deletedAt: null,
            },
        });
        if (!isMember) {
            throw ApiError.forbidden("User not an active member of this workspace.");
        }

        const conversations = await prisma.directMessageConversation.findMany({
            where: {
                workspaceId,
                deletedAt: null, 
                participants: {
                    some: {
                        userId: userId,
                        deletedAt: null,
                    },
                },
            },
            include: {
                participants: {
                    where: { deletedAt: null },
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                },
                messages: {
                    where: { deletedAt: null },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                    select: {
                        content: true,
                        createdAt: true,
                        userId: true
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc'
            }
        });

        return conversations;
    }

    // Edit Message - Delete Message - React on message
}

export const dmService = new DmService();

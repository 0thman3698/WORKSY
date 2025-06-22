import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';


export class DmService {

    async sendDMMessage(content: string, conversationId: string, userId: string) {

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
    async getAllDMMessages(conversationId: string, userId: string, query: any) {
        const conversation = await prisma.directMessageConversation.findUnique({
            where: { id: conversationId },
            include: {
                participants: true,
                workspace: { include: { members: true } },
            },
        });

        if (!conversation) {
            throw ApiError.notFound("Conversation not found.");
        }

        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not a participant in this conversation.");
        }

        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspaceId,
            },
        });

        if (!isMember) {
            throw ApiError.forbidden("User not part of the workspace.");
        }

        const { where: filterWhere, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['content'],
            filterableFields: [],
        });

        const messages = await prisma.message.findMany({
            where: {
                AND: [
                    { conversationId },
                    ...(Object.keys(filterWhere).length > 0 ? [filterWhere] : []),
                ],
            },
            orderBy,
            skip,
            take,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });


        return messages;
    }
    async editDMMessage(userId: string, messageId: string, newContent: string) {

        // 1. جيب الرسالة
        const message = await prisma.message.findUnique({
            where: { id: messageId },
        });

        if (!message || message.deletedAt) {
            throw ApiError.notFound("Message not found or deleted.");
        }

        // 2. تحقق إن المستخدم هو صاحب الرسالة
        if (message.userId !== userId) {
            throw ApiError.forbidden("You can only edit your own messages.");
        }

        // 3. تحديث الرسالة
        const updated = await prisma.message.update({
            where: { id: messageId },
            data: {
                content: newContent,
                isEdited: true,
            },
        });

        return updated;
    }
    async deleteDMMessage(userId: string, messageId: string) {
        const message = await prisma.message.findUnique({
            where: { id: messageId },
        });

        if (!message || message.deletedAt) {
            throw ApiError.notFound("Message not found or already deleted.");
        }

        if (message.userId !== userId) {
            throw ApiError.forbidden("You can only delete your own messages.");
        }

        const deleted = await prisma.message.update({
            where: { id: messageId },
            data: {
                deletedAt: new Date(),
            },
        });

        return {
            messageId: deleted.id,
            conversationId: deleted.conversationId,
            message: deleted,
        };
    }
    // delete messages and conversaions not handeled yet.
}

export const dmService = new DmService();

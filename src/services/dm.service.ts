import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';
import { mentionService } from './mention.service';
import { fileService } from './file.service';



export class DmService {

    async sendDMMessage(content: string, conversationId: string, userId: string, uploadedFiles?: Express.Multer.File[]) {
        // check if conversation exists
        const conversation = await prisma.directMessageConversation.findUnique({
            where: { id: conversationId },
            include: {
                participants: true,
                workspace: {
                    include: {
                        members: true,
                    },
                },
            },
        });

        if (!conversation) {
            throw ApiError.notFound("Conversation not found.");
        }

        // check if user is a participant
        const isParticipant = conversation.participants.some(p => p.userId === userId);
        if (!isParticipant) {
            throw ApiError.forbidden("You are not a participant in this conversation.");
        }

        // check if user is in the workspace
        const isMember = await prisma.userOnWorkspace.findFirst({
            where: {
                userId,
                workspaceId: conversation.workspaceId,
            },
        });

        if (!isMember) {
            throw ApiError.forbidden("User not part of the workspace.");
        }

        // create the message
        const message = await prisma.message.create({
            data: {
                content,
                conversationId,
                userId,
            },
        });

        // handle mentions (only in group DMs)
        if (conversation.participants.length > 2) {
            await mentionService.handleMentions(content, message.id, conversation.workspaceId, userId);
        }

        // upload files and link to message
        if (uploadedFiles && uploadedFiles.length > 0) {
            const uploadedFileRecords = [];
            for (const file of uploadedFiles) {
                try {
                    const fileRecord = await fileService.uploadFile(file, userId, message.id);
                    uploadedFileRecords.push(fileRecord);
                } catch (uploadError) {
                    console.error(`Failed to upload file ${file.originalname} for message ${message.id}:`, uploadError);
                }
            }

            // لو عايز تضيفهم للرسالة المرتجعة
            // ممكن تستخدم spread للـ messageWithMentions
            (message as any).files = uploadedFileRecords;
        }

        // fetch message again with mentions
        const messageWithMentions = await prisma.message.findUnique({
            where: { id: message.id },
            include: {
                MessageMention: {
                    select: {
                        mentionedUserId: true,
                    },
                },
            },
        });

        if (!messageWithMentions) {
            throw ApiError.notFound("Message not found after creation.");
        }

        // optionally attach the uploaded files to the returned message
        if (uploadedFiles && uploadedFiles.length > 0) {
            (messageWithMentions as any).files = (message as any).files;
        }

        return messageWithMentions;
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
        //@ts-expect-error
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

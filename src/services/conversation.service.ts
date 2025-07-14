import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from './../utils/fillter';


export class ConversationService {
    async createConversation(userId: string, otherUserId: string, workspaceId: string) {
        if (userId === otherUserId) {
            throw ApiError.badRequest("Cannot create DM with yourself.");
        }

        // تأكد من وجود المستخدمين
        const users = await prisma.user.findMany({
            where: { id: { in: [userId, otherUserId] } },
            select: { id: true },
        });

        if (users.length !== 2) {
            throw ApiError.badRequest("One or both users do not exist.");
        }

        // تأكد من انضمامهم لنفس workspace
        const members = await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                userId: { in: [userId, otherUserId] },
            },
        });

        if (members.length !== 2) {
            throw ApiError.badRequest("Both users must be in the same workspace.");
        }

        // البحث عن محادثة موجودة
        const existing = await prisma.directMessageConversation.findMany({
            where: {
                workspaceId,
                participants: {
                    some: { userId },
                },
            },
            include: { participants: true },
        });

        const found = existing.find((conv) => {
            const participantIds = conv.participants.map((p) => p.userId);
            const expected = new Set([userId, otherUserId]);
            return participantIds.length === 2 && participantIds.every((id) => expected.has(id));
        });

        if (found) return found;

        // إنشاء محادثة جديدة
        const newConversation = await prisma.directMessageConversation.create({
            data: {
                workspaceId,
                participants: {
                    createMany: {
                        data: [
                            { userId },
                            { userId: otherUserId },
                        ],
                    },
                },
            },
            include: { participants: true },
        });

        return newConversation;
    }
    async createGroupConversation(userId: string, otherUserIds: string[], workspaceId: string) {
        // دمج الـ creator مع الباقيين مع إزالة التكرار
        const userIds = [...new Set([userId, ...otherUserIds])];

        if (userIds.length < 3) {
            throw ApiError.badRequest("Group DM must include at least 3 unique users.");
        }

        // تأكد إن كل المستخدمين موجودين
        const users = await prisma.user.findMany({
            where: { id: { in: userIds } },
            select: { id: true },
        });

        if (users.length !== userIds.length) {
            throw ApiError.badRequest("One or more users do not exist.");
        }

        // تأكد إنهم كلهم أعضاء في نفس الـ workspace
        const members = await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                userId: { in: userIds },
            },
        });

        if (members.length !== userIds.length) {
            throw ApiError.badRequest("All users must be members of the workspace.");
        }

        // التأكد من عدم وجود محادثة بنفس المشاركين
        const existingConversations = await prisma.directMessageConversation.findMany({
            where: { workspaceId },
            include: { participants: true },
        });

        const match = existingConversations.find((conv) => {
            const convSet = new Set(conv.participants.map((p) => p.userId));
            const inputSet = new Set(userIds);
            return convSet.size === inputSet.size && [...convSet].every(id => inputSet.has(id));
        });

        if (match) return match;

        // إنشاء المحادثة الجديدة
        const newConversation = await prisma.directMessageConversation.create({
            data: {
                workspaceId,
                participants: {
                    createMany: {
                        data: userIds.map((id) => ({ userId: id })),
                    },
                },
            },
            include: { participants: true },
        });

        return newConversation;
    }
    async getMyConversations(userId: string, workspaceId: string, query: any) {
        //@ts-expect-error
        const { where: filterWhere, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['participants.user.name'],// محتاج تعديل وتجربه
            filterableFields: [],
        });

        const conversations = await prisma.directMessageConversation.findMany({
            where: {
                workspaceId,
                participants: {
                    some: { userId },
                },
                ...filterWhere,
            },
            include: {
                participants: {
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
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
            },
            orderBy: orderBy.length ? orderBy : [{ updatedAt: 'desc' }],
            skip,
            take,
        });

        return conversations;
    }

    // delete conversaions  and get conversaionnot handeled yet.
}

export const conversationService = new ConversationService();

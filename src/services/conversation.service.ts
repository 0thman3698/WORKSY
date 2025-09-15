import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery, QueryParams } from './../utils/fillter';


export class ConversationService {
    async createConversation(userId: string, otherUserId: string, workspaceId: string) {
        if (userId === otherUserId) {
            throw ApiError.badRequest("Cannot create DM with yourself.");
        }

        const users = await prisma.user.findMany({
            where: { id: { in: [userId, otherUserId] } },
            select: { id: true },
        });

        if (users.length !== 2) {
            throw ApiError.badRequest("One or both users do not exist.");
        }

        const members = await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                userId: { in: [userId, otherUserId] },
            },
        });

        if (members.length !== 2) {
            throw ApiError.badRequest("Both users must be in the same workspace.");
        }

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
        const userIds = [...new Set([userId, ...otherUserIds])];

        if (userIds.length < 3) {
            throw ApiError.badRequest("Group DM must include at least 3 unique users.");
        }

        const users = await prisma.user.findMany({
            where: { id: { in: userIds } },
            select: { id: true },
        });

        if (users.length !== userIds.length) {
            throw ApiError.badRequest("One or more users do not exist.");
        }

        const members = await prisma.userOnWorkspace.findMany({
            where: {
                workspaceId,
                userId: { in: userIds },
            },
        });

        if (members.length !== userIds.length) {
            throw ApiError.badRequest("All users must be members of the workspace.");
        }

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
    async getMyConversations(userId: string, workspaceId: string, query: QueryParams) {
        const { filters, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: [],
            filterableFields: [],
        });

        const conversations = await prisma.directMessageConversation.findMany({
            where: {
                workspaceId,
                participants: {
                    some: { userId },
                },
                ...(filters || {}),
                ...(query.search
                    ? {
                        participants: {
                            some: {
                                user: {
                                    name: {
                                        contains: query.search,
                                        mode: "insensitive",
                                    },
                                },
                            },
                        },
                    }
                    : {}),
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
                    orderBy: { createdAt: "desc" },
                    take: 1,
                },
            },
            orderBy: orderBy || [{ updatedAt: "desc" }],
            skip,
            take,
        });

        return conversations;
    }


    // delete conversaions  and get conversaionnot handeled yet.
}

export const conversationService = new ConversationService();

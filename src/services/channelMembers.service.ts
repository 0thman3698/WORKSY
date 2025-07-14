import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { ChannelRole } from '@prisma/client';

export class ChannelMembersService {
    /**
     * Join a channel (reactivate if soft-deleted)
     */
    async joinChannel(channelId: string, userId: string) {
        const existingMember = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
        });

        if (existingMember && existingMember.deletedAt === null) {
            throw ApiError.badRequest("User already a member of this channel.");
        }

        if (existingMember && existingMember.deletedAt !== null) {
            return await prisma.userOnChannel.update({
                where: {
                    userId_channelId: {
                        userId,
                        channelId,
                    },
                },
                data: {
                    deletedAt: null,
                    role: ChannelRole.MEMBER,
                },
            });
        }

        return await prisma.userOnChannel.create({
            data: {
                userId,
                channelId,
            },
        });
    }

    /**
     * Leave a channel (soft delete)
     */
    async leaveChannel(channelId: string, userId: string) {
        const channel = await prisma.channel.findUnique({
            where: {
                id: channelId,
                deletedAt: null,
            },
            select: {
                ownerId: true,
            },
        });

        if (!channel) {
            throw ApiError.notFound("Channel not found or is inactive.");
        }

        if (channel.ownerId === userId) {
            throw ApiError.badRequest("Channel owner cannot leave their own channel.");
        }

        return await prisma.userOnChannel.update({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }

    /**
     * Get all active members in a channel
     */
    async getAllChannelMembers(channelId: string) {
        return await prisma.userOnChannel.findMany({
            where: {
                channelId,
                deletedAt: null,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }

    /**
     * Change a member's role (should be restricted via middleware to OWNER only)
     */
    async changeMemberRole(channelId: string, targetUserId: string, newRole: ChannelRole) {
        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId: targetUserId,
                    channelId,
                },
            },
        });

        if (!member || member.deletedAt) {
            throw ApiError.notFound("Member not found in this channel.");
        }

        return await prisma.userOnChannel.update({
            where: {
                userId_channelId: {
                    userId: targetUserId,
                    channelId,
                },
            },
            data: {
                role: newRole,
            },
        });
    }

    /**
     * Kick a member from the channel (soft delete)
     * Must be protected by middleware: OWNER or ADMIN only
     */
    async kickMember(channelId: string, targetUserId: string, currentUserId: string) {
        if (targetUserId === currentUserId) {
            throw ApiError.badRequest("You cannot kick yourself from the channel.");
        }

        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId: targetUserId,
                    channelId,
                },
            },
        });

        if (!member || member.deletedAt) {
            throw ApiError.notFound("Member not found in this channel.");
        }

        return await prisma.userOnChannel.update({
            where: {
                userId_channelId: {
                    userId: targetUserId,
                    channelId,
                },
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }

    /**
     * Transfer channel ownership to another active member
     * Must be protected by middleware: OWNER only
     */
    async transferChannelOwnership(channelId: string, newOwnerId: string) {
        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId: newOwnerId,
                    channelId,
                },
            },
        });

        if (!member || member.deletedAt) {
            throw ApiError.badRequest("New owner must be an active member of the channel.");
        }

        return await prisma.channel.update({
            where: { id: channelId },
            data: {
                ownerId: newOwnerId,
            },
        });
    }
}

export const channelMembersService = new ChannelMembersService();

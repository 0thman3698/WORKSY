import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { buildPrismaQuery } from './../utils/fillter';


export class ChannelMembersService {
    async joinChannel(channelId: string, workspaceId: string, userId: string) {

        const existingChannel = await prisma.channel.findUnique({
            where: { id: channelId }
        });
        if (!existingChannel) {
            throw ApiError.notFound("no channel found");
        }

        const existingMember = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
        });

        if (existingMember) {
            throw ApiError.badRequest('User already a member of this channel');
        }

        const newMember = await prisma.userOnChannel.create({
            data: {
                userId,
                channelId,
            }
        });

        return newMember;
    }

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
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        if (channel.ownerId === userId) {
            throw ApiError.badRequest('Channel owner cannot leave their own channel. Ownership must be transferred or the channel deleted.');
        }
        const updatedMembership = await prisma.userOnChannel.update({
            where: {
                userId_channelId: {
                    userId,
                    channelId
                }
            },
            data: {
                deletedAt: new Date(),
            }
        });

        return updatedMembership;
    }

    async getALLChannelMembers(channelId: string, userId: string) {

        const members = await prisma.userOnChannel.findMany({
            where: {
                channelId: channelId,
                deletedAt: null,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        });
        return members;
    }
}

export const channelMembersService = new ChannelMembersService();
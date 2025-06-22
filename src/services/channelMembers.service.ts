import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { buildPrismaQuery } from './../utils/fillter';

import { accessControlService } from "./accessControl.service";

export class ChannelMembersService {
    async joinChannel(channelId: string, workspaceId: string, userId: string) {

        const existingChannel = await prisma.channel.findUnique({
            where: { id: channelId }
        });
        if (!existingChannel) {
            throw ApiError.notFound("no channel found");
        }

        await accessControlService.checkIsMember(userId, workspaceId);

        const existingMember = await prisma.userOnChannels.findUnique({
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

        const newMember = await prisma.userOnChannels.create({
            data: {
                userId,
                channelId,
            }
        });

        return newMember;
    }

    async leaveChannel(channelId: string, workspaceId: string, userId: string) {

        const existingChannel = await prisma.channel.findUnique({
            where: { id: channelId }
        });
        if (!existingChannel) {
            throw ApiError.notFound("no channel found");
        }

        await accessControlService.checkIsMember(userId, workspaceId)

        const existingMember = await prisma.userOnChannels.findUnique({
            where: {
                userId_channelId: {
                    userId,
                    channelId,
                },
            },
        });

        if (!existingMember) {
            throw ApiError.badRequest('User is not a member of this channel');
        }

        const deleted = await prisma.userOnChannels.delete({
            where: {
                userId_channelId: {
                    userId,
                    channelId
                }
            }
        });
        return deleted;
    }

    async getALLChannelMembers(channelId: string, userId: string, query: any) {
        const existingChannel = await prisma.channel.findUnique({
            where: { id: channelId },
        });

        if (!existingChannel) {
            throw ApiError.notFound("no channel found");
        }

        const isInWorkspace = await prisma.userOnWorkspace.findUnique({
            where: {
                userId_workspaceId: {
                    userId,
                    workspaceId: existingChannel.workspaceId,
                },
            },
        });

        if (!isInWorkspace) {
            throw ApiError.badRequest("you are not member of this workspace");
        }

        const { where, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['name', 'email'],
            filterableFields: [],
        });

        const members = await prisma.userOnChannels.findMany({
            where: {
                channelId,
                user: Object.keys(where).length ? { is: where } : undefined,
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
            orderBy: orderBy?.user ? { user: orderBy.user } : undefined,
            skip,
            take,
        });

        return members;
    }


}

export const channelMembersService = new ChannelMembersService();
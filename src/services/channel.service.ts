import { createChannelSchemaType, updateChannelSchemaType } from '../validators/channel.validators';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { WorkspaceRole } from '@prisma/client';

//helper function
export const checkAccess = async (
    workspaceId: string,
    userId: string,
    allowedRoles: WorkspaceRole[] = [WorkspaceRole.ADMIN, WorkspaceRole.OWNER, WorkspaceRole.MEMBER]
): Promise<void> => {
    const membership = await prisma.userOnWorkspace.findUnique({
        where: {
            userId_workspaceId: {
                userId,
                workspaceId,
            },
        },
    });

    if (!membership) {
        throw ApiError.forbidden("User is not a member of this workspace.");
    }

    if (!allowedRoles.includes(membership.role)) {
        throw ApiError.forbidden("User does not have permission to perform this action.");
    }
};

export async function createChannel(
    channelData: createChannelSchemaType,
    workspaceId: string,
    userId: string,
) {
    await checkAccess(workspaceId, userId, [WorkspaceRole.ADMIN, WorkspaceRole.OWNER]);

    const existingChannel = await prisma.channel.findFirst({
        where: {
            name: channelData.name,
            workspaceId: workspaceId,
        },
    });

    if (existingChannel) {
        throw ApiError.badRequest('A channel with the same name already exists in this workspace.');
    }
    const newChannel = await prisma.channel.create({
        data: {
            name: channelData.name,
            description: channelData.description,
            workspaceId,
            isPublic: channelData.isPublic,
        },
    });

    return newChannel;
}

export async function getAllChannels(workspaceId: string, userId: string) {
    await checkAccess(workspaceId, userId);
    const channels = await prisma.channel.findMany({
        where: {
            workspaceId,
        },
    });

    return channels;
}

export async function getChannel(channelId: string, workspaceId: string, userId: string) {
    await checkAccess(workspaceId, userId);

    const channel = await prisma.channel.findFirst({
        where: {
            id: channelId,
            workspaceId: workspaceId,
        },
    });

    if (!channel) {
        throw ApiError.notFound('Channel not found');
    }

    return channel;
}
export async function updateChannel(channelData: updateChannelSchemaType, channelId: string, workspaceId: string, userId: string) {
    await checkAccess(workspaceId, userId, [WorkspaceRole.ADMIN, WorkspaceRole.OWNER]);

    const existingChannel = await prisma.channel.findFirst({
        where: {
            id: channelId,
            workspaceId,
        },
    });

    if (!existingChannel) {
        throw ApiError.notFound('Channel not found.');
    }

    if (channelData.name && channelData.name !== existingChannel.name) {
        const nameTaken = await prisma.channel.findFirst({
            where: {
                name: channelData.name,
                workspaceId,
                NOT: { id: channelId },
            },
        });

        if (nameTaken) {
            throw ApiError.badRequest('A channel with this name already exists in this workspace.');
        }
    }
    const updatedChannel = await prisma.channel.update({
        where: { id: channelId },
        data: channelData,
    });
    return updatedChannel
}

export async function deleteChannel(channelId: string, workspaceId: string, userId: string) {
    await checkAccess(workspaceId, userId, [WorkspaceRole.ADMIN, WorkspaceRole.OWNER]);

    const existingChannel = await prisma.channel.findFirst({
        where: {
            id: channelId,
            workspaceId,
        },
    });

    if (!existingChannel) {
        throw ApiError.notFound('Channel not found.');
    }
    await prisma.channel.delete({
        where: { id: channelId }
    })

    return;
}
export const channelService = {
    createChannel,
    getAllChannels,
    getChannel,
    updateChannel,
    deleteChannel
};

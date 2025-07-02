import prisma from '../config/db';
import { ApiError } from '../utils/apiError';

export class FileService {
    async uploadFile({
        file,
        userId,
        channelId,
        conversationId,
    }: {
        file: Express.Multer.File;
        userId: string;
        channelId?: string;
        conversationId?: string;
    }) {
        if (!file) {
            throw ApiError.badRequest('File is required');
        }

        if (!channelId && !conversationId) {
            throw ApiError.badRequest('channelId or conversationId is required');
        }

        const uploaded = await prisma.file.create({
            data: {
                name: file.originalname,
                type: file.mimetype,
                size: file.size,
                url: `/uploads/${file.filename}`,
                uploadedById: userId,
                channelId,
                conversationId,
            },
        });

        return uploaded;
    }

    async getFiles({
        channelId,
        conversationId,
        search,
        type,
    }: {
        channelId?: string;
        conversationId?: string;
        search?: string;
        type?: string;
    }) {
        if (!channelId && !conversationId) {
            throw ApiError.badRequest('channelId or conversationId is required');
        }

        return prisma.file.findMany({
            where: {
                deletedAt: null,
                ...(channelId && { channelId }),
                ...(conversationId && { conversationId }),
                ...(search && {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                }),
                ...(type && {
                    type: {
                        contains: type,
                        mode: 'insensitive',
                    },
                }),
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

    }

    async deleteFile(fileId: string, userId: string) {
        const file = await prisma.file.findUnique({ where: { id: fileId } });

        if (!file || file.deletedAt) {
            throw ApiError.notFound('File not found or already deleted');
        }

        const isOwner = file.uploadedById === userId;
        if (!isOwner) {
            throw ApiError.forbidden('You do not have permission to delete this file');
        }

        return prisma.file.update({
            where: { id: fileId },
            data: { deletedAt: new Date() },
        });
    }

    async getDownloadLink(fileId: string) {
        const file = await prisma.file.findUnique({
            where: { id: fileId },
        });

        if (!file || file.deletedAt) {
            throw ApiError.notFound('File not found');
        }

        return file.url;
    }
}

export const fileService = new FileService();

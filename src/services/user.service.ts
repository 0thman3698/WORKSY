import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { Role } from '@prisma/client';
import { buildPrismaQuery } from '../utils/fillter';
import { updateMeSchemaType, updateUserSchemaType } from '../validators/user.validators';


export class UserService {

    // ========================
    // 👤 Public User Functions
    // ========================
    async getCurrentUser(userId: string) {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
                deletedAt: null,
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                role: true,
                status: true,
                isVerified: true,
                createdAt: true,
            },
        });

        if (!user) {
            throw ApiError.notFound('User not found');
        }

        return user;
    }


    async getUserById(id: string) {
        const user = await prisma.user.findFirst({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!user) {
            throw ApiError.notFound('User not found');
        }

        return user;
    }

    async getUserByEmail(email: string) {
        const user = await prisma.user.findFirst({
            where: {
                email,
                deletedAt: null,
            },
        });

        if (!user) {
            throw ApiError.notFound('User not found');
        }

        return user;
    }
    async updateMe(userId: string, userData: updateMeSchemaType) {
        await this.getUserById(userId);

        const allowedFields = ['name', 'avatar'];

        const disallowedFields = Object.keys(userData).filter(
            (key) => !allowedFields.includes(key)
        );

        if (disallowedFields.length > 0) {
            throw ApiError.badRequest(
                `You are not allowed to update: ${disallowedFields.join(', ')}`
            );
        }

        const filteredData = Object.fromEntries(
            Object.entries(userData).filter(([key]) => allowedFields.includes(key))
        );

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: filteredData,
            select: {
                id: true,
                name: true,
                avatar: true,
                email: true,
                role: true,
                status: true,
                isVerified: true,
                createdAt: true,
            },
        });

        return updatedUser;
    }




    async softDeleteUser(id: string) {
        const user = await this.getUserById(id);

        const deletedUser = await prisma.user.update({
            where: { id },
            data: {
                deletedAt: new Date(),
            },
        });

        return deletedUser;
    }
    // ========================
    // 🔐 Admin-only Functions
    // ========================
    async getAllUsers(query: any) {
        const { filters, orderBy, skip, take } = buildPrismaQuery({
            query,
            searchableFields: ['name', 'email'],
            filterableFields: ['role'],
        });

        const users = await prisma.user.findMany({
            where: {
                deletedAt: null,
                ...(filters || {}),
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                isVerified: true,
            },
            orderBy: orderBy || { createdAt: 'desc' },
            skip,
            take,
        });

        return users;
    }


    async updateUserById(id: string, userData: updateUserSchemaType) {
        await this.getUserById(id);

        const updatedUser = await prisma.user.update({
            where: { id },
            data: userData,
        });

        return updatedUser;
    }

    async updateUserRole(
        currentUserId: string,
        targetUserId: string,
        newRole: Role
    ) {
        const currentUser = await this.getUserById(currentUserId);
        if (currentUser.role !== Role.APP_OWNER) {
            throw ApiError.forbidden('Only APP_OWNER can modify global user roles');
        }

        await this.getUserById(targetUserId);

        if (currentUserId === targetUserId) {
            throw ApiError.badRequest('You cannot change your own role');
        }

        const updatedUser = await prisma.user.update({
            where: { id: targetUserId },
            data: { role: newRole },
        });

        return updatedUser;
    }

}

export const userService = new UserService();

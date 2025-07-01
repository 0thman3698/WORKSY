import { ApiError } from './../utils/apiError';
import prisma from '../config/db';

export class NotificationService {
    async updateFcmToken(userId: string, fcmToken: string) {
        const result = await prisma.user.update({
            where: { id: userId },
            data: { fcmToken },
        });
        return result
    }
}

export const notificationService = new NotificationService();

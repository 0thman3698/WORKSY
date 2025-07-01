import { Server, Socket } from 'socket.io';
import { notificationService } from '../../services/notification.service';

export const initUserHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;

    socket.on('user:updateFcmToken', async ({ token }) => {
        try {
            await notificationService.updateFcmToken(userId, token);
            socket.emit('user:updateFcmToken:success', '✅ FCM token updated');
        } catch (err: any) {
            socket.emit('user:updateFcmToken:error', err.message || '❌ Failed to update token');
        }
    });
};

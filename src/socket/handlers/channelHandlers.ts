import { Server, Socket } from "socket.io";
import { messageService } from "../../services/message.service";
import { ApiError } from "../../utils/apiError";

export const initChannelHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user?.id; 

    if (!userId) {
        socket.emit('error', 'Authentication required for Socket.IO operations. Please log in.');
        socket.disconnect(true); 
        return;
    }

    socket.on('getAllMessages', async ({ channelId, limit, skip }: { channelId: string; limit?: number; skip?: number }) => {
        try {
            const messages = await messageService.getAllMessages(channelId, userId, limit, skip);
            socket.emit('allMessages', messages);
        } catch (err: any) {
            console.error(`Socket.IO getAllMessages error for user ${userId} in channel ${channelId}:`, err);
            if (err instanceof ApiError) {
                socket.emit('error', err.message);
            } else {
                socket.emit('error', 'Failed to retrieve messages. Please try again.');
            }
        }
    });

    socket.on('joinChannel', (channelId: string) => {
        socket.join(channelId);
        console.log(`User ${userId} joined Socket.IO room for channel ${channelId}`);

    });

    socket.on('sendMessage', async ({ channelId, content }: { channelId: string; content: string }) => {
        try {
            const message = await messageService.sendMessage(channelId, { content }, userId);
            io.to(channelId).emit('newMessage', message);
        } catch (err: any) {
            console.error(`Socket.IO sendMessage error for user ${userId} in channel ${channelId}:`, err);
            if (err instanceof ApiError) {
                socket.emit('error', err.message);
            } else {
                socket.emit('error', 'Failed to send message. Please try again.');
            }
        }
    });

    socket.on('typing', ({ channelId }: { channelId: string }) => {
        socket.to(channelId).emit('userTyping', { userId });
    });

    socket.on('stopTyping', ({ channelId }: { channelId: string }) => {
        socket.to(channelId).emit('userStoppedTyping', { userId });
    });

    socket.on('disconnect', () => {
        console.log(`User ${userId} disconnected from Socket.IO.`);
    });
};

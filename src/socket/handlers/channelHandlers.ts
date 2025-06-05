import { Server, Socket } from "socket.io";
import { messageService } from "../../services/message.service";

export const initChannelHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;

    socket.on('getAllMessages', async (channelId: string) => {
        const messages = await messageService.getAllMessages(channelId, userId);
        socket.emit('allMessages', messages);
    });

    socket.on('joinChannel', (channelId: string) => {
        socket.join(channelId);
        console.log(`User ${userId} joined channel ${channelId}`);
    });

    socket.on('sendMessage', async ({ channelId, content }) => {
        try {
            const message = await messageService.sendMessage(channelId, { content }, userId);
            io.to(channelId).emit('newMessage', message);
        } catch (err: any) {
            socket.emit('error', err.message || 'Something went wrong');
        }
    });

    socket.on('typing', ({ channelId }) => {
        socket.to(channelId).emit('userTyping', { userId });
    });

    socket.on('stopTyping', ({ channelId }) => {
        socket.to(channelId).emit('userStoppedTyping', { userId });
    });
};

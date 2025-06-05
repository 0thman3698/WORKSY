import { Server, Socket } from "socket.io";
import { dmService } from "../../services/dm.service";

export const initDirectMessageHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;

    socket.on('join:dm', (conversationId: string) => {
        socket.join(`dm:${conversationId}`);
        console.log(`User ${userId} joined DM ${conversationId}`);
    });

    socket.on('dm:send', async ({ conversationId, content }) => {
        try {
            const message = await dmService.sendMessage(conversationId, content, userId);
            io.to(`dm:${conversationId}`).emit('dm:newMessage', message);
        } catch (err: any) {
            socket.emit('dm:error', err.message || 'Something went wrong');
        }
    });

    socket.on('dm:typing', ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit('dm:userTyping', { userId });
    });

    socket.on('dm:stopTyping', ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit('dm:userStoppedTyping', { userId });
    });
};

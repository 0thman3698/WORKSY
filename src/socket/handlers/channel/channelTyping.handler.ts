import { Socket } from "socket.io";

export const initChannelTypingHandlers = (socket: Socket, userId: string) => {
    socket.on('typing', ({ channelId }) => {
        socket.to(channelId).emit('userTyping', { userId });
    });

    socket.on('stopTyping', ({ channelId }) => {
        socket.to(channelId).emit('userStoppedTyping', { userId });
    });
};

import { Server, Socket } from "socket.io";
import { initChannelMessageHandlers } from "./channelMessage.handler";
import { initChannelTypingHandlers } from "./channelTyping.handler";
import { initChannelCallHandlers } from "./channelCall.handler";
import { initChannelScreenShareHandlers } from "./channelScreenShare.handler";

export const initChannelHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user?.id;

    if (!userId) {
        socket.emit('error', 'Authentication required for channel operations. Please log in.');
        socket.disconnect(true);
        return;
    }

    initChannelMessageHandlers(io, socket, userId);
    initChannelTypingHandlers(socket, userId);
    initChannelCallHandlers(io, socket, userId);
    initChannelScreenShareHandlers(socket, userId);

    socket.on('disconnect', () => {
        socket.rooms.forEach(room => {
            if (room.startsWith("channel:") && room !== socket.id) {
                socket.to(room).emit("channel:call:end");
                socket.to(room).emit("channel:call:screenStopped", { fromUserId: userId });
                console.log(`User ${userId} disconnected, signaling call/screen end in room: ${room}`);
            }
        });
    });
};

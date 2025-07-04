import { Server, Socket } from "socket.io";

export const registerDMInCallMessageHandlers = (io: Server, socket: Socket, userId: string) => {
    socket.on("dm:call:inCallMessage", ({ conversationId, content }) => {
        if (!content || content.trim().length === 0) {
            socket.emit("dm:error", "In-call message cannot be empty.");
            return;
        }

        io.to(`dm:${conversationId}`).emit("dm:call:inCallNewMessage", {
            fromUserId: userId,
            content: content.trim(),
            timestamp: new Date().toISOString()
        });
    });
};

import { Server, Socket } from "socket.io";

export const registerDMCallHandlers = (io: Server, socket: Socket, userId: string) => {
    socket.on("dm:call:offer", ({ conversationId, offer }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:incomingOffer", { fromUserId: userId, offer });
    });

    socket.on("dm:call:answer", ({ conversationId, answer }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:answer", { fromUserId: userId, answer });
    });

    socket.on("dm:call:iceCandidate", ({ conversationId, candidate }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:iceCandidate", { candidate });
    });

    socket.on("dm:call:end", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:end");
    });

    socket.on("dm:call:busy", ({ toUserId }) => {
        io.to(toUserId).emit("dm:call:busy", { fromUserId: userId });
    });
};

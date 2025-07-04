import { Server, Socket } from "socket.io";

export const registerDMScreenShareHandlers = (io: Server, socket: Socket, userId: string) => {
    socket.on("dm:call:screenShareOffer", ({ conversationId, offer }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:incomingScreenShareOffer", { fromUserId: userId, offer });
    });

    socket.on("dm:call:screenShareAnswer", ({ conversationId, answer }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:screenShareAnswer", { fromUserId: userId, answer });
    });

    socket.on("dm:call:screenShareIceCandidate", ({ conversationId, candidate }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:screenShareIceCandidate", { candidate });
    });

    socket.on("dm:call:stopScreenShare", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:call:screenStopped", { fromUserId: userId });
    });
};

import { Server, Socket } from "socket.io";
import { registerDMMessageHandlers } from "./dmMessage.handler";
import { registerDMCallHandlers } from "./dmCall.handler";
import { registerDMScreenShareHandlers } from "./dmScreenShare.handler";
import { registerDMInCallMessageHandlers } from "./dmInCallMessage.handler";

export const initDirectMessageHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user?.id;
    if (!userId) {
        socket.emit("dm:error", "Authentication required");
        socket.disconnect(true);
        return;
    }

    registerDMMessageHandlers(io, socket, userId);
    registerDMCallHandlers(io, socket, userId);
    registerDMScreenShareHandlers(io, socket, userId);
    registerDMInCallMessageHandlers(io, socket, userId);

    socket.on("disconnect", () => {
        socket.rooms.forEach(room => {
            if (room.startsWith("dm:") && room !== socket.id) {
                socket.to(room).emit("dm:call:end");
                socket.to(room).emit("dm:call:screenStopped", { fromUserId: userId });
            }
        });
    });
};

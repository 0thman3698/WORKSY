import { Server, Socket } from "socket.io";
import { dmService } from "../../services/dm.service";
import { validateSocketData } from "../../utils/validateSocketData";
import {
    sendDMMessageSchema,
    editDMMessageSchema,
} from "../../validators/dm.validators";

export const initDirectMessageHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;

    socket.on("join:dm", (conversationId: string) => {
        socket.join(`dm:${conversationId}`);
        console.log(`User ${userId} joined DM ${conversationId}`);
    });

    socket.on("dm:send", async (data) => {
        const validData = validateSocketData(socket, sendDMMessageSchema, data, "dm:error");
        if (!validData) return;

        try {
            const { conversationId, content } = validData;
            const message = await dmService.sendDMMessage(content, conversationId, userId);
            io.to(`dm:${conversationId}`).emit("dm:newMessage", message);
        } catch (err: any) {
            socket.emit("dm:error", err.message || "Something went wrong");
        }
    });

    socket.on("dm:typing", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:userTyping", { userId });
    });

    socket.on("dm:stopTyping", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:userStoppedTyping", { userId });
    });

    socket.on("dm:getAll", async ({ conversationId, query }, callback) => {
        try {
            const messages = await dmService.getAllDMMessages(conversationId, userId, query);
            callback({ status: "success", data: messages });
        } catch (err: any) {
            callback({ status: "error", message: err.message || "Something went wrong" });
        }
    });

    socket.on("dm:message:delete", async (messageId: string) => {
        try {
            const deletedMessage = await dmService.deleteDMMessage(userId, messageId);
            const conversationId = deletedMessage.conversationId;

            if (conversationId) {
                io.to(`dm:${conversationId}`).emit("dm:message:deleted", { messageId });
            }

            socket.emit("dm:message:delete:success", deletedMessage);
        } catch (err: any) {
            socket.emit("dm:message:delete:error", { message: err.message });
        }
    });

    // ✅ حدث تعديل الرسالة
    socket.on("dm:message:edit", async (data) => {
        const validData = validateSocketData(socket, editDMMessageSchema, data, "dm:message:edit:error");
        if (!validData) return;

        try {
            const { messageId, newContent } = validData;
            const updatedMessage = await dmService.editDMMessage(userId, messageId, newContent);

            io.to(`dm:${updatedMessage.conversationId}`).emit("dm:message:edited", updatedMessage);

            socket.emit("dm:message:edit:success", updatedMessage);
        } catch (err: any) {
            socket.emit("dm:message:edit:error", { message: err.message });
        }
    });
};

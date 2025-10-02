import { Server, Socket } from "socket.io";
import { dmService } from "../../../services/dm.service";
import { validateSocketData } from "../../../utils/validateSocketData";
import { sendDMMessageSchema, editDMMessageSchema } from "../../../validators/dm.validators";
import { sendMentionNotification } from "../../utils/sendMentionNotification";

export const registerDMMessageHandlers = (io: Server, socket: Socket, userId: string) => {
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

            if (message.MessageMention?.length) {
                const mentionedUserIds = message.MessageMention.map(m => m.mentionedUserId);
                sendMentionNotification(io, mentionedUserIds, {
                    type: 'dm',
                    messageId: message.id,
                    content: message.content,
                    senderId: userId,
                    conversationId,
                });
            }
        } catch (err: any) {
            console.error(`dm:send error:`, err);
            socket.emit("dm:error", err.message || "Failed to send DM.");
        }
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
            const deleted = await dmService.deleteDMMessage(userId, messageId);
            io.to(`dm:${deleted.conversationId}`).emit("dm:message:deleted", { messageId });
            socket.emit("dm:message:delete:success", deleted);
        } catch (err: any) {
            socket.emit("dm:message:delete:error", { message: err.message });
        }
    });

    socket.on("dm:message:edit", async (data) => {
        const validData = validateSocketData(socket, editDMMessageSchema, data, "dm:message:edit:error");
        if (!validData) return;

        try {
            const { messageId, newContent } = validData;
            const updated = await dmService.editDMMessage(userId, messageId, newContent);
            io.to(`dm:${updated.conversationId}`).emit("dm:message:edited", updated);
            socket.emit("dm:message:edit:success", updated);
        } catch (err: any) {
            socket.emit("dm:message:edit:error", { message: err.message });
        }
    });

    socket.on("dm:typing", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:userTyping", { userId });
    });

    socket.on("dm:stopTyping", ({ conversationId }) => {
        socket.to(`dm:${conversationId}`).emit("dm:userStoppedTyping", { userId });
    });
};

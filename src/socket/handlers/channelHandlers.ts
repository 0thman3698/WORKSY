import { Server, Socket } from "socket.io";
import { channelMessageService } from "../../services/channelMessage.service";
import { ApiError } from "../../utils/apiError";
import { validateSocketData } from "../../utils/validateSocketData";
import {
    sendChannelMessageSchema,
    editChannelMessageSchema
} from "../../validators/channelMessage.validators";
import { sendMentionNotification } from "../utils/sendMentionNotification";

export const initChannelHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;
    if (!userId) {
        socket.emit('error', 'Authentication required for Socket.IO operations. Please log in.');
        socket.disconnect(true);
        return;
    }

    socket.on('getAllMessages', async (channelId: string, query = {}) => {
        try {
            const messages = await channelMessageService.getAllChannelMessages(channelId, userId, query);
            socket.emit('allMessages', messages);
        } catch (err: any) {
            console.error(`Socket.IO getAllMessages error for user ${userId} in channel ${channelId}:`, err);

            if (err instanceof ApiError) {
                socket.emit('error', err.message);
            }
        }
    });

    socket.on('joinChannel', (channelId: string) => {
        socket.join(channelId);
        console.log(`User ${userId} joined channel ${channelId}`);
    });

    socket.on('sendMessage', async (data) => {
        const validData = validateSocketData(socket, sendChannelMessageSchema, data, 'error');
        if (!validData) return;

        try {
            const { channelId, content } = validData;
            const message = await channelMessageService.sendChannelMessage(channelId, content, userId);
            io.to(channelId).emit('newMessage', message);

            if (message.MessageMention?.length) {
                const mentionedUserIds = message.MessageMention.map((m: any) => m.mentionedUserId);
                sendMentionNotification(io, mentionedUserIds, {
                    type: 'channel',
                    messageId: message.id,
                    content: message.content,
                    senderId: userId,
                    channelId,
                });
            }
        } catch (err: any) {
            console.error(`Socket.IO sendMessage error for user ${userId} in channel ${validData.channelId}:`, err);
            if (err instanceof ApiError) {
                socket.emit('error', err.message);
            } else {
                socket.emit('error', 'Failed to send message. Please try again.');
            }
        }
    });

    socket.on("editMessage", async (data) => {
        const validData = validateSocketData(socket, editChannelMessageSchema, data, 'error');
        if (!validData) return;

        try {
            const { messageId, newContent } = validData;
            const updated = await channelMessageService.editChannelMessage(userId, messageId, newContent);

            if (updated.channelId) {
                io.to(updated.channelId).emit("message:edited", updated);
            }

            socket.emit("message:edit:success", updated);
        } catch (err: any) {
            socket.emit("message:edit:error", { message: err.message });
        }
    });

    socket.on("message:delete", async (messageId: string) => {
        try {
            const result = await channelMessageService.deleteChannelMessage(userId, messageId);
            if (result.channelId) {
                io.to(result.channelId).emit("message:deleted", { messageId: result.id });
            }
            socket.emit("message:delete:success", result);
        } catch (err: any) {
            socket.emit("message:delete:error", { message: err.message });
        }
    });

    socket.on('typing', ({ channelId }) => {
        socket.to(channelId).emit('userTyping', { userId });
    });

    socket.on('stopTyping', ({ channelId }) => {
        socket.to(channelId).emit('userStoppedTyping', { userId });
    });
};

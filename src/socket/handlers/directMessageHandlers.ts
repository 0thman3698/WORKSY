import { Server, Socket } from "socket.io";
import { dmService } from "../../services/dm.service";
import { validateSocketData } from "../../utils/validateSocketData";
import {
    sendDMMessageSchema,
    editDMMessageSchema,
} from "../../validators/dm.validators";
import { sendMentionNotification } from "../utils/sendMentionNotification";
import { ApiError } from "../../utils/apiError";

export const initDirectMessageHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user?.id;
    if (!userId) {
        socket.emit('dm:error', 'Authentication required for DM operations. Please log in.');
        socket.disconnect(true);
        return;
    }
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
            console.error(`Socket.IO dm:send error for user ${userId} in DM ${validData.conversationId}:`, err);
            if (err instanceof ApiError) {
                socket.emit('dm:error', err.message);
            } else {
                socket.emit('dm:error', 'Failed to send DM. Please try again.');
            }
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
    // --- WebRTC Signaling Handlers (Voice/Video Call)
    socket.on('dm:call:offer', async ({ conversationId, offer }: { conversationId: string; offer: RTCSessionDescriptionInit }) => {
        try {
            // In a 1-on-1 DM
            socket.to(`dm:${conversationId}`).emit('dm:call:incomingOffer', { fromUserId: userId, offer });
            console.log(`User ${userId} sent call offer to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:offer error for user ${userId} in DM ${conversationId}:`, err);
            socket.emit('dm:error', 'Failed to send call offer.');
        }
    });

    socket.on('dm:call:answer', async ({ conversationId, answer }: { conversationId: string; answer: RTCSessionDescriptionInit }) => {
        try {
            // In a 1-on-1 DM, we broadcast to the room excluding the sender.
            socket.to(`dm:${conversationId}`).emit('dm:call:answer', { fromUserId: userId, answer });
            console.log(`User ${userId} sent call answer to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:answer error for user ${userId} in DM ${conversationId}:`, err);
            socket.emit('dm:error', 'Failed to send call answer.');
        }
    });

    socket.on('dm:call:iceCandidate', async ({ conversationId, candidate }: { conversationId: string; candidate: RTCIceCandidateInit }) => {
        try {
            // In a 1-on-1 DM, we broadcast to the room excluding the sender.
            socket.to(`dm:${conversationId}`).emit('dm:call:iceCandidate', { candidate });
            console.log(`User ${userId} sent ICE candidate to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:iceCandidate error for user ${userId} in DM ${conversationId}:`, err);
        }
    });

    socket.on('dm:call:end', ({ conversationId }: { conversationId: string }) => {
        try {
            // In a 1-on-1 DM, we broadcast to the room excluding the sender.
            socket.to(`dm:${conversationId}`).emit('dm:call:end');
            console.log(`User ${userId} ended call in DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:end error for user ${userId} in DM ${conversationId}:`, err);
        }
    });

    socket.on('dm:call:busy', ({ toUserId }: { toUserId: string }) => {
        try {
            io.to(toUserId).emit('dm:call:busy', { fromUserId: userId });
            console.log(`User ${userId} sent busy signal to ${toUserId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:busy error for user ${userId} to ${toUserId}:`, err);
        }
    });

    // --- Screen Sharing Signaling Handlers ---
    socket.on('dm:call:screenShareOffer', ({ conversationId, offer }: { conversationId: string; offer: RTCSessionDescriptionInit }) => {
        try {
            socket.to(`dm:${conversationId}`).emit('dm:call:incomingScreenShareOffer', { fromUserId: userId, offer });
            console.log(`User ${userId} sent screen share offer to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:screenShareOffer error for user ${userId} in DM ${conversationId}:`, err);
            socket.emit('dm:error', 'Failed to send screen share offer.');
        }
    });

    socket.on('dm:call:screenShareAnswer', ({ conversationId, answer }: { conversationId: string; answer: RTCSessionDescriptionInit }) => {
        try {
            socket.to(`dm:${conversationId}`).emit('dm:call:screenShareAnswer', { fromUserId: userId, answer });
            console.log(`User ${userId} sent screen share answer to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:screenShareAnswer error for user ${userId} in DM ${conversationId}:`, err);
            socket.emit('dm:error', 'Failed to send screen share answer.');
        }
    });

    socket.on('dm:call:screenShareIceCandidate', ({ conversationId, candidate }: { conversationId: string; candidate: RTCIceCandidateInit }) => {
        try {
            socket.to(`dm:${conversationId}`).emit('dm:call:screenShareIceCandidate', { candidate });
            console.log(`User ${userId} sent screen share ICE candidate to DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:screenShareIceCandidate error for user ${userId} in DM ${conversationId}:`, err);
        }
    });

    socket.on('dm:call:stopScreenShare', ({ conversationId }: { conversationId: string }) => {
        try {
            socket.to(`dm:${conversationId}`).emit('dm:call:screenStopped', { fromUserId: userId });
            console.log(`User ${userId} stopped screen sharing in DM ${conversationId}`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:stopScreenShare error for user ${userId} in DM ${conversationId}:`, err);
        }
    });

    // --- In-Call Messaging Handlers ---
    socket.on('dm:call:inCallMessage', ({ conversationId, content }: { conversationId: string; content: string }) => {
        try {
            if (!content || content.trim().length === 0) {
                socket.emit('dm:error', 'In-call message cannot be empty.');
                return;
            }
            io.to(`dm:${conversationId}`).emit('dm:call:inCallNewMessage', {
                fromUserId: userId,
                content: content.trim(),
                timestamp: new Date().toISOString()
            });
            console.log(`User ${userId} sent in-call message in DM ${conversationId}: "${content}"`);
        } catch (err: any) {
            console.error(`Socket.IO dm:call:inCallMessage error for user ${userId} in DM ${conversationId}:`, err);
            socket.emit('dm:error', 'Failed to send in-call message.');
        }
    });


    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`User ${userId} disconnected from Socket.IO (DM handlers).`);
        socket.rooms.forEach(room => {
            if (room.startsWith('dm:') && room !== socket.id) { // Check if it's a DM room and not the socket's own ID
                socket.to(room).emit('dm:call:end');
                socket.to(room).emit('dm:call:screenStopped', { fromUserId: userId });
                console.log(`User ${userId} disconnected, signaling call/screen end in room: ${room}`);
            }
        });
    });
};



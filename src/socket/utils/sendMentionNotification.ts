import { Server } from "socket.io";
import { getUserSocket } from "./userSocketStore";

interface MentionPayload {
    type: 'channel' | 'dm';
    messageId: string;
    content: string;
    senderId: string;
    channelId?: string;
    conversationId?: string;

}

export const sendMentionNotification = (
    io: Server,
    mentionedUserIds: string[],
    payload: MentionPayload
) => {
    mentionedUserIds.forEach((userId) => {
        const socketId = getUserSocket(userId);
        if (socketId) {
            io.to(socketId).emit("mention:notify", payload);
        }
    });
};

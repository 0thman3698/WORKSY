import { Server, Socket } from "socket.io";

export const initChannelCallHandlers = (io: Server, socket: Socket, userId: string) => {
    socket.on('channel:call:offer', ({ channelId, offer }) => {
        socket.to(channelId).emit('channel:call:incomingOffer', { fromUserId: userId, offer });
        console.log(`User ${userId} sent call offer to channel ${channelId}`);
    });

    socket.on('channel:call:answer', ({ channelId, answer }) => {
        socket.to(channelId).emit('channel:call:answer', { fromUserId: userId, answer });
        console.log(`User ${userId} sent call answer to channel ${channelId}`);
    });

    socket.on('channel:call:iceCandidate', ({ channelId, candidate }) => {
        socket.to(channelId).emit('channel:call:iceCandidate', { candidate });
        console.log(`User ${userId} sent ICE candidate to channel ${channelId}`);
    });

    socket.on('channel:call:end', ({ channelId }) => {
        socket.to(channelId).emit('channel:call:end');
        console.log(`User ${userId} ended call in channel ${channelId}`);
    });

    socket.on('channel:call:busy', ({ toUserId }) => {
        io.to(toUserId).emit('channel:call:busy', { fromUserId: userId });
        console.log(`User ${userId} sent busy signal to ${toUserId}`);
    });

    socket.on('channel:call:inCallMessage', ({ channelId, content }) => {
        if (!content || content.trim() === "") {
            socket.emit("channel:error", "In-call message cannot be empty.");
            return;
        }

        io.to(channelId).emit("channel:call:inCallNewMessage", {
            fromUserId: userId,
            content: content.trim(),
            timestamp: new Date().toISOString()
        });
    });
};

import { Socket } from "socket.io";

export const initChannelScreenShareHandlers = (socket: Socket, userId: string) => {
    socket.on('channel:call:screenShareOffer', ({ channelId, offer }) => {
        socket.to(channelId).emit('channel:call:incomingScreenShareOffer', { fromUserId: userId, offer });
        console.log(`User ${userId} sent screen share offer to channel ${channelId}`);
    });

    socket.on('channel:call:screenShareAnswer', ({ channelId, answer }) => {
        socket.to(channelId).emit('channel:call:screenShareAnswer', { fromUserId: userId, answer });
        console.log(`User ${userId} sent screen share answer to channel ${channelId}`);
    });

    socket.on('channel:call:screenShareIceCandidate', ({ channelId, candidate }) => {
        socket.to(channelId).emit('channel:call:screenShareIceCandidate', { candidate });
        console.log(`User ${userId} sent screen share ICE candidate to channel ${channelId}`);
    });

    socket.on('channel:call:stopScreenShare', ({ channelId }) => {
        socket.to(channelId).emit('channel:call:screenStopped', { fromUserId: userId });
        console.log(`User ${userId} stopped screen sharing in channel ${channelId}`);
    });
};

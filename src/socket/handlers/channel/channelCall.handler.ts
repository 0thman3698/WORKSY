import { Server, Socket } from "socket.io";

export const initChannelCallHandlers = (io: Server, socket: Socket, userId: string) => {
    // join with ack callback
    socket.on("channel:join", (payload: { channelId: string }, ack?: (res: any) => void) => {
        const { channelId } = payload;
        socket.join(channelId);
        console.log(`✅ User ${userId} joined channel ${channelId}`);
        if (typeof ack === "function") {
            ack({ ok: true });
        } else {
            // also emit back a confirmation event (optional)
            socket.emit("channel:joined", { channelId, ok: true });
        }
    });

    // Offer uses sdp (standard)
    socket.on("channel:call:offer", ({ channelId, sdp }: { channelId: string; sdp: any }) => {
        socket.to(channelId).emit("channel:call:incomingOffer", { fromUserId: userId, sdp });
        console.log(`User ${userId} sent call offer to channel ${channelId}`);
    });

    // Answer uses sdp
    socket.on("channel:call:answer", ({ channelId, sdp }: { channelId: string; sdp: any }) => {
        socket.to(channelId).emit("channel:call:incomingAnswer", { fromUserId: userId, sdp });
        console.log(`User ${userId} sent call answer to channel ${channelId}`);
    });

    // Candidate event name aligned with tests: channel:call:candidate
    socket.on("channel:call:candidate", ({ channelId, candidate }: { channelId: string; candidate: any }) => {
        socket.to(channelId).emit("channel:call:incomingCandidate", { fromUserId: userId, candidate });
        console.log(`User ${userId} sent ICE candidate to channel ${channelId}`);
    });

    socket.on("channel:call:end", ({ channelId }: { channelId: string }) => {
        socket.to(channelId).emit("channel:call:end");
        console.log(`User ${userId} ended call in channel ${channelId}`);
    });

    socket.on("channel:call:busy", ({ toUserId }: { toUserId: string }) => {
        io.to(toUserId).emit("channel:call:busy", { fromUserId: userId });
        console.log(`User ${userId} sent busy signal to ${toUserId}`);
    });

    socket.on("channel:call:inCallMessage", ({ channelId, content }: { channelId: string; content: string }) => {
        if (!content || content.trim() === "") {
            socket.emit("channel:error", "In-call message cannot be empty.");
            return;
        }

        io.to(channelId).emit("channel:call:inCallNewMessage", {
            fromUserId: userId,
            content: content.trim(),
            timestamp: new Date().toISOString(),
        });
    });
};

import { Server, Socket } from "socket.io";
import { reactionService } from "../../services/reaction.service";
import { validateSocketData } from '../../utils/validateSocketData';
import { reactionSchema } from '../../validators/reaction.validators';

export const initReactionHandlers = (io: Server, socket: Socket) => {
    const userId = socket.data.user.id;

    socket.on("reaction:addOrUpdate", async (data) => {
        const validData = validateSocketData(socket, reactionSchema, data, "reaction:error");
        if (!validData) return;

        try {
            const { messageId, emoji } = validData;
            const result = await reactionService.addOrUpdateReaction(messageId, emoji, userId);

            const reactions = await reactionService.getReactionsForMessage(messageId, userId);

            io.to(`dm:${messageId}`).emit("reaction:updated", {
                messageId,
                reactions,
            });
        } catch (err: any) {
            socket.emit("reaction:error", { message: err.message });
        }
    });

    socket.on("reaction:get", async (messageId: string) => {
        try {
            const reactions = await reactionService.getReactionsForMessage(messageId, userId);
            socket.emit("reaction:list", { messageId, reactions });
        } catch (err: any) {
            socket.emit("reaction:error", { message: err.message });
        }
    });
};
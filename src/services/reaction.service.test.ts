import { reactionService } from './reaction.service';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';

jest.mock('../config/db');

describe('ReactionService', () => {
    const userId = 'user-1';
    const messageId = 'msg-1';
    const emoji = '👍';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addOrUpdateReaction', () => {
        it('should add a new reaction if none exists', async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: messageId,
                channelId: 'ch-1',
                channel: { UserOnChannels: [{ userId }] },
            });
            (prisma.messageReaction.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.messageReaction.create as jest.Mock).mockResolvedValue({
                userId,
                messageId,
                emoji,
            });

            const result = await reactionService.addOrUpdateReaction(messageId, emoji, userId);

            expect(prisma.messageReaction.create).toHaveBeenCalledWith({
                data: { userId, messageId, emoji },
            });
            expect(result).toEqual({ userId, messageId, emoji });
        });

        it('should remove reaction if same emoji exists', async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: messageId,
                channelId: 'ch-1',
                channel: { UserOnChannels: [{ userId }] },
            });
            (prisma.messageReaction.findFirst as jest.Mock).mockResolvedValue({
                userId,
                messageId,
                emoji,
            });

            const result = await reactionService.addOrUpdateReaction(messageId, emoji, userId);

            expect(prisma.messageReaction.delete).toHaveBeenCalledWith({
                where: { userId_messageId_emoji: { userId, messageId, emoji } },
            });
            expect(result).toEqual({ message: 'Reaction removed' });
        });

        it('should replace reaction with a new emoji', async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: messageId,
                channelId: 'ch-1',
                channel: { UserOnChannels: [{ userId }] },
            });
            (prisma.messageReaction.findFirst as jest.Mock).mockResolvedValue({
                userId,
                messageId,
                emoji: '😂',
            });

            (prisma.messageReaction.create as jest.Mock).mockResolvedValue({
                userId,
                messageId,
                emoji,
            });

            const result = await reactionService.addOrUpdateReaction(messageId, emoji, userId);

            expect(prisma.messageReaction.delete).toHaveBeenCalledWith({
                where: { userId_messageId_emoji: { userId, messageId, emoji: '😂' } },
            });
            expect(prisma.messageReaction.create).toHaveBeenCalledWith({
                data: { userId, messageId, emoji },
            });
            expect(result).toEqual({ userId, messageId, emoji });
        });
    });

    describe('getReactionsForMessage', () => {
        it('should return reactions if user can view message', async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: messageId,
                channelId: 'ch-1',
                channel: { UserOnChannels: [{ userId }] },
            });
            (prisma.messageReaction.findMany as jest.Mock).mockResolvedValue([
                { emoji: '👍', user: { id: userId, name: 'John', avatar: 'x.png' } },
            ]);

            const reactions = await reactionService.getReactionsForMessage(messageId, userId);

            expect(prisma.messageReaction.findMany).toHaveBeenCalledWith({
                where: { messageId },
                select: {
                    emoji: true,
                    user: { select: { id: true, name: true, avatar: true } },
                },
            });
            expect(reactions).toEqual([
                { emoji: '👍', user: { id: userId, name: 'John', avatar: 'x.png' } },
            ]);
        });

        it('should throw if message not found', async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                reactionService.getReactionsForMessage(messageId, userId)
            ).rejects.toThrow(ApiError.notFound('Message not found').message);
        });
    });
    // afterAll(async () => {
    //     await prisma.$disconnect();
    // })
});

import { mentionService } from './mention.service';
import prisma from '../config/db';
import { messaging } from '../config/firebase/firebase';
import { extractMentions } from '../utils/extractMention';

jest.mock('../config/db');
jest.mock('../config/firebase/firebase', () => ({
    messaging: { send: jest.fn() }
}));
jest.mock('../utils/extractMention');

describe('MentionService', () => {
    const messageId = 'msg-1';
    const workspaceId = 'ws-1';
    const userId = 'user-1';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create mentions and send notifications', async () => {
        // mock extractMentions
        (extractMentions as jest.Mock).mockReturnValue(['@john', '@doe']);

        // mock prisma.user.findMany
        (prisma.user.findMany as jest.Mock).mockResolvedValue([
            { id: 'u2', name: 'john', fcmToken: 'token1' },
            { id: 'u3', name: 'doe', fcmToken: null },
        ]);

        // mock prisma.messageMention.createMany
        (prisma.messageMention.createMany as jest.Mock).mockResolvedValue({ count: 2 });

        // mock messaging.send
        (messaging.send as jest.Mock).mockResolvedValue('sent');

        const result = await mentionService.handleMentions('hello @john @doe', messageId, workspaceId, userId);

        // check extractMentions called
        expect(extractMentions).toHaveBeenCalledWith('hello @john @doe');

        // check DB query
        expect(prisma.user.findMany).toHaveBeenCalledWith({
            where: {
                name: { in: ['john', 'doe'] },
                id: { not: userId },
                workspaces: { some: { workspaceId } },
            },
        });

        // check mentions creation
        expect(prisma.messageMention.createMany).toHaveBeenCalledWith({
            data: [
                { messageId, mentionedUserId: 'u2' },
                { messageId, mentionedUserId: 'u3' },
            ],
        });

        // check notification sent only for users with fcmToken
        expect(messaging.send).toHaveBeenCalledWith(expect.objectContaining({
            token: 'token1',
            notification: {
                title: '📣 You were mentioned!',
                body: 'john, doe mentioned in a message',
            },
            data: { type: 'mention', messageId, workspaceId },
        }));

        // check return value
        expect(result).toEqual([
            { id: 'u2', name: 'john', fcmToken: 'token1' },
            { id: 'u3', name: 'doe', fcmToken: null },
        ]);
    });

    it('should return empty array if no users found', async () => {
        (extractMentions as jest.Mock).mockReturnValue(['@ghost']);
        (prisma.user.findMany as jest.Mock).mockResolvedValue([]);

        const result = await mentionService.handleMentions('hello @ghost', messageId, workspaceId, userId);

        expect(prisma.messageMention.createMany).not.toHaveBeenCalled();
        expect(messaging.send).not.toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});

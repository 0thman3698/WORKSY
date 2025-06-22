import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { buildPrismaQuery } from '../utils/fillter';
import { extractMentions } from '../utils/extractMention';


export class MentionService {
    async handleMentions(content: string, messageId: string, workspaceId: string) {
        const usernames = extractMentions(content); // ['@mohamed']
        const cleanNames = usernames.map((name) => name.replace('@', ''));

        const users = await prisma.user.findMany({
            where: {
                name: { in: cleanNames },
                workspaces: { some: { workspaceId } },
            },
        });

        if (users.length > 0) {
            await prisma.messageMention.createMany({
                data: users.map((user) => ({
                    messageId,
                    mentionedUserId: user.id,
                })),
            });
        }

        return users; // ممكن تستخدمهم تبعت إشعارات أو socket
    }
}
export const mentionService = new MentionService();

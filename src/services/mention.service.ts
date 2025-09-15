import { messaging } from '../config/firebase/firebase';
import prisma from '../config/db';
import { extractMentions } from '../utils/extractMention';

export class MentionService {
    async handleMentions(content: string, messageId: string, workspaceId: string, userId: string) {
        const usernames = extractMentions(content);
        const cleanNames = usernames.map((name) => name.replace('@', ''));

        const users = await prisma.user.findMany({
            where: {
                name: { in: cleanNames },
                id: { not: userId },
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

            const notifyPromises = users
                .filter((user) => user.fcmToken)
                .map((user) =>
                    messaging.send({
                        token: user.fcmToken!,
                        notification: {
                            title: '📣 You were mentioned!',
                            body: `${cleanNames.join(', ')} mentioned in a message`,
                        },
                        data: {
                            type: 'mention',
                            messageId,
                            workspaceId,
                        },
                    })
                );

            await Promise.allSettled(notifyPromises);
        }
        return users;
    }
}

export const mentionService = new MentionService();

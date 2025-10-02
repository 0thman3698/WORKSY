// src/__tests__/integration/mention.service.test.ts
import prisma from "../../config/db";
import { mentionService } from "../../services/mention.service";
import { cleanupDb } from "../../utils/cleanup";

// mock firebase messaging
jest.mock("../../config/firebase/firebase", () => {
    return {
        messaging: {
            send: jest.fn().mockResolvedValue("mocked-message-id"),
        },
    };
});

import { messaging } from "../../config/firebase/firebase";

describe("MentionService Integration", () => {
    let workspace: any;
    let dmConversation: any;
    let author: any;
    let mentionedUser: any;
    let message: any;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        author = await prisma.user.create({
            data: {
                email: "author@example.com",
                password: "pwd",
                name: "AuthorUser",
            },
        });

        mentionedUser = await prisma.user.create({
            data: {
                email: "mentioned@example.com",
                password: "pwd",
                name: "MentionedUser",
                fcmToken: "fake-fcm-token",
            },
        });

        workspace = await prisma.workspace.create({
            data: {
                name: "Mention Workspace",
                slug: `mention-ws-${Date.now()}`,
                ownerId: author.id,
                members: {
                    create: [
                        { userId: author.id, role: "OWNER" },
                        { userId: mentionedUser.id, role: "MEMBER" },
                    ],
                },
            },
        });

        dmConversation = await prisma.directMessageConversation.create({
            data: {
                workspaceId: workspace.id,
                participants: {
                    create: [{ userId: author.id }, { userId: mentionedUser.id }],
                },
            },
        });

        message = await prisma.message.create({
            data: {
                conversationId: dmConversation.id,
                userId: author.id,
                content: "Hello @MentionedUser 👋",
            },
        });
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
    });

    it("should detect mention, create DB entry, and send notification", async () => {
        const result = await mentionService.handleMentions(
            message.content,
            message.id,
            workspace.id,
            author.id
        );

        // 1. service should return mentioned users
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(mentionedUser.id);

        // 2. check DB entry created
        const mentions = await prisma.messageMention.findMany({
            where: { messageId: message.id },
        });
        expect(mentions.length).toBe(1);
        expect(mentions[0].mentionedUserId).toBe(mentionedUser.id);

        // 3. check firebase notification sent
        expect(messaging.send).toHaveBeenCalledTimes(1);
        expect(messaging.send).toHaveBeenCalledWith(
            expect.objectContaining({
                token: "fake-fcm-token",
                notification: expect.objectContaining({
                    title: expect.any(String),
                    body: expect.stringContaining("mentioned"),
                }),
                data: expect.objectContaining({
                    type: "mention",
                    messageId: message.id,
                    workspaceId: workspace.id,
                }),
            })
        );
    });

    it("should skip when no mentions found", async () => {
        const noMentionMessage = await prisma.message.create({
            data: {
                conversationId: dmConversation.id,
                userId: author.id,
                content: "No mentions here",
            },
        });

        const result = await mentionService.handleMentions(
            noMentionMessage.content,
            noMentionMessage.id,
            workspace.id,
            author.id
        );

        expect(result.length).toBe(0);

        const mentions = await prisma.messageMention.findMany({
            where: { messageId: noMentionMessage.id },
        });
        expect(mentions.length).toBe(0);

        expect(messaging.send).toHaveBeenCalledTimes(0); // still only from previous test
    });
});

import { conversationService } from "../services/conversation.service";
import prisma from "../config/db";
import { ApiError } from "../utils/apiError";

jest.mock("../config/db");

describe("ConversationService", () => {
    const userId = "u1";
    const otherUserId = "u2";
    const workspaceId = "ws1";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("createConversation", () => {
        it("should throw if user creates DM with himself", async () => {
            await expect(
                conversationService.createConversation(userId, userId, workspaceId)
            ).rejects.toThrow("Cannot create DM with yourself.");
        });

        it("should throw if one or both users do not exist", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }]);

            await expect(
                conversationService.createConversation(userId, otherUserId, workspaceId)
            ).rejects.toThrow("One or both users do not exist.");
        });

        it("should throw if users not in same workspace", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([{ userId }]);

            await expect(
                conversationService.createConversation(userId, otherUserId, workspaceId)
            ).rejects.toThrow("Both users must be in the same workspace.");
        });

        it("should return existing conversation if found", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([{ userId }, { userId: otherUserId }]);
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([
                { id: "c1", participants: [{ userId }, { userId: otherUserId }] },
            ]);

            const res = await conversationService.createConversation(userId, otherUserId, workspaceId);

            expect(res).toEqual(expect.objectContaining({ id: "c1" }));
        });

        it("should create new conversation if not existing", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([{ userId }, { userId: otherUserId }]);
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([]);
            (prisma.directMessageConversation.create as jest.Mock).mockResolvedValue({
                id: "newConv",
                participants: [{ userId }, { userId: otherUserId }],
            });

            const res = await conversationService.createConversation(userId, otherUserId, workspaceId);

            expect(prisma.directMessageConversation.create).toHaveBeenCalled();
            expect(res).toEqual(expect.objectContaining({ id: "newConv" }));
        });
    });

    describe("createGroupConversation", () => {
        it("should throw if less than 3 unique users", async () => {
            await expect(
                conversationService.createGroupConversation(userId, [otherUserId], workspaceId)
            ).rejects.toThrow("Group DM must include at least 3 unique users.");
        });

        it("should throw if some users do not exist", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }]);

            await expect(
                conversationService.createGroupConversation(userId, [otherUserId, "u3"], workspaceId)
            ).rejects.toThrow("One or more users do not exist.");
        });

        it("should throw if not all users in workspace", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }, { id: "u3" }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([{ userId }, { userId: otherUserId }]);

            await expect(
                conversationService.createGroupConversation(userId, [otherUserId, "u3"], workspaceId)
            ).rejects.toThrow("All users must be members of the workspace.");
        });

        it("should return existing group conversation if found", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }, { id: "u3" }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([
                { userId }, { userId: otherUserId }, { userId: "u3" },
            ]);
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([
                { id: "g1", participants: [{ userId }, { userId: otherUserId }, { userId: "u3" }] },
            ]);

            const res = await conversationService.createGroupConversation(userId, [otherUserId, "u3"], workspaceId);

            expect(res).toEqual(expect.objectContaining({ id: "g1" }));
        });

        it("should create new group conversation if not existing", async () => {
            (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: userId }, { id: otherUserId }, { id: "u3" }]);
            (prisma.userOnWorkspace.findMany as jest.Mock).mockResolvedValue([
                { userId }, { userId: otherUserId }, { userId: "u3" },
            ]);
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([]);
            (prisma.directMessageConversation.create as jest.Mock).mockResolvedValue({
                id: "newGroup",
                participants: [{ userId }, { userId: otherUserId }, { userId: "u3" }],
            });

            const res = await conversationService.createGroupConversation(userId, [otherUserId, "u3"], workspaceId);

            expect(prisma.directMessageConversation.create).toHaveBeenCalled();
            expect(res).toEqual(expect.objectContaining({ id: "newGroup" }));
        });
    });

    describe("getMyConversations", () => {
        it("should return conversations with last message", async () => {
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([
                {
                    id: "c1",
                    participants: [{ user: { id: "u1", name: "John", avatar: "x.png" } }],
                    messages: [{ id: "m1", content: "Hello" }],
                },
            ]);

            const res = await conversationService.getMyConversations(userId, workspaceId, {});

            expect(res).toHaveLength(1);
            expect(res[0]).toHaveProperty("messages");
        });

        it("should apply search filter", async () => {
            (prisma.directMessageConversation.findMany as jest.Mock).mockResolvedValue([]);

            await conversationService.getMyConversations(userId, workspaceId, { search: "john" });

            expect(prisma.directMessageConversation.findMany).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.objectContaining({
                        participants: expect.objectContaining({
                            some: expect.objectContaining({
                                user: expect.objectContaining({
                                    name: expect.objectContaining({
                                        contains: "john",
                                        mode: "insensitive",
                                    }),
                                }),
                            }),
                        }),
                    }),
                })
            );
        });
    });
});

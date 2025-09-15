import { dmService } from "./dm.service";
import prisma from "../config/db";
import { mentionService } from "./mention.service";
import { fileService } from "./file.service";

jest.mock("../config/db");

jest.mock("../services/mention.service", () => ({
    mentionService: { handleMentions: jest.fn() },
}));

jest.mock("../services/file.service", () => ({
    fileService: { uploadFile: jest.fn() },
}));

describe("DmService", () => {
    const userId = "user1";
    const conversationId = "conv1";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("sendDMMessage", () => {
        it("should throw if conversation not found", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                dmService.sendDMMessage("hello", conversationId, userId)
            ).rejects.toThrow("Conversation not found.");
        });

        it("should throw if user not participant", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue({
                id: conversationId,
                participants: [{ userId: "otherUser" }],
                workspace: { members: [] },
                workspaceId: "ws1",
            });

            await expect(
                dmService.sendDMMessage("hello", conversationId, userId)
            ).rejects.toThrow("You are not a participant in this conversation.");
        });

        it("should create message and handle mentions", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue({
                id: conversationId,
                participants: [{ userId }, { userId: "u2" }, { userId: "u3" }],
                workspaceId: "ws1",
                workspace: { members: [] },
            });

            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "membership" });
            (prisma.message.create as jest.Mock).mockResolvedValue({ id: "msg1", content: "hello" });
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "msg1", content: "hello" });

            const res = await dmService.sendDMMessage("hello", conversationId, userId);

            expect(prisma.message.create).toHaveBeenCalled();
            expect(mentionService.handleMentions).toHaveBeenCalled();
            expect(res).toEqual(expect.objectContaining({ id: "msg1" }));
        });

        it("should upload files if provided", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue({
                id: conversationId,
                participants: [{ userId }],
                workspaceId: "ws1",
                workspace: { members: [] },
            });

            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "membership" });
            (prisma.message.create as jest.Mock).mockResolvedValue({ id: "msg1", content: "hello" });
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "msg1", content: "hello" });
            (fileService.uploadFile as jest.Mock).mockResolvedValue({ id: "file1", name: "test.png" });

            const file = { originalname: "test.png" } as Express.Multer.File;

            const res = await dmService.sendDMMessage("hello", conversationId, userId, [file]);

            expect(fileService.uploadFile).toHaveBeenCalled();
            expect(res).toHaveProperty("files");
        });
    });

    describe("getAllDMMessages", () => {
        it("should throw if conversation not found", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                dmService.getAllDMMessages(conversationId, userId, {})
            ).rejects.toThrow("Conversation not found.");
        });

        it("should return messages", async () => {
            (prisma.directMessageConversation.findUnique as jest.Mock).mockResolvedValue({
                id: conversationId,
                participants: [{ userId }],
                workspaceId: "ws1",
                workspace: { members: [] },
            });

            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "membership" });
            (prisma.message.findMany as jest.Mock).mockResolvedValue([{ id: "m1", content: "hi" }]);

            const res = await dmService.getAllDMMessages(conversationId, userId, {});
            expect(res).toEqual([{ id: "m1", content: "hi" }]);
        });
    });

    describe("editDMMessage", () => {
        it("should throw if message not found", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                dmService.editDMMessage(userId, "msg1", "new content")
            ).rejects.toThrow("Message not found or deleted.");
        });

        it("should throw if user is not owner", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: "msg1",
                userId: "otherUser",
            });

            await expect(
                dmService.editDMMessage(userId, "msg1", "new content")
            ).rejects.toThrow("You can only edit your own messages.");
        });

        it("should update message", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: "msg1",
                userId,
            });

            (prisma.message.update as jest.Mock).mockResolvedValue({ id: "msg1", content: "updated" });

            const res = await dmService.editDMMessage(userId, "msg1", "updated");

            expect(res).toEqual({ id: "msg1", content: "updated" });
        });
    });

    describe("deleteDMMessage", () => {
        it("should throw if message not found", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                dmService.deleteDMMessage(userId, "msg1")
            ).rejects.toThrow("Message not found or already deleted.");
        });

        it("should throw if user is not owner", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: "msg1",
                userId: "otherUser",
            });

            await expect(
                dmService.deleteDMMessage(userId, "msg1")
            ).rejects.toThrow("You can only delete your own messages.");
        });

        it("should mark message as deleted", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({
                id: "msg1",
                userId,
            });

            (prisma.message.update as jest.Mock).mockResolvedValue({
                id: "msg1",
                userId,
                conversationId,
                deletedAt: new Date(),
            });

            const res = await dmService.deleteDMMessage(userId, "msg1");

            expect(res).toHaveProperty("messageId", "msg1");
            expect(res).toHaveProperty("conversationId", conversationId);
        });
    });
});

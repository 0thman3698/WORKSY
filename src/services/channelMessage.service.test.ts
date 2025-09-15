import { ChannelMessageService } from "../services/channelMessage.service";
import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { mentionService } from "../services/mention.service";
import { fileService } from "../services/file.service";

jest.mock("../config/db");

jest.mock("../services/mention.service", () => ({
    mentionService: { handleMentions: jest.fn() },
}));

jest.mock("../services/file.service", () => ({
    fileService: { uploadFile: jest.fn() },
}));

const service = new ChannelMessageService();

describe("ChannelMessageService", () => {
    afterEach(() => jest.clearAllMocks());

    describe("sendChannelMessage", () => {
        it("should send a message successfully without files", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({
                id: "ch1",
                workspaceId: "ws1",
                deletedAt: null,
            });
            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "u1" });
            (prisma.message.create as jest.Mock).mockResolvedValue({ id: "m1", content: "hello" });
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", content: "hello", MessageMention: [] });

            const res = await service.sendChannelMessage("ch1", "hello", "u1");
            expect(res).toMatchObject({ id: "m1", content: "hello" });
            expect(mentionService.handleMentions).toHaveBeenCalled();
        });

        it("should throw if channel not found", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(service.sendChannelMessage("ch1", "hi", "u1")).rejects.toThrow(ApiError);
        });

        it("should upload files if provided", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({
                id: "ch1",
                workspaceId: "ws1",
                deletedAt: null,
            });
            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "u1" });
            (prisma.message.create as jest.Mock).mockResolvedValue({ id: "m1", content: "with file" });
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", content: "with file", MessageMention: [] });
            (fileService.uploadFile as jest.Mock).mockResolvedValue({ id: "f1", name: "file.png" });

            const fileMock = { originalname: "file.png" } as Express.Multer.File;
            const res = await service.sendChannelMessage("ch1", "msg", "u1", [fileMock]);

            expect(fileService.uploadFile).toHaveBeenCalled();
            expect((res as any).files).toHaveLength(1);
        });
    });

    describe("getAllChannelMessages", () => {
        it("should return messages for public channel", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({
                id: "ch1",
                workspaceId: "ws1",
                isPublic: true,
                deletedAt: null,
            });
            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "u1" });
            (prisma.message.findMany as jest.Mock).mockResolvedValue([{ id: "m1", content: "hello" }]);

            const res = await service.getAllChannelMessages("ch1", "u1", {});
            expect(res).toHaveLength(1);
            expect(prisma.message.findMany).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Object),
                    orderBy: [{ createdAt: "asc" }],
                    skip: 0,
                    take: 10,
                })
            );
        });

        it("should throw if not workspace member", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ id: "ch1", workspaceId: "ws1", isPublic: true, deletedAt: null });
            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue(null);

            await expect(service.getAllChannelMessages("ch1", "u1", {})).rejects.toThrow(ApiError);
        });

        it("should throw if private channel and not member", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ id: "ch1", workspaceId: "ws1", isPublic: false, deletedAt: null });
            (prisma.userOnWorkspace.findFirst as jest.Mock).mockResolvedValue({ id: "u1" });
            (prisma.userOnChannel.findFirst as jest.Mock).mockResolvedValue(null);

            await expect(service.getAllChannelMessages("ch1", "u1", {})).rejects.toThrow(ApiError);
        });
    });

    describe("editChannelMessage", () => {
        it("should edit own message", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", userId: "u1", channelId: "ch1" });
            (prisma.message.update as jest.Mock).mockResolvedValue({ id: "m1", content: "edited", isEdited: true });

            const res = await service.editChannelMessage("u1", "m1", "edited");
            expect(res).toMatchObject({ content: "edited", isEdited: true });
        });

        it("should forbid editing others' messages", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", userId: "u2", channelId: "ch1" });

            await expect(service.editChannelMessage("u1", "m1", "edited")).rejects.toThrow(ApiError);
        });
    });

    describe("deleteChannelMessage", () => {
        it("should delete own message", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", userId: "u1", channelId: "ch1" });
            (prisma.message.update as jest.Mock).mockResolvedValue({ id: "m1", deletedAt: new Date() });

            const res = await service.deleteChannelMessage("u1", "m1");
            expect(res).toHaveProperty("deletedAt");
        });

        it("should forbid deleting others' messages", async () => {
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ id: "m1", userId: "u2", channelId: "ch1" });

            await expect(service.deleteChannelMessage("u1", "m1")).rejects.toThrow(ApiError);
        });
    });
});

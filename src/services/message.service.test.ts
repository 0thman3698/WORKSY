import { messageService } from "../services/message.service";
import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { z } from "zod";

jest.mock("../config/db");

describe("MessageService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("sendMessage", () => {
        const channelId = "channel1";
        const userId = "user1";
        const validMessageData = { content: "Hello world" };

        it("should throw validation error if schema fails", async () => {
            const invalidData = { wrong: "field" } as any;

            await expect(
                messageService.sendMessage(channelId, invalidData, userId)
            ).rejects.toThrow("Validation failed: Content is required");

        });

        it("should throw if channel not found", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                messageService.sendMessage(channelId, validMessageData, userId)
            ).rejects.toThrow(ApiError.notFound("Channel not found or is inactive."));
        });

        it("should throw if user is not a member", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ id: channelId });
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                messageService.sendMessage(channelId, validMessageData, userId)
            ).rejects.toThrow(ApiError.forbidden("You are not an active member of this channel."));
        });

        it("should create and return message if valid", async () => {
            const mockChannel = { id: channelId };
            const mockMember = { userId, channelId };
            const mockMessage = {
                id: "msg1",
                content: validMessageData.content,
                userId,
                channelId,
                user: { id: userId, name: "John Doe" },
            };

            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(mockChannel);
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(mockMember);
            (prisma.message.create as jest.Mock).mockResolvedValue(mockMessage);

            const result = await messageService.sendMessage(channelId, validMessageData, userId);

            expect(result).toEqual(mockMessage);
            expect(prisma.message.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({ content: validMessageData.content }),
                    include: expect.any(Object),
                })
            );
        });
    });

    describe("getAllMessages", () => {
        const channelId = "channel1";
        const userId = "user1";

        it("should throw if channel not found", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                messageService.getAllMessages(channelId, userId)
            ).rejects.toThrow(ApiError.notFound("Channel not found or is inactive."));
        });

        it("should throw if user is not a member", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ id: channelId });
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                messageService.getAllMessages(channelId, userId)
            ).rejects.toThrow(ApiError.forbidden("You are not an active member of this channel."));
        });

        it("should return messages if valid", async () => {
            const mockChannel = { id: channelId };
            const mockMember = { userId, channelId };
            const mockMessages = [
                { id: "m1", content: "Hi", user: { id: userId, name: "John" } },
                { id: "m2", content: "Hello", user: { id: userId, name: "John" } },
            ];

            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(mockChannel);
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(mockMember);
            (prisma.message.findMany as jest.Mock).mockResolvedValue(mockMessages);

            const result = await messageService.getAllMessages(channelId, userId);

            expect(result).toEqual(mockMessages);
            expect(prisma.message.findMany).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.objectContaining({ channelId }),
                    orderBy: { createdAt: "asc" },
                })
            );
        });
    });
});

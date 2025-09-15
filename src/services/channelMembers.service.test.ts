import { channelMembersService } from "../services/channelMembers.service";
import prisma from "../config/db";
import { ChannelRole } from "@prisma/client";

jest.mock("../config/db");

describe("ChannelMembersService", () => {
    const channelId = "ch-1";
    const userId = "user-1";
    const targetUserId = "user-2";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // -------- joinChannel --------
    describe("joinChannel", () => {
        it("should throw if already active member", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({
                userId,
                channelId,
                deletedAt: null,
            });

            await expect(channelMembersService.joinChannel(channelId, userId))
                .rejects.toThrow("User already a member of this channel.");
        });

        it("should restore soft-deleted member", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({
                userId,
                channelId,
                deletedAt: new Date(),
            });
            const updated = { userId, channelId, deletedAt: null, role: ChannelRole.MEMBER };
            (prisma.userOnChannel.update as jest.Mock).mockResolvedValue(updated);

            const result = await channelMembersService.joinChannel(channelId, userId);
            expect(result).toEqual(updated);
        });

        it("should create new member if not existing", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);
            const created = { userId, channelId, deletedAt: null };
            (prisma.userOnChannel.create as jest.Mock).mockResolvedValue(created);

            const result = await channelMembersService.joinChannel(channelId, userId);
            expect(result).toEqual(created);
        });
    });

    // -------- leaveChannel --------
    describe("leaveChannel", () => {
        it("should throw if channel not found", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(channelMembersService.leaveChannel(channelId, userId))
                .rejects.toThrow("Channel not found or is inactive.");
        });

        it("should throw if owner tries to leave", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ ownerId: userId });

            await expect(channelMembersService.leaveChannel(channelId, userId))
                .rejects.toThrow("Channel owner cannot leave their own channel.");
        });

        it("should soft delete member", async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ ownerId: "other" });
            const updated = { userId, channelId, deletedAt: new Date() };
            (prisma.userOnChannel.update as jest.Mock).mockResolvedValue(updated);

            const result = await channelMembersService.leaveChannel(channelId, userId);
            expect(result).toEqual(updated);
        });
    });

    // -------- getAllChannelMembers --------
    describe("getAllChannelMembers", () => {
        it("should return members with user info", async () => {
            const members = [
                { userId, channelId, user: { id: userId, name: "Ali", email: "ali@test.com" } },
            ];
            (prisma.userOnChannel.findMany as jest.Mock).mockResolvedValue(members);

            const result = await channelMembersService.getAllChannelMembers(channelId);
            expect(result).toEqual(members);
        });
    });

    // -------- changeMemberRole --------
    describe("changeMemberRole", () => {
        it("should throw if member not found", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                channelMembersService.changeMemberRole(channelId, targetUserId, ChannelRole.ADMIN)
            ).rejects.toThrow("Member not found in this channel.");
        });

        it("should update member role", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({
                userId: targetUserId,
                channelId,
                deletedAt: null,
            });
            const updated = { userId: targetUserId, role: ChannelRole.ADMIN };
            (prisma.userOnChannel.update as jest.Mock).mockResolvedValue(updated);

            const result = await channelMembersService.changeMemberRole(
                channelId,
                targetUserId,
                ChannelRole.ADMIN
            );
            expect(result).toEqual(updated);
        });
    });

    // -------- kickMember --------
    describe("kickMember", () => {
        it("should throw if trying to kick self", async () => {
            await expect(
                channelMembersService.kickMember(channelId, userId, userId)
            ).rejects.toThrow("You cannot kick yourself from the channel.");
        });

        it("should throw if member not found", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                channelMembersService.kickMember(channelId, targetUserId, userId)
            ).rejects.toThrow("Member not found in this channel.");
        });

        it("should soft delete member", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({
                userId: targetUserId,
                channelId,
                deletedAt: null,
            });
            const updated = { userId: targetUserId, channelId, deletedAt: new Date() };
            (prisma.userOnChannel.update as jest.Mock).mockResolvedValue(updated);

            const result = await channelMembersService.kickMember(channelId, targetUserId, userId);
            expect(result).toEqual(updated);
        });
    });

    // -------- transferChannelOwnership --------
    describe("transferChannelOwnership", () => {
        it("should throw if new owner not active", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                channelMembersService.transferChannelOwnership(channelId, targetUserId)
            ).rejects.toThrow("New owner must be an active member of the channel.");
        });

        it("should update channel owner", async () => {
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({
                userId: targetUserId,
                channelId,
                deletedAt: null,
            });
            const updated = { id: channelId, ownerId: targetUserId };
            (prisma.channel.update as jest.Mock).mockResolvedValue(updated);

            const result = await channelMembersService.transferChannelOwnership(channelId, targetUserId);
            expect(result).toEqual(updated);
        });
    });
});

import { channelService } from '../services/channel.service';
import prisma from '../config/db';


jest.mock('../config/db');

describe('ChannelService', () => {
    const workspaceId = 'ws-1';
    const channelId = 'ch-1';
    const userId = 'user-1';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('createChannel', () => {
        it('should throw if channel name already exists', async () => {
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue({ id: 'exists' });

            await expect(
                channelService.createChannel({ name: 'general', description: 'desc', isPublic: true }, workspaceId, userId)
            ).rejects.toThrow('A channel with this name already exists in this workspace.');
        });

        it('should throw if workspace has reached max channels', async () => {
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.channel.count as jest.Mock).mockResolvedValue(10); // MAX_CHANNELS = 10

            await expect(
                channelService.createChannel({ name: 'new', description: 'desc', isPublic: true }, workspaceId, userId)
            ).rejects.toThrow('Each workspace can have up to 10 channels.');
        });

        it('should create channel successfully', async () => {
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.channel.count as jest.Mock).mockResolvedValue(0);
            (prisma.channel.create as jest.Mock).mockResolvedValue({ id: channelId, name: 'new' });

            const result = await channelService.createChannel(
                { name: 'new', description: 'desc', isPublic: true },
                workspaceId,
                userId
            );

            expect(result).toEqual({ id: channelId, name: 'new' });
            expect(prisma.channel.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        name: 'new',
                        workspaceId,
                        ownerId: userId,
                        UserOnChannels: expect.any(Object),
                    }),
                })
            );
        });
    });

    describe('getAllChannels', () => {
        it('should return all channels', async () => {
            const fakeChannels = [{ id: 'ch1' }, { id: 'ch2' }];
            (prisma.channel.findMany as jest.Mock).mockResolvedValue(fakeChannels);

            const result = await channelService.getAllChannels(workspaceId, userId);
            expect(result).toEqual(fakeChannels);
        });
    });

    describe('getChannel', () => {
        it('should throw if channel not found', async () => {
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue(null);

            await expect(channelService.getChannel(channelId, workspaceId, userId)).rejects.toThrow(
                'Channel not found or you do not have access.'
            );
        });

        it('should return channel if found', async () => {
            const fakeChannel = { id: channelId, name: 'general' };
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue(fakeChannel);

            const result = await channelService.getChannel(channelId, workspaceId, userId);
            expect(result).toEqual(fakeChannel);
        });
    });

    describe('updateChannel', () => {
        it('should throw if new name already exists', async () => {
            (prisma.channel.findFirst as jest.Mock)
                .mockResolvedValueOnce({ id: channelId, name: 'general' })
                .mockResolvedValueOnce({ id: 'another' });

            await expect(
                channelService.updateChannel({ name: 'duplicate' }, channelId, workspaceId)
            ).rejects.toThrow('A channel with this name already exists in this workspace.');
        });

        it("should update channel successfully", async () => {
            const channelId = "ch-1";
            const workspaceId = "ws-1";
            const oldChannel = { id: channelId, name: "old-name" };


            (prisma.channel.findFirst as jest.Mock).mockResolvedValueOnce(oldChannel);


            (prisma.channel.findFirst as jest.Mock).mockResolvedValueOnce(null);

            const updatedChannel = { ...oldChannel, name: "new-name" };
            (prisma.channel.update as jest.Mock).mockResolvedValue(updatedChannel);

            const result = await channelService.updateChannel(
                { name: "new-name" },
                channelId,
                workspaceId
            );

            expect(result).toEqual(updatedChannel);
            expect(prisma.channel.update).toHaveBeenCalledWith({
                where: { id: channelId },
                data: expect.objectContaining({ name: "new-name" }),
            });
        });

    });

    describe('deleteChannel', () => {
        it('should soft delete channel and related entities', async () => {
            (prisma.channel.findFirst as jest.Mock).mockResolvedValue({ id: channelId, name: 'general' });
            const deleted = { id: channelId, deletedAt: new Date() };
            (prisma.channel.update as jest.Mock).mockResolvedValue(deleted);

            const result = await channelService.deleteChannel(channelId, workspaceId);
            expect(result).toEqual(deleted);
            expect(prisma.channel.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: { id: channelId },
                    data: expect.objectContaining({
                        deletedAt: expect.any(Date),
                    }),
                })
            );
        });
    });
});

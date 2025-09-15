import { fileService } from '../services/file.service';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { v2 as cloudinary } from 'cloudinary';

jest.mock('../config/db');

jest.mock('cloudinary', () => ({
    v2: {
        uploader: {
            upload: jest.fn(),
            destroy: jest.fn(),
        },
        config: jest.fn(),
    },
}));

describe('FileService', () => {
    const mockFile: Express.Multer.File = {
        buffer: Buffer.from('dummy-data'),
        mimetype: 'image/png',
        originalname: 'test.png',
        size: 1234,
        fieldname: 'file',
        encoding: '7bit',
        stream: undefined as any,
        destination: '',
        filename: '',
        path: '',
    };

    const mockUser = { id: 'user1', name: 'Test User', email: 't@t.com' };
    const mockMessage = { id: 'msg1', channelId: null, conversationId: null };
    const mockFileRecord = { id: 'file1', uploadedById: 'user1', path: 'cloud/test' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('uploadFile', () => {
        it('should upload file to cloudinary and save to db', async () => {
            (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
            (prisma.message.findUnique as jest.Mock).mockResolvedValue(mockMessage);
            (cloudinary.uploader.upload as jest.Mock).mockResolvedValue({ secure_url: 'http://cloud/test.png', public_id: 'cloud/test' });
            (prisma.file.create as jest.Mock).mockResolvedValue(mockFileRecord);

            const result = await fileService.uploadFile(mockFile, 'user1', 'msg1');

            expect(prisma.user.findUnique).toHaveBeenCalled();
            expect(cloudinary.uploader.upload).toHaveBeenCalled();
            expect(prisma.file.create).toHaveBeenCalled();
            expect(result).toEqual(mockFileRecord);
        });

        it('should throw if uploader user not found', async () => {
            (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(fileService.uploadFile(mockFile, 'invalidUser')).rejects.toThrow(ApiError);
        });

        it('should throw if messageId invalid', async () => {
            (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
            (prisma.message.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(fileService.uploadFile(mockFile, 'user1', 'invalidMsg')).rejects.toThrow(ApiError);
        });
    });

    describe('getFileMetadata', () => {
        it('should return file if user is uploader', async () => {
            (prisma.file.findUnique as jest.Mock).mockResolvedValue({ ...mockFileRecord, uploadedById: 'user1' });

            const result = await fileService.getFileMetadata('file1', 'user1');

            expect(result.id).toBe('file1');
        });

        it('should throw if file not found', async () => {
            (prisma.file.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(fileService.getFileMetadata('file1', 'user1')).rejects.toThrow(ApiError);
        });

        it('should allow if user in channel of message', async () => {
            (prisma.file.findUnique as jest.Mock).mockResolvedValue({ ...mockFileRecord, uploadedById: 'other', messageId: 'msg1' });
            (prisma.message.findUnique as jest.Mock).mockResolvedValue({ channelId: 'ch1', conversationId: null });
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({ userId: 'user1', channelId: 'ch1' });

            const result = await fileService.getFileMetadata('file1', 'user1');

            expect(result.id).toBe('file1');
        });
    });

    describe('deleteFile', () => {
        it('should delete file if uploader', async () => {
            (fileService.getFileMetadata as any) = jest.fn().mockResolvedValue({ ...mockFileRecord, uploadedById: 'user1' });
            (cloudinary.uploader.destroy as jest.Mock).mockResolvedValue({ result: 'ok' });
            (prisma.file.update as jest.Mock).mockResolvedValue({ ...mockFileRecord, deletedAt: new Date() });

            const result = await fileService.deleteFile('file1', 'user1');

            expect(cloudinary.uploader.destroy).toHaveBeenCalledWith('cloud/test');
            expect(prisma.file.update).toHaveBeenCalled();
            expect(result.deletedAt).toBeInstanceOf(Date);
        });

        it('should throw if not uploader', async () => {
            (fileService.getFileMetadata as any) = jest.fn().mockResolvedValue({ ...mockFileRecord, uploadedById: 'other' });

            await expect(fileService.deleteFile('file1', 'user1')).rejects.toThrow(ApiError);
        });
    });
});

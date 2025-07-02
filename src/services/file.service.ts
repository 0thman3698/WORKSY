import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'; 

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true // Use HTTPS
});

export class FileService {

  //  Uploads a file to Cloudinary and saves its metadata to the database.
  async uploadFile(file: Express.Multer.File, uploadedById: string, messageId?: string) {
    const user = await prisma.user.findUnique({
      where: { id: uploadedById, deletedAt: null },
    });
    if (!user) {
      throw ApiError.notFound('Uploader user not found or is inactive.');
    }

    let validatedMessageId: string | undefined = undefined;

    if (messageId && typeof messageId === 'string' && messageId.trim() !== '') {
      console.log(`[FileService - Validation] messageId is non-empty string: '${messageId}'`);
      try {
        const messageExists = await prisma.message.findUnique({
          where: { id: messageId, deletedAt: null },
        });
        console.log(`[FileService - Validation] Message existence check result: ${!!messageExists}`);

        if (!messageExists) {
          console.error(`[FileService - Validation] Invalid messageId provided: '${messageId}'. Throwing ApiError.badRequest.`);
          throw ApiError.badRequest('Provided messageId does not exist or is inactive.');
        }
        validatedMessageId = messageId;
        console.log(`[FileService - Validation] messageId validated successfully. Using: '${validatedMessageId}'`);
      } catch (validationError: any) {
        if (validationError instanceof ApiError) {
          throw validationError;
        }
        console.error(`[FileService - Validation Error] Error during messageId lookup:`, validationError);
        throw ApiError.internal(`Failed to validate message ID: ${validationError.message}`);
      }
    } else {
        console.log(`[FileService - Validation] messageId is empty, null, undefined, or not a string. Not validating against DB. messageId will be set to undefined.`);
    }

    try {
      // Convert buffer to data URI for Cloudinary upload
      const fileBase64 = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

      // Upload file to Cloudinary
      const uploadOptions = {
        folder: `worksy/${uploadedById}`,
        resource_type: 'auto', // Automatically detect file type (image, video, raw)
        public_id: `${Date.now()}_${file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`, // Unique public ID
          // type: 'upload', // default & public
      };

      console.log('[FileService - Cloudinary] Attempting Cloudinary upload...');
      const result = await cloudinary.uploader.upload(fileBase64, uploadOptions);
      console.log(`[FileService - Cloudinary] Upload successful. Secure URL: ${result.secure_url}`);

      console.log(`[FileService - Prisma] Attempting prisma.file.create with messageId: '${validatedMessageId}'`);
      const newFile = await prisma.file.create({
        data: {
          filename: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          url: result.secure_url,
          path: result.public_id,
          uploadedById: uploadedById,
          messageId: validatedMessageId,
        },
      });
      console.log(`[FileService - Prisma] File record created successfully: ${newFile.id}`);

      return newFile;
    } catch (error: any) {
      console.error('[FileService - Upload/Prisma Error] Failed during Cloudinary upload or Prisma create:', error);
      throw error;
    }
  }

  // Retrieves file metadata by ID.
  async getFileMetadata(fileId: string, userId: string) {
    const file = await prisma.file.findUnique({
      where: { id: fileId, deletedAt: null },
      include: {
        uploadedBy: {
          select: { id: true, name: true, email: true }
        },
        message: {
          select: { id: true, channelId: true, conversationId: true }
        }
      }
    });

    if (!file) {
      throw ApiError.notFound('File not found or is inactive.');
    }

    //  Only uploader or a member of the channel/DM can access
    let isAuthorized = false;

    if (file.uploadedById === userId) {
      isAuthorized = true;
    } else if (file.messageId) {
      const message = await prisma.message.findUnique({
        where: { id: file.messageId },
        select: { channelId: true, conversationId: true }
      });

      if (message?.channelId) {
        const userOnChannel = await prisma.userOnChannel.findUnique({
          where: { userId_channelId: { userId, channelId: message.channelId }, deletedAt: null },
        });
        if (userOnChannel) isAuthorized = true;
      } else if (message?.conversationId) {
        const userOnDm = await prisma.userOnDM.findUnique({
          where: { userId_dmId: { userId, dmId: message.conversationId }, deletedAt: null },
        });
        if (userOnDm) isAuthorized = true;
      }
    }
    

    if (!isAuthorized) {
      throw ApiError.forbidden('You do not have permission to access this file.');
    }
    return file;
  }

  async deleteFile(fileId: string, userId: string) {
    const file = await this.getFileMetadata(fileId, userId); 

    // Only uploader or admin can delete
    if (file.uploadedById !== userId) {
      throw ApiError.forbidden('You do not have permission to delete this file.');
    }

    try {
      // Delete from Cloudinary using its public_id (stored in file.path)
      await cloudinary.uploader.destroy(file.path);

      const deletedFile = await prisma.file.update({
        where: { id: fileId },
        data: { deletedAt: new Date() },
      });

      return deletedFile;
    } catch (error: any) {
      console.error('Error deleting file from Cloudinary:', error);
      throw ApiError.internal(`Failed to delete file: ${error.message}`);
    }
  }
}

export const fileService = new FileService();

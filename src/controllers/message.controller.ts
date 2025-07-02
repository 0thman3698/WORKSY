import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { messageService } from '../services/message.service';
import { createMessageSchema, createMessageSchemaType } from '../validators/message.validators';
import { z } from 'zod';
import { ApiError } from '../utils/apiError';

export default class MessageControllers {
    static async sendMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId } = req.params;
      const userId = req.user.id;
      const messageData: createMessageSchemaType = req.body;
      const uploadedFiles = req.files as Express.Multer.File[] | undefined;

      try {
        createMessageSchema.parse(messageData);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw ApiError.badRequest(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
        }
        throw ApiError.badRequest('Invalid message data.');
      }

      const message = await messageService.sendMessage(channelId, messageData, userId, uploadedFiles);
      return new ApiResponse(res).created(message, 'Message sent successfully');
    } catch (error) {
      next(error);
    }
  }

  static async getAllMessages(req: Request, res: Response, next: NextFunction) {
    try {
        const { channelId } = req.params;
        const userId = req.user.id;
        const limit = parseInt(req.query.limit as string) || 50;
        const skip = parseInt(req.query.skip as string) || 0;

        const messages = await messageService.getAllMessages(channelId, userId, limit, skip);
        return new ApiResponse(res).success(messages, 'Messages fetched successfully');
    } catch (error) {
        next(error);
    }
  }
}
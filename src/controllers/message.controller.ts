import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { channelMessageService } from '../services/channelMessage.service';
import { dmService } from '../services/dm.service';

export default class MessageControllers {
    static async sendChannelMessage(req: Request, res: Response, next: NextFunction) {
        const userId = req.user.id;
        const { channelId } = req.params;
        const { content } = req.body
        const uploadedFiles = req.files as Express.Multer.File[] | undefined;

        const message = await channelMessageService.sendChannelMessage(channelId, content, userId, uploadedFiles);

        return new ApiResponse(res).created(message, 'Message sent successfully');
    }
    static async sendDMMessage(req: Request, res: Response, next: NextFunction) {
        const userId = req.user.id;
        const { conversationId } = req.params;
        const { content } = req.body
        const uploadedFiles = req.files as Express.Multer.File[] | undefined;

        const message = await dmService.sendDMMessage(content, conversationId, userId, uploadedFiles);

        return new ApiResponse(res).created(message, 'Message sent successfully');
    }
}
//need to seperate dm and channel message

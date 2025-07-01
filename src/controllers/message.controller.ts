import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { messageService } from '../services/message.service';
import { createMessageSchemaType } from 'src/validators/message.validators';

export default class MessageControllers {
    static async sendMessage(req: Request, res: Response, next: NextFunction) {
        const userId = req.user.id;
        const { channelId } = req.params;
        const messageData: createMessageSchemaType = req.body;
        const message = await messageService.sendMessage(channelId, messageData, userId);

        return new ApiResponse(res).created(message, 'Message sent successfully');
    }
}
import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { dmService } from '../services/dm.service';


export default class DmControllers {
    static async createConversation(req: Request, res: Response, next: NextFunction) {
        const userId = req.user.id;
        const { otherUserId, workspaceId } = req.params;
        const Conversation = await dmService.createConversation(userId, otherUserId, workspaceId);


        return new ApiResponse(res).created(Conversation, 'Converstaion created successfully');
    }
}
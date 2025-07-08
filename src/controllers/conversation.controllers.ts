import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { conversationService } from '../services/conversation.service';


export default class ConversationControllers {
    static async createConversation(req: Request, res: Response, next: NextFunction) {
        const userId = req.user!.id;
        const { workspaceId } = req.params;
        const { otherUserId } = req.body;
        const Conversation = await conversationService.createConversation(userId, otherUserId, workspaceId);


        return new ApiResponse(res).created(Conversation, 'Converstaion created successfully');
    }
    static async createGroupConversation(req: Request, res: Response, next: NextFunction) {
        const userId = req.user!.id;
        const { workspaceId } = req.params;
        const { otherUserIds } = req.body
        const GroupConversation = await conversationService.createGroupConversation(userId, otherUserIds, workspaceId);
        return new ApiResponse(res).created(GroupConversation, 'GroupConverstaion created successfully');
    }


    static async getMyConversations(req: Request, res: Response, next: NextFunction) {
        const userId = req.user!.id;
        const { workspaceId } = req.params;

        const conversations = await conversationService.getMyConversations(userId, workspaceId, req.query);

        return new ApiResponse(res).success(conversations, ' Conversations fetched successfully');

    }

}
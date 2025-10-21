import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { aiService } from "../services/ai.service";
import { ApiError } from "../utils/apiError";
import { summarizeChannelSchemaType, summarizeDMMessagesSchemaType } from "../validators/ai.validators";



export default class AIController {

    static summarizeChannelMessages = (async (req: Request, res: Response, next: NextFunction) => {
        const { channelId } = req.body as summarizeChannelSchemaType;
        const summary = await aiService.summarizeChannelMessages(channelId);
        console.log("Starting summarize...");

        return new ApiResponse(res).success({ summary }, "Messages summarized successfully");
    });

    static summarizeDMMessages = (async (req: Request, res: Response, next: NextFunction) => {
        const { conversationId } = req.body as summarizeDMMessagesSchemaType;
        const summary = await aiService.summarizeChannelMessages(conversationId);

        return new ApiResponse(res).success({ summary }, "Messages summarized successfully");
    });
}

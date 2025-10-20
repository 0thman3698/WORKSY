import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { aiService } from "../services/ai.service";
import { ApiError } from "../utils/apiError";
export default class AIController {

    static summarize = (async (req: Request, res: Response, next: NextFunction) => {
        const { targetId, type } = req.body;

        if (!targetId || !["channel", "dm"].includes(type)) {
            return ApiError.badRequest('Invalid type or targetId');
        }

        const summary = await aiService.summarizeMessages(targetId, type);
        console.log("Starting summarize...");

        return new ApiResponse(res).success({ summary }, "Messages summarized successfully");
    });
}

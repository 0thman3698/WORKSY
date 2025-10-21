import { Router } from "express";
import AIController from "../controllers/ai.controller"
import { asyncHandler } from "../middlewares/asyncHandler";
import { validate } from "../middlewares/validation.middleware";
import { summarizeChannelSchema, summarizeDMMessagesSchema } from "../validators/ai.validators";

const router = Router();

router.post("/summarize", validate(summarizeChannelSchema), asyncHandler(AIController.summarizeChannelMessages));

router.post("/summarize", validate(summarizeDMMessagesSchema), asyncHandler(AIController.summarizeDMMessages));

export default router;

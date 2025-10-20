import { Router } from "express";
import AIController from "../controllers/messageSummarization.controller"
import { asyncHandler } from "../middlewares/asyncHandler";

const router = Router();

router.post("/summarize", asyncHandler(AIController.summarize));

export default router;

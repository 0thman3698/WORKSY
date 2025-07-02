// src/routes/channel.routes.ts
import express from "express";
import { validate } from "../middlewares/validation.middleware";
import { asyncHandler } from "../middlewares/asyncHandler";
import ChannelControllers from "../controllers/channel.controller";
import { createChannelSchema } from "../validators/channel.validators";
import meetingRoutes from "./meeting.routes"

import {
  checkChannelRole,
  checkWorkspaceRole,
} from "../middlewares/authorization.middleware";
import { ChannelRole, WorkspaceRole } from "../generated/prisma";

import channelMembersRouter from "./channelMembers.routes";
import messageRouter from "./message.routes";

const router = express.Router({ mergeParams: true });

router.post(
  "/",
  checkWorkspaceRole(WorkspaceRole.ADMIN),
  validate(createChannelSchema),
  asyncHandler(ChannelControllers.createChannel)
);

router.get("/", asyncHandler(ChannelControllers.getAllChannels));

router.get("/:channelId", asyncHandler(ChannelControllers.getChannel));

router.patch(
  "/:channelId",
  checkChannelRole(ChannelRole.ADMIN),
  asyncHandler(ChannelControllers.updateChannel)
);

router.delete(
  "/:channelId",
  checkWorkspaceRole(WorkspaceRole.OWNER),
  asyncHandler(ChannelControllers.deleteChannel)
);

router.use("/:channelId/members", channelMembersRouter);
router.use(
  "/:channelId/messages",
  checkChannelRole(ChannelRole.MEMBER),
  messageRouter
);

router.use("/:channelId/meetings", checkChannelRole(ChannelRole.MEMBER), meetingRoutes); // Meetings are specific to channels

export default router;

// src/controllers/channel.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { createChannelSchemaType, updateChannelSchemaType } from '../validators/channel.validators'; // Ensure correct path to types
import { channelService } from '../services/channel.service';

export default class ChannelControllers {

  static async createChannel(req: Request, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const { workspaceId } = req.params;
    const channelData: createChannelSchemaType = req.body;
    const channel = await channelService.createChannel(channelData, workspaceId, userId);

    return new ApiResponse(res).created(channel, 'Channel created successfully');
  }


  static async getAllChannels(req: Request, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const { workspaceId } = req.params;
    const channels = await channelService.getAllChannels(workspaceId, userId);

    return new ApiResponse(res).success(channels, 'Channels fetched successfully');
  }

  static async getChannel(req: Request, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const { workspaceId, channelId } = req.params;
    const channel = await channelService.getChannel(channelId, workspaceId, userId);

    return new ApiResponse(res).success(channel, 'Channel fetched successfully');
  }
  static async updateChannel(req: Request, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const { workspaceId, channelId } = req.params;
    const channelData: updateChannelSchemaType = req.body;
    const updatedChannel = await channelService.updateChannel(channelData, channelId, workspaceId, userId);

    return new ApiResponse(res).success(updatedChannel, 'Channel updated successfully');
  }

  static async deleteChannel(req: Request, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const { workspaceId, channelId } = req.params;
    await channelService.deleteChannel(channelId, workspaceId, userId);

    return new ApiResponse(res).success(null, 'Channel deleted successfully');
  }
}

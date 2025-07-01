import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { channelMembersService } from '../services/channelMembers.service';

export default class ChannelMembersControllers {
        static async joinChannel(req: Request, res: Response, next: NextFunction) {
                const userId = req.user.id;

                const { channelId, workspaceId } = req.params;
                const newMember = await channelMembersService.joinChannel(channelId, workspaceId, userId);

                return new ApiResponse(res).created(newMember, 'member joined successfully');
        }
        static async leaveChannel(req: Request, res: Response, next: NextFunction) {
                const userId = req.user.id;

                const { channelId } = req.params;
                const deleted = await channelMembersService.leaveChannel(channelId, userId);

                return new ApiResponse(res).success(deleted, 'member leaved successfully');
        }
        static async getALLChannelMembers(req: Request, res: Response, next: NextFunction) {
                const userId = req.user.id;

                const { channelId } = req.params;
                const channels = await channelMembersService.getALLChannelMembers(channelId, userId);

                return new ApiResponse(res).success(channels, 'Channel members fetched successfully');
        }
}
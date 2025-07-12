import { Request, Response, NextFunction } from 'express';
import { ChannelRole } from '@prisma/client';
import { ApiResponse } from '../utils/apiResponse';
import { channelMembersService } from '../services/channelMembers.service';

export default class ChannelMembersControllers {
        static async joinChannel(req: Request, res: Response, next: NextFunction) {
                const userId = req.user!.id;
                const { channelId } = req.params;

                const newMember = await channelMembersService.joinChannel(channelId, userId);

                return new ApiResponse(res).created(newMember, 'Member joined successfully');
        }

        static async leaveChannel(req: Request, res: Response, next: NextFunction) {
                const userId = req.user!.id;
                const { channelId } = req.params;

                const result = await channelMembersService.leaveChannel(channelId, userId);

                return new ApiResponse(res).success(result, 'Member left successfully');
        }

        static async getALLChannelMembers(req: Request, res: Response, next: NextFunction) {
                const { channelId } = req.params;

                const members = await channelMembersService.getAllChannelMembers(channelId);

                return new ApiResponse(res).success(members, 'Channel members fetched successfully');
        }

        static async changeMemberRole(req: Request, res: Response, next: NextFunction) {
                const { channelId, memberId } = req.params;
                const { newRole } = req.body as { newRole: ChannelRole };

                const updated = await channelMembersService.changeMemberRole(channelId, memberId, newRole);

                return new ApiResponse(res).success(updated, 'Member role updated successfully');
        }

        static async kickMember(req: Request, res: Response, next: NextFunction) {
                const currentUserId = req.user!.id;
                const { channelId, memberId: targetUserId } = req.params;

                const result = await channelMembersService.kickMember(channelId, targetUserId, currentUserId);


                return new ApiResponse(res).success(result, 'Member kicked from channel');
        }

        static async transferChannelOwnership(req: Request, res: Response, next: NextFunction) {
                const { channelId } = req.params;
                const { newOwnerId } = req.body as { newOwnerId: string };

                const updated = await channelMembersService.transferChannelOwnership(channelId, newOwnerId);

                return new ApiResponse(res).success(updated, 'Channel ownership transferred successfully');
        }
}

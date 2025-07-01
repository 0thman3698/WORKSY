import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { CreateInviteSchemaType } from '../validators/invite.validators';
import { inviteService } from '../services/invite.service';

export default class InviteControllers {
  static async createInvite(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { workspaceId } = req.params;
    const inviteData: CreateInviteSchemaType = req.body;
    const invite = await inviteService.createInvite(inviteData, workspaceId, userId);
    return new ApiResponse(res).created(invite, 'invite created successfully');
  }
  static async acceptInvite(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { token } = req.params;
    const result = await inviteService.acceptInvite(token, userId);
    return new ApiResponse(res).success(result, 'You have joined the workspace successfully');
  }
}

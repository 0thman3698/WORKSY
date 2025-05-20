import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { acceptInviteSchemaType, CreateInviteSchemaType } from '../validators/invite.validators';
import { inviteService } from '../services/invite.service';
import { token } from 'morgan';

export default class InviteControllers {
  static async createInvite(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    const { workspaceId } = req.params;
    const inviteData: CreateInviteSchemaType = req.body;
    const invite = await inviteService.createInvite(inviteData, workspaceId, user);
    return new ApiResponse(res).created(invite, 'invite created successfully');
  }
  static async acceptInvite(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    const { token } = req.params;
    const result = await inviteService.acceptInvite(token, user);
    return new ApiResponse(res).success(result, 'You have joined the workspace successfully');
  }
}

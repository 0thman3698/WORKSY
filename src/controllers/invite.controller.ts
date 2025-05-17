import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { acceptInviteSchemaType, CreateInviteSchemaType } from "../validators/invite.validators";
import { inviteService } from "../services/invite.service";

export default class InviteControllers {
    static async createInvite(req: Request, res: Response, next: NextFunction) {
        const user = req.user;
        const inviteData: CreateInviteSchemaType = req.body;
        const invite = await inviteService.createInvite(inviteData, user)
        return new ApiResponse(res).created(invite, "invite created successfully")

    }
    static async acceptInvite(req: Request, res: Response, next: NextFunction) {
        const user = req.user;
        const inviteData: acceptInviteSchemaType = req.body;
        const result = await inviteService.acceptInvite(inviteData, user)
        return new ApiResponse(res).success(result, "You have joined the workspace successfully")
    }

}
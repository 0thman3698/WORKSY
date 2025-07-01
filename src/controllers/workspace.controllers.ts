import { Request, Response, NextFunction } from 'express';
import { ICreateWorkspace } from '../interfaces/workspace.interface';
import { workspaceService } from '../services/workspace.service';
import { ApiResponse } from '../utils/apiResponse';

export default class WorkspaceControllers {
  static async createWorkspace(
    req: Request<{}, {}, ICreateWorkspace, {}>,
    res: Response,
    next: NextFunction,
  ) {
    const userId = req.user.id;
    const workspaceData: ICreateWorkspace = req.body;
    const workspace = await workspaceService.createWorkspace(workspaceData, userId);

    return new ApiResponse(res).created(workspace, 'Workspace created successfully');
  }
  static async getMyWorkspaces(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const workspaces = await workspaceService.getMyWorkspaces(userId);
    return new ApiResponse(res).success(workspaces, 'Fetched workspaces successfully');
  }
  static async updateWorkspace(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { workspaceId } = req.params;
    const workspaceData = req.body;
    const updatedWorkspace = await workspaceService.updateWorkspace(
      workspaceId,
      workspaceData,
      userId,
    );
    return new ApiResponse(res).success(updatedWorkspace, 'Workspace updated successfully');
  }
  static async deleteWorkspace(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { workspaceId } = req.params;
    const result = await workspaceService.deleteWorkspace(workspaceId, userId);
    return new ApiResponse(res).success(result, 'Workspace deleted successfully');
  }
}

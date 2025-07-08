import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';
import { updateMeSchemaType, updateUserSchemaType } from '../validators/user.validators';
import { ApiResponse } from '../utils/apiResponse';
import { Role } from '../generated/prisma';
import { ApiError } from '../utils/apiError';



export default class UserControllers {
    // 👤 Public Controllers

    static async getCurrentUser(req: Request, res: Response, next: NextFunction) {

        const userId = req.user!.id;

        const user = await userService.getCurrentUser(userId);
        return new ApiResponse(res).success(user, 'Fetched current user successfully');
    }

    static async updateMe(
        req: Request<{}, {}, updateMeSchemaType>,
        res: Response,
        next: NextFunction,
    ) {
        const userId = req.user!.id;
        const updatedUser = await userService.updateMe(userId, req.body);
        return new ApiResponse(res).success(updatedUser, 'Your profile was updated successfully');
    }

    // 🔐 Admin-only Controllers

    static async getAllUsers(req: Request, res: Response, next: NextFunction) {
        const users = await userService.getAllUsers(req.query);
        return new ApiResponse(res).success(users, 'Fetched users successfully');
    }

    static async updateUserById(
        req: Request<{ id: string }, {}, updateUserSchemaType>,
        res: Response,
        next: NextFunction,
    ) {

        const updatedUser = await userService.updateUserById(req.params.id, req.body);
        return new ApiResponse(res).success(updatedUser, 'User updated successfully');
    }

    static async updateUserRole(
        req: Request<{ id: string }, {}, { newRole: Role }>,
        res: Response,
        next: NextFunction,
    ) {
        const updatedUser = await userService.updateUserRole(req.user!.id, req.params.id, req.body.newRole);
        return new ApiResponse(res).success(updatedUser, 'User role updated successfully');
    }

    static async softDeleteUser(
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction,
    ) {
        const deletedUser = await userService.softDeleteUser(req.params.id);
        return new ApiResponse(res).success(deletedUser, 'User deleted successfully');
    }
}

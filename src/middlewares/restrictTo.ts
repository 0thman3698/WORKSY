// src/middlewares/restrictTo.ts

import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/apiError";
import { IUser } from "../interfaces/express";

export function restrictTo(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as IUser;

    if (!roles.includes(user.role)) {
      throw ApiError.forbidden("You are not authorized to access this resource");
    }

    next();
  };
}

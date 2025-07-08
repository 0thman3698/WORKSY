import prisma from '../config/db';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';
import { User } from '@prisma/client';

interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let token: string | undefined;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(ApiError.unauthorized('You are not logged in! Please log in to get access.'));
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as JwtPayload;

    const user = await prisma.user.findFirst({
      where: { id: decoded.id, deletedAt: null },
    });

    if (!user) {
      return next(ApiError.unauthorized('User not found or has been deleted.'));
    }

    req.user = {
      id: user.id,
      role: user.role,
      email: user.email
    };

    next();
  } catch (err) {
    return next(ApiError.unauthorized('Invalid or expired token.'));
  }
};

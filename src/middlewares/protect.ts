import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; 
  }

  if (!token) {
    return void res.status(401).json({ message: 'You are not logged in! Please log in to get access.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as { userId: string };

    req.user = { id: decoded.userId };

    next();
  } catch (err) {
    return void res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

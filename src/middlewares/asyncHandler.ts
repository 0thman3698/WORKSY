import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

export const asyncHandler = (fn) => (req:Request, res:Response, next:NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

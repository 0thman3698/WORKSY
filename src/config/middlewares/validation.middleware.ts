import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
// import { badRequest } from '@utils/apiError';
import { badRequest } from '../utils/apiError';

export function validate(validations: any[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formattedErrors = errors.array().map((err:any) => ({
      field: err.param,
      message: err.msg
    }));

    next(badRequest('Validation failed', formattedErrors));
  };
}
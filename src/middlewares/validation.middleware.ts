import { ApiError } from '../utils/apiError';
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export function validate(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      //@ts-expect-error
      throw ApiError.badRequest('Validation failed', result.error.errors)
    }
    req.body = result.data;

    next();
  };
}

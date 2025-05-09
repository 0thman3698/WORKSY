import httpStatus from 'http-status';

interface ApiErrorOptions {
  errors?: any[];
  isOperational?: boolean;
  stack?: string;
}

export function createApiError(
  statusCode: number,
  message: string,
  options: ApiErrorOptions = {}
) {
  const error = new Error(message) as any;
  error.statusCode = statusCode;
  error.isOperational = options.isOperational ?? true;
  error.errors = options.errors;

  if (options.stack) {
    Error.captureStackTrace(error, createApiError);
  }

  return error;
}

export const badRequest = (message: string, errors?: any[]) => 
  createApiError(httpStatus.BAD_REQUEST, message, { errors });

export const unauthorized = (message: string) => 
  createApiError(httpStatus.UNAUTHORIZED, message);

export const forbidden = (message: string) => 
  createApiError(httpStatus.FORBIDDEN, message);

export const notFound = (message: string) => 
  createApiError(httpStatus.NOT_FOUND, message);

export const internal = (message: string) => 
  createApiError(httpStatus.INTERNAL_SERVER_ERROR, message);
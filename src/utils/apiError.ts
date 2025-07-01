export class ApiError extends Error {
  statusCode: number;
  errors?: any[];
  stack?: string;

  constructor(statusCode: number, message: string, errors = [], stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(message = 'Bad request', errors = []) {
    return new ApiError(400, message, errors);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message);
  }

  static forbidden(message = 'Forbidden') {
    return new ApiError(403, message);
  }

  static notFound(message = 'Not found') {
    return new ApiError(404, message);
  }

  static internal(message = 'Internal server error') {
    return new ApiError(500, message);
  }

  static validation(message = 'Validation error', errors = []) {
    return new ApiError(422, message, errors);
  }

  static tooManyRequests(message: string): ApiError {
    return new ApiError(429, message);
  }

}

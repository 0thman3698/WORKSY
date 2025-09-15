import { ApiError } from './apiError';

describe('ApiError', () => {
    describe('Constructor', () => {
        it('should create error with correct properties', () => {
            const error = new ApiError(400, 'Test message', ['error1'], 'stack trace');

            expect(error.statusCode).toBe(400);
            expect(error.message).toBe('Test message');
            expect(error.errors).toEqual(['error1']);
            expect(error.stack).toBe('stack trace');
            expect(error).toBeInstanceOf(Error);
        });

        it('should create error with default values', () => {
            const error = new ApiError(500, 'Server error');

            expect(error.statusCode).toBe(500);
            expect(error.message).toBe('Server error');
            expect(error.errors).toEqual([]);
            expect(error.stack).toBeDefined();
        });

        it('should capture stack trace when not provided', () => {
            const error = new ApiError(404, 'Not found');

            expect(error.stack).toBeDefined();
            expect(error.name).toBe('ApiError');
            expect(error.stack).toContain('ApiError');
        });
    });

    describe('Static Methods', () => {
        it('should create badRequest error', () => {
            const error = ApiError.badRequest('Invalid input');

            expect(error.statusCode).toBe(400);
            expect(error.message).toBe('Invalid input');
            expect(error.errors).toEqual([]);
        });

        it('should create badRequest error with custom errors', () => {
            const customErrors = ['Field is required', 'Invalid format'];
            const error = ApiError.badRequest('Validation failed', customErrors);

            expect(error.statusCode).toBe(400);
            expect(error.message).toBe('Validation failed');
            expect(error.errors).toEqual(customErrors);
        });

        it('should create badRequest error with default message', () => {
            const error = ApiError.badRequest();

            expect(error.statusCode).toBe(400);
            expect(error.message).toBe('Bad request');
        });

        it('should create unauthorized error', () => {
            const error = ApiError.unauthorized('Access denied');

            expect(error.statusCode).toBe(401);
            expect(error.message).toBe('Access denied');
        });

        it('should create unauthorized error with default message', () => {
            const error = ApiError.unauthorized();

            expect(error.statusCode).toBe(401);
            expect(error.message).toBe('Unauthorized');
        });

        it('should create forbidden error', () => {
            const error = ApiError.forbidden('Insufficient permissions');

            expect(error.statusCode).toBe(403);
            expect(error.message).toBe('Insufficient permissions');
        });

        it('should create forbidden error with default message', () => {
            const error = ApiError.forbidden();

            expect(error.statusCode).toBe(403);
            expect(error.message).toBe('Forbidden');
        });

        it('should create notFound error', () => {
            const error = ApiError.notFound('Resource not found');

            expect(error.statusCode).toBe(404);
            expect(error.message).toBe('Resource not found');
        });

        it('should create notFound error with default message', () => {
            const error = ApiError.notFound();

            expect(error.statusCode).toBe(404);
            expect(error.message).toBe('Not found');
        });

        it('should create internal error', () => {
            const error = ApiError.internal('Database connection failed');

            expect(error.statusCode).toBe(500);
            expect(error.message).toBe('Database connection failed');
        });

        it('should create internal error with default message', () => {
            const error = ApiError.internal();

            expect(error.statusCode).toBe(500);
            expect(error.message).toBe('Internal server error');
        });

        it('should create validation error', () => {
            const validationErrors = ['Email is required', 'Password too short'];
            const error = ApiError.validation('Validation failed', validationErrors);

            expect(error.statusCode).toBe(422);
            expect(error.message).toBe('Validation failed');
            expect(error.errors).toEqual(validationErrors);
        });

        it('should create validation error with default values', () => {
            const error = ApiError.validation();

            expect(error.statusCode).toBe(422);
            expect(error.message).toBe('Validation error');
            expect(error.errors).toEqual([]);
        });

        it('should create tooManyRequests error', () => {
            const error = ApiError.tooManyRequests('Rate limit exceeded');

            expect(error.statusCode).toBe(429);
            expect(error.message).toBe('Rate limit exceeded');
        });
    });

    describe('Error Inheritance', () => {
        it('should be instance of Error', () => {
            const error = ApiError.badRequest('Test');

            expect(error).toBeInstanceOf(Error);
            expect(error).toBeInstanceOf(ApiError);
        });

        it('should have correct name', () => {
            const error = ApiError.notFound('Test');

            expect(error.name).toBe('ApiError');
        });
    });
});
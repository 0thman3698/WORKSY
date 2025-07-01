import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { ApiError } from '../utils/apiError';

// Extend the Express Request type to include the 'user' property from Passport
declare global {
    namespace Express {
        interface Request {
            user?: any; // Define the user property as any
        }
    }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
        if (err) {
            console.error('Authentication error:', err);
            return next(new ApiError(500, 'Internal server error during authentication'));
        }
        if (!user) {
            console.log('Authentication failed:', info?.message || 'No user found for token');
            return next(new ApiError(401, info?.message || 'Unauthorized: Invalid or missing token'));
        }

        req.user = user;
        next();
    })(req, res, next);
};

export { authenticate };
import jwt from 'jsonwebtoken';
import {
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
    generateToken
} from './jwt';

// Mock environment variables
const originalEnv = process.env;

describe('JWT Utils', () => {
    beforeEach(() => {
        // Reset environment variables
        process.env = { ...originalEnv };
        process.env.ACCESS_TOKEN_SECRET = 'test-access-secret';
        process.env.REFRESH_TOKEN_SECRET = 'test-refresh-secret';
    });

    afterEach(() => {
        // Restore original environment
        process.env = originalEnv;
    });

    describe('generateAccessToken', () => {
        it('should generate a valid access token', () => {
            const userId = 'user123';
            const role = 'MEMBER';

            const token = generateAccessToken(userId, role);

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
            expect(token.split('.')).toHaveLength(3); // JWT has 3 parts
        });

        it('should generate token with correct payload', () => {
            const userId = 'user456';
            const role = 'ADMIN';

            const token = generateAccessToken(userId, role);
            const decoded = jwt.decode(token) as any;

            expect(decoded.id).toBe(userId);
            expect(decoded.role).toBe(role);
            expect(decoded.exp).toBeDefined();
        });

        it('should generate different tokens for different inputs', () => {
            const token1 = generateAccessToken('user1', 'MEMBER');
            const token2 = generateAccessToken('user2', 'ADMIN');

            expect(token1).not.toBe(token2);
        });
    });

    describe('generateRefreshToken', () => {
        it('should generate a valid refresh token', () => {
            const userId = 'user123';
            const role = 'MEMBER';

            const token = generateRefreshToken(userId, role);

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
            expect(token.split('.')).toHaveLength(3);
        });

        it('should generate token with correct payload', () => {
            const userId = 'user789';
            const role = 'OWNER';

            const token = generateRefreshToken(userId, role);
            const decoded = jwt.decode(token) as any;

            expect(decoded.id).toBe(userId);
            expect(decoded.role).toBe(role);
            expect(decoded.exp).toBeDefined();
        });

        it('should have longer expiration than access token', () => {
            const userId = 'user123';
            const role = 'MEMBER';

            const accessToken = generateAccessToken(userId, role);
            const refreshToken = generateRefreshToken(userId, role);

            const accessDecoded = jwt.decode(accessToken) as any;
            const refreshDecoded = jwt.decode(refreshToken) as any;

            expect(refreshDecoded.exp).toBeGreaterThan(accessDecoded.exp);
        });
    });

    describe('verifyToken', () => {
        it('should verify a valid token', () => {
            const payload = { id: 'user123', email: 'test@example.com' };
            const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '1h' });

            const decoded = verifyToken(token);

            expect(decoded.id).toBe(payload.id);
            expect(decoded.email).toBe(payload.email);
        });

        it('should throw error for expired token', () => {
            const payload = { userId: 'user123', email: 'test@example.com' };
            const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '-1h' });

            expect(() => verifyToken(token)).toThrow('Token expired');
        });

        it('should throw error for invalid token', () => {
            const invalidToken = 'invalid.token.here';

            expect(() => verifyToken(invalidToken)).toThrow('Invalid token');
        });

        it('should throw error for malformed token', () => {
            const malformedToken = 'not-a-jwt-token';

            expect(() => verifyToken(malformedToken)).toThrow('Invalid token');
        });

        it('should throw error for token with wrong secret', () => {
            const payload = { userId: 'user123', email: 'test@example.com' };
            const token = jwt.sign(payload, 'wrong-secret', { expiresIn: '1h' });

            expect(() => verifyToken(token)).toThrow('Invalid token');
        });

        it('should handle other JWT errors', () => {
            // Mock jwt.verify to throw a different error
            const originalVerify = jwt.verify;
            jest.spyOn(jwt, 'verify').mockImplementation(() => {
                throw new Error('Some other JWT error');
            });

            expect(() => verifyToken('any-token')).toThrow('Some other JWT error');

            // Restore original function
            jwt.verify = originalVerify;
        });
    });

    describe('generateToken', () => {
        it('should generate token with default expiration', () => {
            const payload = { userId: 'user123', email: 'test@example.com' };

            const token = generateToken(payload);

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
            expect(token.split('.')).toHaveLength(3);
        });

        it('should generate token with custom expiration', () => {
            const payload = { userId: 'user123', email: 'test@example.com' };
            const expiresIn = '2h';

            const token = generateToken(payload, expiresIn);

            expect(token).toBeDefined();
            const decoded = jwt.decode(token) as any;
            expect(decoded.exp).toBeDefined();
        });

        it('should generate token with correct payload', () => {
            const payload = {
                userId: 'user456',
                email: 'test@example.com',
                role: 'ADMIN'
            };

            const token = generateToken(payload);
            const decoded = jwt.decode(token) as any;

            expect(decoded.userId).toBe(payload.userId);
            expect(decoded.email).toBe(payload.email);
            expect(decoded.role).toBe(payload.role);
        });

        it('should generate different tokens for different payloads', () => {
            const payload1 = { userId: 'user1' };
            const payload2 = { userId: 'user2' };

            const token1 = generateToken(payload1);
            const token2 = generateToken(payload2);

            expect(token1).not.toBe(token2);
        });

        it('should use refresh token secret for signing', () => {
            const payload = { userId: 'user123' };

            const token = generateToken(payload);

            // Should be able to verify with refresh token secret
            expect(() => verifyToken(token)).not.toThrow();
        });
    });

    describe('Environment Variables', () => {
        it('should throw error if ACCESS_TOKEN_SECRET is missing', () => {
            delete process.env.ACCESS_TOKEN_SECRET;

            expect(() => generateAccessToken('user123', 'MEMBER')).toThrow();
        });

        it('should throw error if REFRESH_TOKEN_SECRET is missing', () => {
            delete process.env.REFRESH_TOKEN_SECRET;

            expect(() => generateRefreshToken('user123', 'MEMBER')).toThrow();
            expect(() => verifyToken('any-token')).toThrow();
            expect(() => generateToken({ userId: 'user123' })).toThrow();
        });
    });
});
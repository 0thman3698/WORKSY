import { authService } from './auth.service';
import prisma from '../config/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { ApiError } from '../utils/apiError';
import {
    generateAccessToken,
    generateRefreshToken,
    generateToken,
    verifyToken,
} from '../utils/jwt';
import { sendEmailVerificationEmail } from '../constants/sendEmailVerificationEmail';

// ... existing code ...
// Prisma mock
jest.mock('../config/db');

// JWT utils mock
jest.mock('../utils/jwt', () => ({
    generateAccessToken: jest.fn(() => 'access-token'),
    generateRefreshToken: jest.fn(() => 'refresh-token'),
    generateToken: jest.fn(() => 'email-verify-token'),
    verifyToken: jest.fn(),
}));

// Email sender mock
jest.mock('../constants/sendEmailVerificationEmail', () => ({
    sendEmailVerificationEmail: jest.fn(),
}));

// bcrypt mock
jest.mock('bcryptjs', () => ({
    hash: jest.fn(async () => 'hashed'),
    compare: jest.fn(async () => true),
}));

// crypto mock
jest.mock('crypto', () => ({
    randomBytes: jest.fn(() => ({ toString: () => 'session-token' })),
}));

// ... existing code ...
describe('AuthService (unit)', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    // registerUser
    it('registerUser: creates user and sends verification email', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
        (prisma.user.create as jest.Mock).mockResolvedValue({ id: 'u1', email: 'a@e.com' });

        const user = await authService.registerUser('Ali', 'a@e.com', 'pass');

        expect(prisma.user.create).toHaveBeenCalled();
        expect(sendEmailVerificationEmail).toHaveBeenCalledWith('a@e.com', 'Ali', 'email-verify-token');
        expect(user).toEqual({ id: 'u1', email: 'a@e.com' });
    });

    it('registerUser: throws if email exists', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1' });

        await expect(authService.registerUser('Ali', 'a@e.com', 'pass'))
            .rejects.toThrow('Email already in use');
    });

    // verifyEmail
    it('verifyEmail: verifies when token matches and not expired', async () => {
        (verifyToken as jest.Mock).mockReturnValue({ email: 'a@e.com' });
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            id: 'u1',
            email: 'a@e.com',
            emailVerificationToken: 'valid',
            emailVerificationTokenExpires: new Date(Date.now() + 10000),
        });
        (prisma.user.update as jest.Mock).mockResolvedValue({ id: 'u1', isVerified: true });

        const res = await authService.verifyEmail('valid');
        expect(res).toEqual({ id: 'u1', isVerified: true });
    });

    it('verifyEmail: throws on invalid decoded payload', async () => {
        (verifyToken as jest.Mock).mockReturnValue(null);
        await expect(authService.verifyEmail('x')).rejects.toThrow('Invalid or expired verification token');
    });

    // resendVerificationEmail
    it('resendVerificationEmail: enforces cooldown', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            id: 'u1',
            email: 'a@e.com',
            name: 'Ali',
            isVerified: false,
            emailVerificationTokenSentAt: new Date(),
        });

        await expect(authService.resendVerificationEmail('a@e.com')).rejects.toThrow('Please wait');
    });

    it('resendVerificationEmail: sends when allowed', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            id: 'u1', email: 'a@e.com', name: 'Ali', isVerified: false,
            emailVerificationTokenSentAt: new Date(Date.now() - 70_000),
        });
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        const res = await authService.resendVerificationEmail('a@e.com');
        expect(sendEmailVerificationEmail).toHaveBeenCalled();
        expect(res).toEqual({ message: 'Verification email resent successfully' });
    });

    // initiateLogin
    it('initiateLogin: throws if not verified', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1', isVerified: false });
        await expect(authService.initiateLogin({ email: 'a@e.com', password: 'p' }))
            .rejects.toThrow('Please verify your email first');
    });

    it('initiateLogin: returns session token + otp (for testing)', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1', email: 'a@e.com', password: 'hashed', isVerified: true });
        (bcrypt.compare as jest.Mock).mockResolvedValue(true);
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        const res: any = await authService.initiateLogin({ email: 'a@e.com', password: 'p' });
        expect(res.sessionToken).toBe('session-token');
        expect(res.otp).toBeDefined();
    });

    // verifyLoginOtp
    it('verifyLoginOtp: returns tokens on valid OTP', async () => {
        (prisma.user.findFirst as jest.Mock).mockResolvedValue({
            id: 'u1', email: 'a@e.com', loginOtp: 'hashed', loginOtpExpires: new Date(Date.now() + 10000), loginSessionToken: 'session-token', role: 'MEMBER', name: 'Ali', isVerified: true,
        });
        (bcrypt.compare as jest.Mock).mockResolvedValue(true);
        (prisma.user.updateMany as jest.Mock).mockResolvedValue({});
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        const res = await authService.verifyLoginOtp('a@e.com', '123456', 'session-token');
        expect(res).toHaveProperty('accessToken', 'access-token');
        expect(res).toHaveProperty('refreshToken', 'refresh-token');
    });

    // resendLoginOtp
    it('resendLoginOtp: enforces resend cooldown', async () => {
        (prisma.user.findFirst as jest.Mock).mockResolvedValue({
            id: 'u1', email: 'a@e.com', loginSessionToken: 'session-token', loginOtpSentAt: new Date(),
        });

        await expect(authService.resendLoginOtp('a@e.com', 'session-token')).rejects.toThrow('Wait');
    });

    // refreshToken
    it('refreshToken: throws if payload invalid', async () => {
        await expect(authService.refreshToken('rt', {} as any)).rejects.toThrow('Invalid refresh token payload');
    });

    it('refreshToken: throws if token mismatch', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1', refreshToken: 'another' });
        await expect(authService.refreshToken('rt', { userId: 'u1' })).rejects.toThrow('Invalid refresh token');
    });

    // logout
    it('logout: clears refreshToken', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1' });
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        await authService.logout('u1');
        expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: 'u1' }, data: { refreshToken: null } });
    });

    // changePassword
    it('changePassword: validates old vs new and updates', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1', email: 'a@e.com', password: 'hashed' });
        (bcrypt.compare as jest.Mock)
            .mockResolvedValueOnce(true) // old matches
            .mockResolvedValueOnce(false); // new is different
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        await expect(authService.changePassword('a@e.com', 'old', 'new')).resolves.toBeUndefined();
    });

    // forgotPassword
    it('forgotPassword: creates pin and token, stores hashed pin', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'u1', email: 'a@e.com' });
        (prisma.user.update as jest.Mock).mockResolvedValue({});

        const res = await authService.forgotPassword('a@e.com');
        expect(res.pin).toHaveLength(6);
        expect(res.token).toHaveLength('session-token'.length); // same crypto mock length base
    });

    // verifyResetPin
    it('verifyResetPin: invalid when expired', async () => {
        (prisma.user.findFirst as jest.Mock).mockResolvedValue({
            id: 'u1', resetPasswordPin: 'hashed', resetPasswordPinExpires: new Date(Date.now() - 1000),
        });

        const res = await authService.verifyResetPin('a@e.com', '111111');
        expect(res.isValid).toBe(false);
    });

    // resetPassword
    it('resetPassword: throws when token invalid', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            id: 'u1', password: 'hashed', resetPasswordToken: 'tok', resetPasswordPinExpires: new Date(Date.now() + 10000),
        });

        await expect(authService.resetPassword('a@e.com', 'new', 'wrong')).rejects.toThrow('Invalid token');
    });

    // canResendResetPin
    it('canResendResetPin: returns waitSeconds when in cooldown', async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            resetPasswordPinSentAt: new Date(),
            resetPasswordPinExpires: new Date(Date.now() + 10000),
        });

        const res = await authService.canResendResetPin('a@e.com');
        expect(res.canResend === false || typeof res.waitSeconds === 'number').toBe(true);
    });

    // OAuth success shape
    it('handleOAuthSuccess: returns tokens and user', async () => {
        (prisma.user.update as jest.Mock).mockResolvedValue({});
        const res = await authService.handleOAuthSuccess({ id: 'u1', name: 'Ali', email: 'a@e.com', role: 'MEMBER' });
        expect(res).toHaveProperty('accessToken', 'access-token');
        expect(res.user.email).toBe('a@e.com');
    });
});
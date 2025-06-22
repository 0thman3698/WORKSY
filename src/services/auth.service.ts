// 3rd party
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// pages
import { ApiError } from './../utils/apiError';
import prisma from '../config/db';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt';
import {
  IAuthResponse,
  ILogin,
  IRegister,
  IResetPassword,
  ITokens,
} from '../interfaces/auth.interface';

const saltRounds = 10;

export class AuthService {
  private async generateAuthTokens(user: {
    id: string;
    email: string;
    role: string;
  }): Promise<ITokens> {
    const accessToken = generateAccessToken(user.id, user.role);

    const refreshToken = generateRefreshToken(user.id, user.role);

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    return { accessToken, refreshToken };
  }

  async register(userData: IRegister): Promise<IAuthResponse> {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw ApiError.badRequest('Email is already in use');
    }

    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      },
    });

    const tokens = await this.generateAuthTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async login(loginData: ILogin): Promise<IAuthResponse> {
    const user = await prisma.user.findUnique({
      where: { email: loginData.email },
    });

    if (!user) {
      throw ApiError.unauthorized('Incorrect email or password');
    }

    const isPasswordMatch = await bcrypt.compare(loginData.password, user.password);
    if (!isPasswordMatch) {
      throw ApiError.unauthorized('Incorrect email or password');
    }

    const tokens = await this.generateAuthTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar || undefined,
      },
    };
  }

  async refreshToken(refreshToken: string, decoded: any): Promise<ITokens> {
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || user.refreshToken !== refreshToken) {
      throw ApiError.unauthorized('Invalid refresh token');
    }
    const tokens = await this.generateAuthTokens(user);
    return tokens;
  }

  async logout(userId: string): Promise<void> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw ApiError.notFound('User is not found');
    }
    await prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw ApiError.notFound('No user with this email');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: new Date(Date.now() + 10 * 60 * 1000),
      },
    });
    return resetToken;
  }

  async resetPassword({ token, password }: IResetPassword): Promise<void> {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
          gte: new Date()
        }
      }
    });

    if (!user) {
      throw ApiError.notFound('Token is invalid or has expired');
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });
  }
}

export const authService = new AuthService();

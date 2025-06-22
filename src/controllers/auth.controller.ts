import { Request, Response } from 'express';
// pages
import { sendEmail } from '../utils/sendEmail';
import { createResetPasswordTemplate } from '../constants/emailTemplates';
import { ILogin, IRegister } from '../interfaces/auth.interface';
import { ApiResponse } from '../utils/apiResponse';
import { authService } from '../services/auth.service';
import { verifyToken } from '..//utils/jwt';
import { ApiError } from '..//utils/apiError';
import { log } from 'console';

export default class AuthController {
  static async register(req: Request<{}, {}, IRegister, {}>, res: Response) {
    const userData: IRegister = req.body;
    const authResponse = await authService.register(userData);
    return new ApiResponse(res).created(authResponse, 'User registered successfully');
  }

  static async login(req: Request<{}, {}, ILogin, {}>, res: Response) {
    const userData = req.body;
    const authResponse = await authService.login(userData);
    return new ApiResponse(res).success(authResponse, 'Login successful');
  }

  static async refreshToken(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw ApiError.unauthorized('No refresh token');

    const decoded = verifyToken(refreshToken);
    log(decoded);
    if (!decoded?.userId) {
      throw ApiError.unauthorized('Invalid refresh token');
    }
    // Find user with matching refresh token
    const tokens = await authService.refreshToken(refreshToken, decoded);
    log(tokens);
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/api/auth/refresh-token',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return new ApiResponse(res).success(
      { newToken: tokens.accessToken },
      'Tokens refreshed successfully',
    );
  }

  static async logout(req: Request<{}, {}, { userId: string }, {}>, res: Response) {
    const { userId } = req.body;
    const response = await authService.logout(userId);
    return new ApiResponse(res).success(response, 'User logged out successfully');
  }

  static async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;
    const resetToken = await authService.forgotPassword(email);
    const resetURL = `${req.protocol}://${req.get(
      'host',
    )}/api/v1/users/reset-password/${resetToken}`;
    const html = createResetPasswordTemplate(resetURL);
    // sendEmail(to, subject, message)
    await sendEmail({
      to: email,
      subject: 'Reset your Worksy password',
      html,
    });
    return new ApiResponse(res).success('Reset token sent to email');
  }

  static async resetPassword(req: Request, res: Response) {
    const { token } = req.params;
    const { password } = req.body;
    await authService.resetPassword({
      token,
      password,
    });
    return void res.status(200).json({
      message: 'Password has been reset successfully',
    });
  }
}

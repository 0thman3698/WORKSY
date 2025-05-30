import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../config/prisma';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt';
import jwt from 'jsonwebtoken'
import { sendEmail } from '../utils/sendEmail';
import crypto from 'crypto';
import { createResetPasswordTemplate } from '../utils/emailTemplates';

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return void res.status(400).json({ message: 'Email already in use' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {   name, email, password: hashedPassword },
  });
  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id, user.role);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } , accessToken});
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return void res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return void res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id, user.role);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ accessToken });
};

export const refreshToken = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) return void res.status(401).json({ message: 'No refresh token' });

  try {
    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as { userId: string, role: string };
    const newAccessToken = generateAccessToken(payload.userId, payload.role);
    res.status(200).json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: 'Invalid refresh token' });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie('refreshToken');
  res.status(200).json({ message: 'Logged out' });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return void res.status(404).json({ message: 'No user with this email' });
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  await prisma.user.update({
    where: { email },
    data: {
      passwordResetToken: hashedToken,
      passwordResetExpires: new Date(Date.now() + 10 * 60 * 1000) 
    }
  });


  const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`
  const html = createResetPasswordTemplate(resetURL);


  // sendEmail(to, subject, message)
  await sendEmail({
    to: email,
    subject: 'Reset your Worksy password',
    html,
  });

  res.status(200).json({ message: 'Reset token sent to email' });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token } = req.params;
  const { password, passwordConfirm } = req.body;

  if (!password || !passwordConfirm) {
    return void res.status(400).json({ message: 'Please provide both password and passwordConfirm' });
  }

  if (password !== passwordConfirm) {
    return void res.status(400).json({ message: 'Passwords do not match' });
  }

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  const user = await prisma.user.findFirst({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: {
        gte: new Date()
      }
    }
  });

  if (!user) {
    return void res.status(400).json({ message: 'Token is invalid or has expired' });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password:hashedPassword,
      passwordResetToken: null,
      passwordResetExpires: null,
    }
  });


  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id, user.role);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return void res.status(200).json({
    message: 'Password reset successfully',
    accessToken,
  });
};


// import prisma from "../config/db";
// import { generateAccessToken } from "@utils/jwt";
// import {
//     IAuthResponse,
//   ILogin,
//   IRegister,
//   ITokens,
// } from "@interfaces/auth.interface";
// import { badRequest, unauthorized } from "@utils/apiError";
import prisma from "../config/db";
import { generateAccessToken } from "../utils/jwt";
import {
    IAuthResponse,
  ILogin,
  IRegister,
  ITokens,
} from "../interfaces/auth.interface";
import { badRequest, unauthorized } from "../utils/apiError";
import bcrypt from "bcryptjs";

const saltRounds = 10;

// Helper function
async function generateAuthTokens(user: {
  id: string;
  email: string;
  role: string;
}): Promise<ITokens> {
  const accessToken = generateAccessToken(user.id, user.role);

  const refreshToken = generateAccessToken(user.id, user.role);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return { accessToken, refreshToken };
}

// Main Service Functions
export async function register(userData: IRegister): Promise<IAuthResponse> {
  const existingUser = await prisma.user.findUnique({
    where: { email: userData.email },
  });

  if (existingUser) {
    throw badRequest("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    },
  });

  const tokens = await generateAuthTokens(user);

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

export async function login(loginData: ILogin): Promise<IAuthResponse> {
  const user = await prisma.user.findUnique({
    where: { email: loginData.email },
  });

  if (!user) {
    throw unauthorized("Incorrect email or password");
  }

  const isPasswordMatch = await bcrypt.compare(
    loginData.password,
    user.password
  );
  if (!isPasswordMatch) {
    throw unauthorized("Incorrect email or password");
  }

  const tokens = await generateAuthTokens(user);

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

export async function refreshToken(refreshToken: string): Promise<ITokens> {
  // Implementation for token refresh
  throw new Error("Not implemented yet");
}

export async function logout(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { refreshToken: null },
  });
}

// Named exports for all service functions
export const authService = {
  register,
  login,
  logout,
  refreshToken,
};

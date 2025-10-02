import jwt from 'jsonwebtoken';
interface TokenPayload {
  email: string;
  id: string;
  role: string;
}

// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export const generateAccessToken = (id: string, role: string): string => {
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!

  return jwt.sign({ id, role }, ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
};

export const generateRefreshToken = (id: string, role: string): string => {
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!
  return jwt.sign({ id, role }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): TokenPayload => {
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET!) as TokenPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    }
    throw error;
  }
};

export const generateToken = (payload: object, expiresIn: string = '50m'): string => { // 15m 50m for testing
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!
  return jwt.sign(payload, REFRESH_TOKEN_SECRET!, {
    expiresIn: '50m'
  });
};

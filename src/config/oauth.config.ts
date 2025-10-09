// config/oauth.config.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import { VerifyCallback } from 'passport-google-oauth20';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import prisma from "./db";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

// Debug: Check if environment variables are loaded
// console.log('Environment variables check:');
// console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET');
// console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET');
// console.log('MICROSOFT_CLIENT_ID:', process.env.MICROSOFT_CLIENT_ID ? 'SET' : 'NOT SET');
// console.log('MICROSOFT_CLIENT_SECRET:', process.env.MICROSOFT_CLIENT_SECRET ? 'SET' : 'NOT SET');
// console.log('BASE_URL:', process.env.BASE_URL);

// Validate required environment variables
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  // console.error('Missing Google OAuth credentials. Please check your .env file.');
}

if (!process.env.MICROSOFT_CLIENT_ID || !process.env.MICROSOFT_CLIENT_SECRET) {
  // console.error('Missing Microsoft OAuth credentials. Please check your .env file.');
}

if (!process.env.BASE_URL) {
  // console.error('Missing BASE_URL. Please check your .env file.');
}

interface OAuthProfile {
  id: string;
  emails?: Array<{ value: string; verified?: boolean }>;
  displayName?: string;
  name?: {
    givenName?: string;
    familyName?: string;
  };
  photos?: Array<{ value: string }>;
  provider: string;
}

// Serialize user for session
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
      },
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google OAuth Strategy - only configure if credentials are available
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BASE_URL}/api/v1/auth/google/callback`,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const oauthProfile: OAuthProfile = {
            id: profile.id,
            emails: profile.emails,
            displayName: profile.displayName,
            name: profile.name,
            photos: profile.photos,
            provider: "google",
          };

          const user = await handleOAuthUser(oauthProfile);
          return done(null, user);
        } catch (error) {
          console.error("Google OAuth error:", error);
          return done(error, false);
        }
      }
    )
  );
  // console.log('Google OAuth strategy configured successfully');
} else {
  // console.warn('Google OAuth strategy not configured - missing credentials');
}

// Microsoft OAuth Strategy - only configure if credentials are available
if (process.env.MICROSOFT_CLIENT_ID && process.env.MICROSOFT_CLIENT_SECRET) {
  passport.use(
    new MicrosoftStrategy(
      {
        clientID: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        callbackURL: `${process.env.BASE_URL}/api/v1/auth/microsoft/callback`,
        scope: ["user.read"],
      },
      async (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
        try {
          const oauthProfile: OAuthProfile = {
            id: profile.id,
            emails: profile.emails,
            displayName: profile.displayName,
            name: profile.name,
            photos: profile.photos,
            provider: "microsoft",
          };

          const user = await handleOAuthUser(oauthProfile);
          return done(null, user);
        } catch (error) {
          console.error("Microsoft OAuth error:", error);
          return done(error, false);
        }
      }
    )
  );
  // console.log('Microsoft OAuth strategy configured successfully');
} else {
  // console.warn('Microsoft OAuth strategy not configured - missing credentials');
}

// Common OAuth user handler
async function handleOAuthUser(profile: OAuthProfile) {
  const email = profile.emails?.[0]?.value;

  if (!email) {
    throw new Error("No email provided by OAuth provider");
  }

  // Check if user exists
  let user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    // Update OAuth info if user exists
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        oauthProvider: profile.provider,
        oauthId: profile.id,
        avatar: profile.photos?.[0]?.value || user.avatar,
        lastLoginAt: new Date(),
      },
    });
  } else {
    // Create new user
    const name = profile.displayName ||
      `${profile.name?.givenName || ""} ${profile.name?.familyName || ""}`.trim() ||
      email.split("@")[0];

    user = await prisma.user.create({
      data: {
        email,
        name,
        oauthProvider: profile.provider,
        oauthId: profile.id,
        avatar: profile.photos?.[0]?.value,
        emailVerified: true, // OAuth emails are considered verified
        lastLoginAt: new Date(),
        // Note: No password for OAuth users
      },
    });
  }

  return user;
}

export default passport;
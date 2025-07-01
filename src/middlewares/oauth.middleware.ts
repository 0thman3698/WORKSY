import session from "express-session";
import passport from "../config/oauth.config";

export const oauthSession = session({
  secret: process.env.SESSION_SECRET || "your-session-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  },
});

export const passportInitialize = passport.initialize();
export const passportSession = passport.session();

// Import Packages
import express from 'express';
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import helmet from 'helmet';
// import hpp from "hpp"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

// Import OAuth configuration (this registers the strategies)
import './config/oauth.config';

// Import Pages
import { authRoutes } from './routes';
import userRoutes from './routes/user.routes'
import workspaceRoutes from './routes/workspace.routes';
import inviteRoutes from './routes/invite.routes';
import { errorHandler } from './middlewares/errorHandler';
import { oauthSession, passportInitialize, passportSession } from './middlewares/oauth.middleware';
import './config/jwt.config';
import { authorizationErrorHandler } from './middlewares/authorization.middleware';
import { protect } from './middlewares/protect';
import googleCalendarRoutes from './routes/integration.routes';
import fileRoutes from './routes/file.routes';

import aiRoutes from "./routes/ai.routes";





// express
const app = express();

// dotenv config
dotenv.config();

app.use(oauthSession);
app.use(passportInitialize);
app.use(passportSession);

// built-in Middlewares
app.use(cors({
  origin: [
    'https://worksy-f.netlify.app',
    'https://www.worksy-f.netlify.app',
    'http://localhost:4000'
  ],
  credentials: true,
}));
app.use(
  express.json({
    limit: '20kb',
  }),
);
app.use(cookieParser());
app.use(helmet());
// app.use(hpp())

const limiter = <RateLimitRequestHandler>rateLimit({
  windowMs: 15 * 1000 * 60,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});

// Middlewares
app.use('/api', limiter);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', protect, userRoutes)
app.use('/api/v1/workspace', protect, workspaceRoutes);
app.use('/api/v1/invite', protect, inviteRoutes);
// app.use("/api/v1/workspace", channelRoutes)
app.use('/api/v1/integrations', googleCalendarRoutes);
app.use('/api/v1/files', protect, fileRoutes);


app.use("/api/ai", aiRoutes);






app.get('/', async (req, res) => {
  res.send(`hello from aws`);
});

app.use(authorizationErrorHandler);
app.use(errorHandler);

export default app;

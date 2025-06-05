// Import Packages
import express from 'express';
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import helmet from 'helmet';
// import hpp from "hpp"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import Pages
import { authRoutes } from './routes';
import workspaceRoutes from './routes/workspace.routes';
import inviteRoutes from './routes/invite.routes';
import { errorHandler } from './middlewares/errorHandler';
// express
const app = express();


// dotenv config
dotenv.config();

// built-in Middlewares
app.use(cors());

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
app.use('/api/v1/workspace', workspaceRoutes);
app.use('/api/v1/invite', inviteRoutes);
// app.use("/api/v1/workspace", channelRoutes)

app.get('/', async (req, res) => {
  res.send(`hello`);
});

app.use(errorHandler);


export default app;

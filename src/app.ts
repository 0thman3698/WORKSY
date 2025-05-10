import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from 'hpp'


import authRoutes from './routes/auth.routes';
import workspaceRoutes from './routes/workspace.routes';


dotenv.config();

const app = express();

// Middlewares
app.use(hpp());
app.use(express.json({limit:'20kb'}));
app.use(cookieParser());

app.use(helmet());


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100,
    message: 'Too many requests from this IP, please try again later.'
});

app.use('/api', limiter)



// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/workspace', workspaceRoutes);

app.get('/', async (req, res) => {
  res.send(`hello`);
});

export default app;

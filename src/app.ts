import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api/v1/auth', authRoutes);

app.get('/', async (req, res) => {
  res.send(`hello`);
});

export default app;

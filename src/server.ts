import http from 'http';
import { connectDB } from './config/db';
import app from './app';
import { initSocket } from './socket';

const server = http.createServer(app);

initSocket(server);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  connectDB();
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export { app, server };

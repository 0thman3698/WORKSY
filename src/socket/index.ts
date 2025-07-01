import { Server } from "socket.io";
import http from 'http';
import jwt from "jsonwebtoken";
import { initChannelHandlers } from "./handlers/channelHandlers";
import { initDirectMessageHandlers } from "./handlers/directMessageHandlers";

let io: Server;

export const initSocket = (server: http.Server) => {
    io = new Server(server, {
        cors: { origin: '*', methods: ['GET', 'POST'] },
    });

    io.use((socket, next) => {
        const token = socket.handshake.auth?.token?.split(' ')[1];
        if (!token) return next(new Error('Authentication error: no token'));

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
            socket.data.user = decoded;
            next();
        } catch {
            next(new Error('Authentication error: invalid token'));
        }
    });

    io.on('connection', (socket) => {
        const userId = socket.data.user.id;
        console.log(`🔌 User connected: ${userId}`);

        initChannelHandlers(io, socket);
        initDirectMessageHandlers(io, socket);

        socket.on('disconnect', () => {
            console.log(`❌ User disconnected: ${userId}`);
        });
    });
};
//validation not handelled
const userSocketMap = new Map<string, string>(); // userId → socketId

export const addUserSocket = (userId: string, socketId: string) => {
    userSocketMap.set(userId, socketId);
};

export const removeUserSocket = (socketId: string) => {
    for (const [userId, sId] of userSocketMap.entries()) {
        if (sId === socketId) {
            userSocketMap.delete(userId);
            break;
        }
    }
};

export const getUserSocket = (userId: string) => {
    return userSocketMap.get(userId);
};

export const getAllOnlineUsers = () => {
    return [...userSocketMap.keys()];
};

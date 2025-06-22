// src/utils/validateSocketData.ts
import { ZodSchema, ZodError } from 'zod';
import { Socket } from 'socket.io';

export const validateSocketData = <T>(
    socket: Socket,
    schema: ZodSchema<T>,
    data: unknown,
    eventOnError = 'validation_error'
): T | null => {
    const result = schema.safeParse(data);
    if (!result.success) {
        const firstError = result.error.errors[0]?.message || 'Invalid data';
        socket.emit(eventOnError, { message: firstError });
        return null;
    }

    return result.data;
};

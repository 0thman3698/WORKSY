import { Prisma } from '@prisma/client';

const softDeletedModels = ['workspace', 'channel', 'message']; // عدل حسب الموديلات اللي فيها deletedAt

export const prismaSoftDeleteMiddleware: Prisma.Middleware = async (params, next) => {
    const modelName = params.model?.toLowerCase();

    if (
        modelName &&
        softDeletedModels.includes(modelName) &&
        params.action.startsWith('find')
    ) {
        // لو مفيش where اعمل واحد
        if (!params.args.where) {
            params.args.where = {};
        }

        // لو مفيش deletedAt موجود بالفعل
        if (params.args.where.deletedAt === undefined) {
            params.args.where.deletedAt = null;
        }
    }

    return next(params);
};

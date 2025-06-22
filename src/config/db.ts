import { PrismaClient } from '../generated/prisma';
import { prismaSoftDeleteMiddleware } from '../middlewares/prismaSoftDelete';


const prisma = new PrismaClient();
prisma.$use(prismaSoftDeleteMiddleware) //deprecated


export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error', error);
    process.exit(1);
  }
};

export default prisma;

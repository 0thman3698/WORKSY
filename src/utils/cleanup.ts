import prisma from "../config/db";

export async function cleanupDb() {
    const tablenames = await prisma.$queryRaw<
        { tablename: string }[]
    >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

    for (const { tablename } of tablenames) {
        await prisma.$executeRawUnsafe(
            `TRUNCATE TABLE "public"."${tablename}" CASCADE;`
        );
    }
}

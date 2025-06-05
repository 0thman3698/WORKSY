-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_channelId_fkey";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "directMessageThreadId" TEXT,
ADD COLUMN     "isEdited" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "channelId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "DirectMessageThread" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectMessageThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnDM" (
    "userId" TEXT NOT NULL,
    "dmId" TEXT NOT NULL,

    CONSTRAINT "UserOnDM_pkey" PRIMARY KEY ("userId","dmId")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_directMessageThreadId_fkey" FOREIGN KEY ("directMessageThreadId") REFERENCES "DirectMessageThread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDM" ADD CONSTRAINT "UserOnDM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDM" ADD CONSTRAINT "UserOnDM_dmId_fkey" FOREIGN KEY ("dmId") REFERENCES "DirectMessageThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

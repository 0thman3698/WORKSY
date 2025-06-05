/*
  Warnings:

  - You are about to drop the column `directMessageThreadId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `DirectMessageThread` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DirectMessageThread" DROP CONSTRAINT "DirectMessageThread_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_directMessageThreadId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnDM" DROP CONSTRAINT "UserOnDM_dmId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "directMessageThreadId",
ADD COLUMN     "directMessageConversationId" TEXT;

-- DropTable
DROP TABLE "DirectMessageThread";

-- CreateTable
CREATE TABLE "DirectMessageConversation" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectMessageConversation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_directMessageConversationId_fkey" FOREIGN KEY ("directMessageConversationId") REFERENCES "DirectMessageConversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectMessageConversation" ADD CONSTRAINT "DirectMessageConversation_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDM" ADD CONSTRAINT "UserOnDM_dmId_fkey" FOREIGN KEY ("dmId") REFERENCES "DirectMessageConversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

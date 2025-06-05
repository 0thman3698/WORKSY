/*
  Warnings:

  - Added the required column `workspaceId` to the `DirectMessageThread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DirectMessageThread" ADD COLUMN     "workspaceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DirectMessageThread" ADD CONSTRAINT "DirectMessageThread_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

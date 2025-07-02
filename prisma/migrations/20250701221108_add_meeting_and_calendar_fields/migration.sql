-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleAccessToken" TEXT,
ADD COLUMN     "googleCalendarId" TEXT,
ADD COLUMN     "googleRefreshToken" TEXT;

-- CreateTable
CREATE TABLE "Meeting" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "googleCalendarEventId" TEXT,
    "googleCalendarHtmlLink" TEXT,
    "channelId" TEXT NOT NULL,
    "organizerId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_googleCalendarEventId_key" ON "Meeting"("googleCalendarEventId");

-- CreateIndex
CREATE INDEX "Meeting_channelId_idx" ON "Meeting"("channelId");

-- CreateIndex
CREATE INDEX "Meeting_organizerId_idx" ON "Meeting"("organizerId");

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

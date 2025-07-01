/*
  Warnings:

  - A unique constraint covering the columns `[oauth_provider,oauth_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerificationToken" TEXT,
ADD COLUMN     "emailVerificationTokenExpires" TIMESTAMP(3),
ADD COLUMN     "email_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_login_at" TIMESTAMP(3),
ADD COLUMN     "login_otp" TEXT,
ADD COLUMN     "login_otp_expires" TIMESTAMP(3),
ADD COLUMN     "login_otp_sent_at" TIMESTAMP(3),
ADD COLUMN     "login_session_token" TEXT,
ADD COLUMN     "oauth_id" TEXT,
ADD COLUMN     "oauth_provider" TEXT,
ADD COLUMN     "resetPasswordPinSentAt" TIMESTAMP(3),
ADD COLUMN     "resetPasswordToken" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_oauth_provider_oauth_id_key" ON "User"("oauth_provider", "oauth_id");

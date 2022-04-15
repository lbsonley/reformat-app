/*
  Warnings:

  - You are about to drop the column `heroJourneyProgress` on the `Profile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Modules" AS ENUM ('first', 'second', 'third');

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "heroJourneyProgress",
ADD COLUMN     "currentModule" "Modules";

/*
  Warnings:

  - You are about to drop the column `activeStudent` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "activeStudent";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activeStudent" BOOLEAN NOT NULL DEFAULT true;

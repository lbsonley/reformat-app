/*
  Warnings:

  - You are about to drop the column `talentEnergy` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TalentLevels" AS ENUM ('ego', 'emotion', 'tao');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "talentEnergy",
ADD COLUMN     "talentEnergyId" "TalentEnergies",
ADD COLUMN     "talentLevelId" "TalentLevels";

-- CreateTable
CREATE TABLE "TalentLevel" (
    "id" "TalentLevels" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TalentLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentEnergy" (
    "id" "TalentEnergies" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TalentEnergy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_talentLevelId_fkey" FOREIGN KEY ("talentLevelId") REFERENCES "TalentLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_talentEnergyId_fkey" FOREIGN KEY ("talentEnergyId") REFERENCES "TalentEnergy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

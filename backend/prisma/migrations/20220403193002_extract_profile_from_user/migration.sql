/*
  Warnings:

  - You are about to drop the column `animal` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `archetypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `heroJourneyProgress` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lifeJourneyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `talent` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `talentEnergyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `talentLevelId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_archetypeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_lifeJourneyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_talentEnergyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_talentLevelId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "animal",
DROP COLUMN "archetypeId",
DROP COLUMN "heroJourneyProgress",
DROP COLUMN "lifeJourneyId",
DROP COLUMN "talent",
DROP COLUMN "talentEnergyId",
DROP COLUMN "talentLevelId";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "animal" TEXT,
    "archetypeId" "Archetypes",
    "lifeJourneyId" "LifeJourneys",
    "talent" TEXT,
    "talentLevelId" "TalentLevels",
    "talentEnergyId" "TalentEnergies",
    "heroJourneyProgress" "Archetypes",

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Archetype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_lifeJourneyId_fkey" FOREIGN KEY ("lifeJourneyId") REFERENCES "LifeJourney"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_talentLevelId_fkey" FOREIGN KEY ("talentLevelId") REFERENCES "TalentLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_talentEnergyId_fkey" FOREIGN KEY ("talentEnergyId") REFERENCES "TalentEnergy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

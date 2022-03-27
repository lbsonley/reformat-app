-- CreateEnum
CREATE TYPE "Archetypes" AS ENUM ('mentor', 'herald', 'gatekeeper', 'joker');

-- CreateEnum
CREATE TYPE "LifeJourneys" AS ENUM ('learn', 'stand', 'resolve');

-- CreateEnum
CREATE TYPE "TalentEnergies" AS ENUM ('push', 'neutral', 'pull');

-- CreateEnum
CREATE TYPE "Languages" AS ENUM ('de', 'en', 'fr', 'it');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "language" "Languages" NOT NULL,
    "animal" TEXT,
    "talent" TEXT,
    "talentEnergy" "TalentEnergies",
    "heroJourneyProgress" "Archetypes",
    "archetypeId" "Archetypes",
    "lifeJourneyId" "LifeJourneys",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Archetype" (
    "id" "Archetypes" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Archetype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LifeJourney" (
    "id" "LifeJourneys" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LifeJourney_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Archetype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lifeJourneyId_fkey" FOREIGN KEY ("lifeJourneyId") REFERENCES "LifeJourney"("id") ON DELETE SET NULL ON UPDATE CASCADE;

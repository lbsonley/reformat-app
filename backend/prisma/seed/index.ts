import { PrismaClient } from '@prisma/client';
import archetypeData from './data/archetypes';
import lifeJourneyData from './data/life-journeys';
import talentEnergyData from './data/talent-energies';
import talentLevelData from './data/talent-levels';
import userData from './data/users';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const archetypePromises = archetypeData.map(async (archetype) =>
    prisma.archetype.create({
      data: archetype,
    })
  );

  const lifeJourneyPromises = lifeJourneyData.map(async (lifeJourney) =>
    prisma.lifeJourney.create({
      data: lifeJourney,
    })
  );

  const talentEnergyPromises = talentEnergyData.map(async (talentEnergy) =>
    prisma.talentEnergy.create({
      data: talentEnergy,
    })
  );

  const talentLevelPromises = talentLevelData.map(async (talentLevel) =>
    prisma.talentLevel.create({
      data: talentLevel,
    })
  );

  const userPromises = userData.map(async (user) =>
    prisma.user.create({
      data: user,
    })
  );

  const promises = [
    ...archetypePromises,
    ...lifeJourneyPromises,
    ...talentEnergyPromises,
    ...talentLevelPromises,
    ...userPromises,
  ];

  Promise.all(promises);
  console.log(`Seeding finished.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

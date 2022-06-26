import {
  Prisma,
  Archetypes,
  LifeJourneys,
  TalentEnergies,
  TalentLevels,
} from '@prisma/client';

const userData: Prisma.UserCreateInput[] = [
  {
    id: '1',
    firstName: 'Ben',
    lastName: 'Sonley',
    email: 'lbsonley@gmail.com',
    profile: {
      create: {
        language: 'en',
        activeStudent: false,
        animal: 'sea otter',
        talent: 'removing barriers',
        currentModule: 'first',
        archetype: {
          connect: {
            id: Archetypes.mentor,
          },
        },
        lifeJourney: {
          connect: {
            id: LifeJourneys.learn,
          },
        },
        talentEnergy: {
          connect: {
            id: TalentEnergies.push,
          },
        },
        talentLevel: {
          connect: {
            id: TalentLevels.tao,
          },
        },
      },
    },
  },
  {
    id: '2',
    firstName: 'Patrizia',
    lastName: 'Sonley',
    email: 'patrizia.sonley@gmail.com',
    profile: {
      create: {
        language: 'de',
        activeStudent: true,
        animal: 'black panther',
        archetype: {
          connect: {
            id: Archetypes.gatekeeper,
          },
        },
        lifeJourney: {
          connect: {
            id: LifeJourneys.stand,
          },
        },
        talent: 'auf den punkt entwicklung anzustossen',
        talentEnergy: {
          connect: {
            id: TalentEnergies.neutral,
          },
        },
        talentLevel: {
          connect: {
            id: TalentLevels.tao,
          },
        },
        currentModule: 'third',
      },
    },
  },
];

export default userData;

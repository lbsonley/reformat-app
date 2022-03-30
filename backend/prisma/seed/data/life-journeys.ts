import { Prisma } from '@prisma/client';

const lifeJourneyData: Prisma.LifeJourneyCreateInput[] = [
  {
    id: 'learn',
    name: 'Learn',
  },
  {
    id: 'stand',
    name: 'Stand',
  },
  {
    id: 'resolve',
    name: 'Resolve',
  },
];

export default lifeJourneyData;

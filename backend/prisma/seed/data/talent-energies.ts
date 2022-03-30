import { Prisma } from '@prisma/client';

const talentEnergyData: Prisma.TalentEnergyCreateInput[] = [
  {
    id: 'push',
    name: 'Push',
  },
  {
    id: 'neutral',
    name: 'Neutral',
  },
  {
    id: 'pull',
    name: 'Pull',
  },
];

export default talentEnergyData;

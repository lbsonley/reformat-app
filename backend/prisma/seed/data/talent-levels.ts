import { Prisma } from '@prisma/client';

const talentLevelData: Prisma.TalentLevelCreateInput[] = [
  {
    id: 'ego',
    name: 'Ego',
  },
  {
    id: 'emotion',
    name: 'Emotion',
  },
  {
    id: 'tao',
    name: 'Tao',
  },
];

export default talentLevelData;

import { Prisma } from '@prisma/client';

const archetypeData: Prisma.ArchetypeCreateInput[] = [
  {
    id: 'mentor',
    name: 'Mentor',
  },
  {
    id: 'herald',
    name: 'Herald',
  },
  {
    id: 'gatekeeper',
    name: 'Gatekeeper',
  },
  {
    id: 'joker',
    name: 'Joker',
  },
];

export default archetypeData;

import { Prisma } from '@prisma/client';

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Ben',
    lastName: 'Sonley',
    email: 'lbsonley@gmail.com',
    animal: 'Sea Otter',
    talent: 'Remove barriers to enable fearlessness',
    language: 'en',
  },
  {
    firstName: 'Patrizia',
    lastName: 'Sonley',
    email: 'patrizia.sonley@gmail.com',
    animal: 'Puma',
    talent: 'Bringe es auf den punkt um entwicklung anzustossen',
    language: 'de',
  },
];

export default userData;

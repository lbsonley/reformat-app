import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

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
    talent: 'Bringe es auf den punkt um entwicklung zu starten',
    language: 'de',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  const promises = userData.map(async (user) =>
    prisma.user.create({
      data: user,
    })
  );

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

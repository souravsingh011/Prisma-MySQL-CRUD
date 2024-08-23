import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      { name: 'Adnan Halilovic', description: 'Software development things', subscribers: 514, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 2', description: 'Software development things', subscribers: 515, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 3', description: 'Software development things', subscribers: 516, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 4', description: 'Software development things', subscribers: 517, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
    ];

    const channel = { name: 'Adnan Halilovic 5', description: 'Software development things', subscribers: 601, link: 'https://www.youtube.com/c/AdnanHalilovicDev' };

    const res = await prisma.youtube_channels.createMany({
      // Similarly we can use create to push single data.
      data, // Sending all the present inside the data object
      // data:  channel, // Just to add single data
      skipDuplicates: true,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();

// npx ts-node src/create.ts // Following is the command to run execute the create operation

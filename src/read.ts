import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.youtube_channels.findMany();
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

// npx ts-node src/read.ts // Following is the command to run execute the read operation

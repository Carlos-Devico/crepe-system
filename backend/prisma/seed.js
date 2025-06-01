import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      { nome: 'Crepe de Nutella', preco: 15.9 },
      { nome: 'Crepe de Frango com Catupiry', preco: 17.5 },
      { nome: 'Crepe de Banana com Canela', preco: 14.0 },
    ],
  });

  console.log('🌱 Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

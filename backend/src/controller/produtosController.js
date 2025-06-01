import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarProdutos = async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
};

export const criarProduto = async (req, res) => {
  try {
    const { nome, preco } = req.body;

    const novoProduto = await prisma.produto.create({
      data: {
        nome,
        preco: parseFloat(preco),
      },
    });

    res.status(201).json(novoProduto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar produto' });
  }
};

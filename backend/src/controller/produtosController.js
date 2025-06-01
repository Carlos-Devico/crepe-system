import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const listarProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};

export const criarProduto = async (req, res) => {
  const { nome, preco, descricao } = req.body;
  try {
    const novoProduto = await prisma.produto.create({
      data: { nome, preco, descricao },
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, preco, descricao } = req.body;
  try {
    const produtoAtualizado = await prisma.produto.update({
      where: { id: Number(id) },
      data: { nome, preco, descricao },
    });
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

export const deletarProduto = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.produto.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};

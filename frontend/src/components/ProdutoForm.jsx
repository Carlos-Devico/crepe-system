import React, { useState } from 'react';
import { criarProduto } from '../services/produtos';

export default function ProdutoForm({ onProdutoCriado }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !preco) return alert('Preencha nome e preço');

    try {
      const novoProduto = await criarProduto({ nome, preco: parseFloat(preco) });
      setNome('');
      setPreco('');
      onProdutoCriado(novoProduto);
    } catch (error) {
      alert('Erro ao criar produto');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar
      </button>
    </form>
  );
}

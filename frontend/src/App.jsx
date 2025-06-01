import React, { useEffect, useState } from 'react';
import { getProdutos } from './services/produtos';
import ProdutoForm from './components/ProdutoForm';

export default function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getProdutos();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  function handleProdutoCriado(novoProduto) {
    setProdutos([...produtos, novoProduto]);
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <ProdutoForm onProdutoCriado={handleProdutoCriado} />
      <ul>
        {produtos.length === 0 ? (
          <li>Nenhum produto encontrado</li>
        ) : (
          produtos.map((p) => (
            <li key={p.id} className="mb-2">
              <strong>{p.nome}</strong> - R$ {p.preco.toFixed(2)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

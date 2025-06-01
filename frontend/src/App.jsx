
// import './App.css'
// import './index.css';


// function App() {
 

//   return (
//     <>
     
//      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-white">Tailwind CSS está funcionando!</h1>
//     </div>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import { getProdutos } from './services/produtos';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProdutos();
      setProdutos(data);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Lista de Produtos</h1>
      <ul className="space-y-4">
        {produtos.map((produto) => (
          <li
            key={produto.id}
            className="bg-white text-black rounded-xl p-4 shadow-md"
          >
            <strong>{produto.nome}</strong> — R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


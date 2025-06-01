import express from "express";
import produtosRoutes from "./routes/produtos.js";
import cors from 'cors';


const app = express();

app.use(cors());// libera acesso para todas as origens — para desenvolvimento está ok

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/produtos', produtosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

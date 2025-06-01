import express from "express";
import produtosRoutes from "./routes/produtos.js";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/produtos', produtosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

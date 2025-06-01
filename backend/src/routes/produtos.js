import express from 'express';
import { listarProdutos, criarProduto } from '../controller/produtosController.js';

const router = express.Router();

router.get('/', listarProdutos);
router.post('/', criarProduto);

export default router;

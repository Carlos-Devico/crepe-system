import api from './api';

export async function getProdutos() {
  const response = await api.get('/produtos');
  return response.data;
}

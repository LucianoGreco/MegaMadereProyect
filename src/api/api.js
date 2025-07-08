import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const getHerrajes = () => axios.get(`${API_BASE}/herrajes`);
export const getMelaminas = () => axios.get(`${API_BASE}/melaminas`);
export const getRevestimientos = () => axios.get(`${API_BASE}/revestimientos`);
export const getRevestimientosNormalizados = () => axios.get(`${API_BASE}/revestimientos/normalizado`);
export const getTodosLosProductos = () => axios.get(`${API_BASE}/productos-todos`);

export { API_BASE };

import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

// Herrajes
export const getHerrajes = () => axios.get(`${API_BASE}/herrajes`);

// Melaminas
export const getMelaminas = () => axios.get(`${API_BASE}/melaminas`);

// Revestimientos (raw)
export const getRevestimientos = () => axios.get(`${API_BASE}/revestimientos`);

// Revestimientos normalizados
export const getRevestimientosNormalizados = () =>
  axios.get(`${API_BASE}/revestimientos/normalizado`);

// Todos los productos
export const getTodosLosProductos = () =>
  axios.get(`${API_BASE}/productos-todos`);

export { API_BASE };

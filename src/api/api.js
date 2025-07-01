  import axios from 'axios';

  export const URL_BASE = 'http://localhost:4000';

  // Obtener Herrajes
  export const fetchHerrajes = async () => {
    try {
      const res = await axios.get(`${URL_BASE}/api/herrajes`);
      return res.data?.data || [];
    } catch (error) {
      console.error('❌ Error al obtener herrajes desde la API:', error);
      return [];
    }
  };
export const obtenerMelaminas = async () => {
  try {
    const res = await axios.get(`${URL_BASE}/api/melaminas`);
    return res.data?.data || [];
  } catch (error) {
    console.error('❌ Error al obtener melaminas desde la API:', error);
    return [];
  }
};
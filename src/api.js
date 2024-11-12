// api.js
import data from './data/data.js';

const getNovedades      = async () => data.secciones?.novedades || {};
const getDisenios       = async () => data.secciones?.disenios || {};
const getEnvios         = async () => data.secciones?.envios || {};
const getEquipamientos  = async () => data.secciones?.equipamientos || {};
const getMuebles        = async () => data.secciones?.muebles || {};
const getMelaminas      = async () => data.secciones?.melaminas || {};
const getContactos      = async () => data.secciones?.contactos || {};

const api = {
  getNovedades,
  getDisenios,
  getEnvios,
  getEquipamientos,
  getMelaminas,
  getMuebles,
  getContactos,
};

export default api;

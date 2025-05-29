// src/data/image/gestorImage.js

const logos              = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds        = import.meta.glob('@/assets/background/*', { eager: true });
const cards              = import.meta.glob('@/assets/cardHome/*', { eager: true });
const icons              = import.meta.glob('@/assets/icons/*', { eager: true });

// Melaminas
const melaminasChicas    = import.meta.glob('@/assets/products/melaminas/chicas/*', { eager: true });
const melaminasGrandes   = import.meta.glob('@/assets/products/melaminas/grandes/*', { eager: true });

// Herrajes
const herrajesMuebles = import.meta.glob('@/assets/products/herrajes/muebles/*.{jpg,jpeg,png}', { eager: true });

// Muebles
const mueblesDisenio = import.meta.glob('@/assets/products/muebles/*.{jpg,jpeg,png}', { eager: true });





function generarObjetos(imagenes) {
  return Object.fromEntries(
    Object.entries(imagenes).map(([path, mod]) => {
      const name = path.split('/').pop().split('.')[0].toLowerCase();
      const src = mod.default || mod;
      return [name, src];
    })
  );
}

export const imagenLogo       = generarObjetos(logos);
export const backgroundPage   = generarObjetos(backgrounds);
export const CardHomeImage    = generarObjetos(cards);
export const imagenesChicas   = generarObjetos(melaminasChicas);
export const imagenesGrandes  = generarObjetos(melaminasGrandes);
export const iconosRedes      = generarObjetos(icons);
export const imagenesHerrajes = generarObjetos(herrajesMuebles); // ← EXPORTA AQUI
export const mueble          = generarObjetos(mueblesDisenio); // ← EXPORTA AQUI

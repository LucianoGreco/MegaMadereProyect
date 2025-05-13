// Imagenes | Importación automática
const logos              = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds        = import.meta.glob('@/assets/background/*', { eager: true });
const cards              = import.meta.glob('@/assets/cardHome/*', { eager: true });
const melaminasChicas    = import.meta.glob('@/assets/products/melaminas/chicas/*', { eager: true });
const melaminasGrandes   = import.meta.glob('@/assets/products/melaminas/grandes/*', { eager: true });
const icons              = import.meta.glob('@/assets/icons/*', { eager: true });


// Función para convertir rutas en objetos { nombre: imagen }
function generarObjetos(imagenes) {
  return Object.fromEntries(
    Object.entries(imagenes).map(([path, mod]) => {
      const name = path.split('/').pop().split('.')[0].toLowerCase(); // normalizamos
      const src = mod.default || mod; // fallback en caso no tenga `.default`
      return [name, src];
    })
  );
}

// Exportaciones
export const imagenLogo       = generarObjetos(logos);
export const backgroundPage   = generarObjetos(backgrounds);
export const CardHomeImage    = generarObjetos(cards);
export const imagenesChicas   = generarObjetos(melaminasChicas);
export const imagenesGrandes  = generarObjetos(melaminasGrandes);
export const iconosRedes      = generarObjetos(icons);


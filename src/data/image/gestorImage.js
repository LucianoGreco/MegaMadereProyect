const logos         = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds   = import.meta.glob('@/assets/background/*', { eager: true });
const cards         = import.meta.glob('@/assets/cardHome/*', { eager: true });
const icons         = import.meta.glob('@/assets/icons/*', { eager: true });

const melaminasChicas  = import.meta.glob('@/assets/products/melaminas/chicas/*', { eager: true });
const melaminasGrandes = import.meta.glob('@/assets/products/melaminas/grandes/*', { eager: true });
const herrajesMuebles  = import.meta.glob('@/assets/products/herrajes/muebles/*.{jpg,jpeg,png}', { eager: true });
const mueblesDisenio   = import.meta.glob('@/assets/products/muebles/*.{jpg,jpeg,png}', { eager: true });

// Revestimientos categorizados
const adhesivos     = import.meta.glob('@/assets/products/revestimientos/*/*/*.{jpg,jpeg,png}', { eager: true });
const ceramicos     = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}',{ eager: true });
const wallstickers  = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}',{ eager: true });


// Agregá más categorías si las usás: wallstickers, empapelados, etc.

// Utilidad: agrupa imágenes por el nombre base (sin extensión y sin sufijo numérico)
function agruparImagenesPorProducto(imagenes) {
  const agrupado = {};

  for (const [path, mod] of Object.entries(imagenes)) {
    const nombreArchivo = path.split('/').pop().split('.')[0].toLowerCase(); 
    const claveProducto = nombreArchivo; // Utiliza el nombre completo del archivo

    if (!agrupado[claveProducto]) agrupado[claveProducto] = [];
    agrupado[claveProducto].push(mod.default || mod);
  }

  // Aseguramos orden alfabético por si son múltiples imágenes
  for (const key in agrupado) {
    agrupado[key].sort();
  }

  return agrupado;
}

// Utilidad: exporta como objeto plano con clave = nombre del archivo (sin extensión)
function generarObjetos(imagenes) {
  return Object.fromEntries(
    Object.entries(imagenes).map(([path, mod]) => {
      const name = path.split('/').pop().split('.')[0].toLowerCase();
      const src = mod.default || mod;
      return [name, src];
    })
  );
}

// Exportación principal
export const imagenLogo       = generarObjetos(logos);
export const backgroundPage   = generarObjetos(backgrounds);
export const CardHomeImage    = generarObjetos(cards);
export const imagenesChicas   = generarObjetos(melaminasChicas);
export const imagenesGrandes  = generarObjetos(melaminasGrandes);
export const iconosRedes      = generarObjetos(icons);
export const imagenesHerrajes = generarObjetos(herrajesMuebles);
export const mueble           = generarObjetos(mueblesDisenio);

// Revestimientos organizados por categoría
export const imagenesRevestimiento = {
  pared: {
    adhesivos: agruparImagenesPorProducto(adhesivos),
    ceramicos: agruparImagenesPorProducto(ceramicos),
    wallstickers: agruparImagenesPorProducto(wallstickers)
  }
};

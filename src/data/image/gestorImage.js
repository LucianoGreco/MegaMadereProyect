// src/data/image/gestorImage.js

// Logo de la empresa
const logos = import.meta.glob('@/assets/logo/*', { eager: true });

// Backgrounds por página
const backgrounds = import.meta.glob('@/assets/background/*', { eager: true });

// Imagen de fondo para cards en la Home
const cards = import.meta.glob('@/assets/cardHome/*', { eager: true });

// Iconos para redes sociales
const icons = import.meta.glob('@/assets/icons/*', { eager: true });

// Página | Herrajes
const herrajesMuebles = import.meta.glob('@/assets/products/herrajes/*/*.{jpg,jpeg,png}', { eager: true });

// Página | Melaminas
// 🚧 Deprecated: solo usar 'melaminasGrandes'
const melaminasChicas = import.meta.glob('@/assets/products/melaminas/chicas/*', { eager: true });
const melaminasGrandes = import.meta.glob('@/assets/products/melaminas/grandes/*', { eager: true });

// Página | Muebles
const mueblesDisenio = import.meta.glob('@/assets/products/muebles/*.{jpg,jpeg,png}', { eager: true });

// Página | Revestimientos (estructura anidada por tipo)
const adhesivos = import.meta.glob('@/assets/products/revestimientos/*/*/*.{jpg,jpeg,png}', { eager: true });
const ceramicos = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}', { eager: true });
const wallstickers = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}', { eager: true });

// Página | Simulador
const simuladorImagenes = import.meta.glob('@/assets/products/simulador/*.{jpg,jpeg,png}', { eager: true });

/**
 * Agrupa imágenes por nombre base, sin extensión y sin sufijo numérico final
 * Ej: "amortiguador-aplicar1-1" → "amortiguador-aplicar1"
 */
function agruparImagenesPorProducto(imagenes) {
  const agrupado = {};
  for (const [path, mod] of Object.entries(imagenes)) {
    const nombreArchivo = path.split('/').pop().split('.')[0].toLowerCase();
    const claveProducto = nombreArchivo.replace(/-\d+$/, '');
    if (!agrupado[claveProducto]) agrupado[claveProducto] = [];
    agrupado[claveProducto].push(mod.default || mod);
  }
  for (const key in agrupado) {
    agrupado[key].sort();
  }
  return agrupado;
}

/**
 * Genera un objeto plano con clave = nombre del archivo (sin extensión)
 */
function generarObjetos(imagenes) {
  return Object.fromEntries(
    Object.entries(imagenes).map(([path, mod]) => {
      const name = path.split('/').pop().split('.')[0].toLowerCase();
      const src = mod.default || mod;
      return [name, src];
    })
  );
}

// Exportaciones
export const imagenLogo = generarObjetos(logos);
export const backgroundPage = generarObjetos(backgrounds);
export const CardHomeImage = generarObjetos(cards);
export const imagenesChicas = generarObjetos(melaminasChicas); // 🚧 Deprecated
export const imagenesGrandes = generarObjetos(melaminasGrandes);
export const iconosRedes = generarObjetos(icons);
export const muebles = generarObjetos(mueblesDisenio);
export const imagenesSimulador = generarObjetos(simuladorImagenes);

export const imagenesHerrajes = agruparImagenesPorProducto(herrajesMuebles);

export const imagenesRevestimiento = {
  pared: {
    adhesivos: agruparImagenesPorProducto(adhesivos),
    ceramicos: agruparImagenesPorProducto(ceramicos),
    wallstickers: agruparImagenesPorProducto(wallstickers),
  },
};

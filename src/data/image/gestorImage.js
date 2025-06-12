// LogoEmpresa
const logos         = import.meta.glob('@/assets/logo/*', { eager: true });

// Background | Paginas
const backgrounds   = import.meta.glob('@/assets/background/*', { eager: true });

// Home | Background cardHome
const cards         = import.meta.glob('@/assets/cardHome/*', { eager: true });

// Iconos - Redes sociales (facebook,instagram,whatsApp y Gmail)
const icons         = import.meta.glob('@/assets/icons/*', { eager: true });

// Pagina | Herrajes
const herrajesMuebles  = import.meta.glob('@/assets/products/herrajes/muebles/*.{jpg,jpeg,png}', { eager: true });

// Pagina | Melaminas - 🚧 (Deprecado de imagenes chicas) ❌
const melaminasChicas  = import.meta.glob('@/assets/products/melaminas/chicas/*', { eager: true });
const melaminasGrandes = import.meta.glob('@/assets/products/melaminas/grandes/*', { eager: true });

// Pagina | Muebles
const mueblesDisenio   = import.meta.glob('@/assets/products/muebles/*.{jpg,jpeg,png}', { eager: true });

// Pagina | Revestimientos - 🚧 (Redundancia de Rutas) ❌
const adhesivos     = import.meta.glob('@/assets/products/revestimientos/*/*/*.{jpg,jpeg,png}', { eager: true });
const ceramicos     = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}',{ eager: true });
const wallstickers  = import.meta.glob('@/assets/products/revestimientos/*/*/*/*.{jpg,jpeg,png}',{ eager: true });

// Pagina | Simulador
const simuladorImagenes     = import.meta.glob('@/assets/products/simulador/*.{jpg,jpeg,png}',{ eager: true });
// Pagina | Vinilos

// Pagina | Contactos


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
export const muebles          = generarObjetos(mueblesDisenio);
export const imagenesSimulador  = generarObjetos(simuladorImagenes);


// Revestimientos organizados por categoría
export const imagenesRevestimiento = {
  pared: {
    adhesivos: agruparImagenesPorProducto(adhesivos),
    ceramicos: agruparImagenesPorProducto(ceramicos),
    wallstickers: agruparImagenesPorProducto(wallstickers)
  }
};

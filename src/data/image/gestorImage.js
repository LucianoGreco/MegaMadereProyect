const logos = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds = import.meta.glob('@/assets/background/*', { eager: true });
const icons = import.meta.glob('@/assets/icons/*/*.{jpg,jpeg,png}', { eager: true });
const simuladorArchivos = import.meta.glob('@/assets/products/simulador/*.{jpg,jpeg,png}', { eager: true });
const cards = import.meta.glob('@/assets/cardHome/*', { eager: true });

// ✅ procesar simulador
const procesadasSimulador = {};
for (const path in simuladorArchivos) {
  const key = path.split('/').pop().split('.')[0];
  procesadasSimulador[key] = simuladorArchivos[path].default;
}

// ✅ procesar cards
const procesadasCards = {};
for (const path in cards) {
  const key = path.split('/').pop().split('.')[0];
  procesadasCards[key] = cards[path].default;
}

// ✅ procesar backgrounds (FONDO)
const procesadasBackgrounds = {};
for (const path in backgrounds) {
  const key = path.split('/').pop().split('.')[0];
  procesadasBackgrounds[key] = backgrounds[path].default;
}

// ✅ exportar todo
export const imagenLogo = logos;
export const backgroundPage = procesadasBackgrounds;
export const CardHomeImage = procesadasCards;
export const iconosRedes = icons;
export const imagenesSimulador = procesadasSimulador;

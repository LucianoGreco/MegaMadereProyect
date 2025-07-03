// Logo de la empresa
const logos = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds = import.meta.glob('@/assets/background/*', { eager: true });
const icons = import.meta.glob('@/assets/icons/*/*.{jpg,jpeg,png}', { eager: true });
const simuladorImagenes = import.meta.glob('@/assets/products/simulador/*.{jpg,jpeg,png}', { eager: true });

const cards = import.meta.glob('@/assets/cardHome/*', { eager: true });
const cardImages = {};
for (const path in cards) {
  const key = path.split('/').pop().split('.')[0];
  cardImages[key] = cards[path].default;
}

export const imagenLogo = logos;
export const backgroundPage = backgrounds;
export const CardHomeImage = cardImages;
export const iconosRedes = icons;
export const imagenesSimulador = simuladorImagenes;

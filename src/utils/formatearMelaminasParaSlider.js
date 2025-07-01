export const formatearMelaminasParaSlider = (melaminas) => {
  return melaminas.map((cat) => ({
    categoria: cat.categoria,
    productos: (cat.productos || []).map((prod) => ({
      ...prod,
      imagenes: Array.isArray(prod.imagenes) ? prod.imagenes : [],
    })),
  }));
};

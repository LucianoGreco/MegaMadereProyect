
export const extraerTodasLasImagenes = (productos = []) => {
  return productos.flatMap(producto => producto.imagenes || []);
};
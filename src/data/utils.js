export const crearProducto = (
  id,
  nombre,
  imagenChica,
  imagenGrande,
  descripcion,
  precio = 20000,
  alto = 1830,
  ancho = 2750,
  profundidad = 0,
  espesor_material = 5.5,
) => {
  if (
    typeof precio !== "number" ||
    typeof alto !== "number" ||
    typeof ancho !== "number"
  ) {
    throw new Error("Precio, alto y ancho deben ser numéricos.");
  }
  return {
    id,
    nombre,
    imagenChica,
    imagenGrande,
    descripcion,
    precio,
    medidas: { alto, ancho, profundidad, espesor_material },
  };
};

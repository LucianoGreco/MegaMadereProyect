import { imagenesRevestimiento } from "@/data/image/gestorImage";

const productosRaw = [
  {
    id: "plastiwall-10kg",
    nombre: "Plastiwall 10KG",
    precio: 40088.0,
    descripcion: "Adhesivo de gran capacidad para superficies extensas.",
    estado: "disponible"
  },
  {
    id: "plastiwall-1kg",
    nombre: "Plastiwall 1KG",
    precio: 6425.0,
    descripcion: "Presentación compacta, ideal para detalles y retoques.",
    estado: "disponible"
  },
  {
    id: "plastiwall-4kg",
    nombre: "Plastiwall 4KG",
    precio: 18173.0,
    descripcion: "Formato intermedio con excelente rendimiento.",
    estado: "disponible"
  }
];

// Asignamos las imágenes según el ID
export const adhesivosPared = productosRaw.map((producto) => ({
  ...producto,
  imagenes: imagenesRevestimiento.pared.adhesivos[producto.id] || []
}));

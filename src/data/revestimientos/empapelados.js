import { imagenesRevestimiento } from "@/data/image/gestorImage";

const productosRaw = {
amazing: [
  { nombre: "amazing 408126", precio: 79896.0, id: "amazing-408126-1" },
  { nombre: "amazing 408171", precio: 79896.0, id: "amazing-408171-1" },
  { nombre: "amazing 409437", precio: 79896.0, id: "amazing-409437-1" },
  { nombre: "amazing 418415", precio: 79896.0, id: "amazing-418415-1" },
  { nombre: "amazing 418460", precio: 79896.0, id: "amazing-418460-1" },
  { nombre: "amazing 418477", precio: 79896.0, id: "amazing-418477-1" },
  { nombre: "amazing 418712", precio: 79896.0, id: "amazing-418712-1" },
  { nombre: "amazing 423990", precio: 79896.0, id: "amazing-423990-1" },
  { nombre: "amazing 424003", precio: 79896.0, id: "amazing-424003-1" },
  { nombre: "amazing 424034", precio: 79896.0, id: "amazing-424034-1" },
  { nombre: "amazing 424072", precio: 79896.0, id: "amazing-424072-1" },
  { nombre: "amazing 428209", precio: 79896.0, id: "amazing-428209-1" },
  { nombre: "amazing 428216", precio: 79896.0, id: "amazing-428216-1" },
  { nombre: "amazing 428407", precio: 79896.0, id: "amazing-428407-1" },
  { nombre: "amazing 428414", precio: 79896.0, id: "amazing-428414-1" },
  { nombre: "amazing 429213", precio: 79896.0, id: "amazing-429213-1" },
  { nombre: "amazing 429220", precio: 79896.0, id: "amazing-429220-1" },
  { nombre: "amazing 429237", precio: 79896.0, id: "amazing-429237-1" },
  { nombre: "amazing 429244", precio: 79896.0, id: "amazing-429244-1" },
  { nombre: "amazing 429251", precio: 79896.0, id: "amazing-429251-1" },
  { nombre: "amazing 429268", precio: 79896.0, id: "amazing-429268-1" },
  { nombre: "amazing 429329", precio: 79896.0, id: "amazing-429329-1" },
  { nombre: "amazing 531329", precio: 79896.0, id: "amazing-531329-1" },
  { nombre: "amazing 531336", precio: 79896.0, id: "amazing-531336-1" },
  { nombre: "amazing 531350", precio: 79896.0, id: "amazing-531350-1" },
  { nombre: "amazing 531367", precio: 79896.0, id: "amazing-531367-1" },
  { nombre: "amazing 531381", precio: 79896.0, id: "amazing-531381-1" },
  { nombre: "amazing 531398", precio: 79896.0, id: "amazing-531398-1" },
  { nombre: "amazing 531404", precio: 79896.0, id: "amazing-531404-1" },
  { nombre: "amazing 531442", precio: 79896.0, id: "amazing-531442-1" },
  { nombre: "amazing 531459", precio: 79896.0, id: "amazing-531459-1" },
  { nombre: "amazing 531466", precio: 79896.0, id: "amazing-531466-1" },
  { nombre: "amazing 537901", precio: 79896.0, id: "amazing-537901-1" },
  { nombre: "amazing 537918", precio: 79896.0, id: "amazing-537918-1" },
  { nombre: "amazing 537925", precio: 79896.0, id: "amazing-537925-1" },
  { nombre: "amazing 537932", precio: 79896.0, id: "amazing-537932-1" },
  { nombre: "amazing 539301", precio: 79896.0, id: "amazing-539301-1" },
  { nombre: "amazing 539356", precio: 79896.0, id: "amazing-539356-1" },
  { nombre: "amazing 539462", precio: 79896.0, id: "amazing-539462-1" },
  { nombre: "amazing 539646", precio: 79896.0, id: "amazing-539646-1" },
  { nombre: "amazing 539660", precio: 79896.0, id: "amazing-539660-1" },
  { nombre: "amazing 539943", precio: 79896.0, id: "amazing-539943-1" },
  { nombre: "amazing 541243", precio: 79896.0, id: "amazing-541243-1" },
  { nombre: "amazing 541274", precio: 79896.0, id: "amazing-541274-1" },
  { nombre: "amazing 542424", precio: 79896.0, id: "amazing-542424-1" },
  { nombre: "amazing 543018", precio: 79896.0, id: "amazing-543018-1" },
  { nombre: "amazing 543315", precio: 79896.0, id: "amazing-543315-1" },
  { nombre: "amazing 617115", precio: 79896.0, id: "amazing-617115-1" },
  { nombre: "amazing 617122", precio: 79896.0, id: "amazing-617122-1" },
  { nombre: "amazing 617146", precio: 79896.0, id: "amazing-617146-1" },
  { nombre: "amazing 617177", precio: 79896.0, id: "amazing-617177-1" },
  { nombre: "amazing 617184", precio: 79896.0, id: "amazing-617184-1" },
  { nombre: "amazing 617191", precio: 79896.0, id: "amazing-617191-1" },
  { nombre: "amazing 617429", precio: 79896.0, id: "amazing-617429-1" },
  { nombre: "amazing 617443", precio: 79896.0, id: "amazing-617443-1" },
  { nombre: "amazing 617948", precio: 79896.0, id: "amazing-617948-1" },
  { nombre: "amazing 617955", precio: 79896.0, id: "amazing-617955-1" },
]

};

// Asignamos las imágenes según el ID
const productosArray = Object.values(productosRaw).flat();

export const empapelados = productosArray.map((producto) => ({
  ...producto,
  imagenes: imagenesRevestimiento.pared.ceramicos[producto.id] || [],
}));


// Importamos solo las imágenes de los muebles y las renombramos
import { muebles as imagenesMuebles } from "@/data/image/gestorImage";

// Datos en crudo
const mueblesRaw = [
  {
    id: "placard-sira-1",
    nombre: "placard sira",
    descripcion: "...",
    medidas: "180 x 180 x 55 cm",
    imagenes: [
      "placard-sira1-1",
      "placard-sira1-2",
      "placard-sira1-3",
      "placard-sira1-4",
      "placard-sira1-5",
      "placard-sira1-6",
      "placard-sira2-1",
      "placard-sira2-2",
      "placard-sira2-3",
      "placard-sira2-4",
      "placard-sira2-5",
      "placard-sira2-6",
    ],
  },
  {
    id: "placard-nara-1",
    nombre: "placard nara",
    descripcion: "...",
    medidas: "200 x 200 x 55 cm",
    imagenes: [
      "placard-nara1-1",
      "placard-nara1-2",
      "placard-nara1-3",
    ],
  },
  {
    id: "placard-kioto-1",
    nombre: "placard kioto",
    descripcion: "...",
    medidas: "200 x 220 x 59 cm",
    imagenes: [
      "placard-kioto1-1",
      "placard-kioto1-2",
    ],
  },
  {
    id: "placard-kioto-2",
    nombre: "placard tokio",
    descripcion: "...",
    medidas: "160 x 220 cm",
    imagenes: [
      "placard-kioto2-1",
      "placard-kioto2-2",
    ],
  },
  {
    id: "placard-cairo-1",
    nombre: "placard cairo",
    descripcion: "...",
    medidas: "240 x 220 x 59 cm",
    imagenes: [
      "placard-cairo1-1",
      "placard-cairo1-2",
      "placard-cairo1-3",
      "placard-cairo1-4",
      "placard-cairo1-5",
    ],
  },
  {
    id: "placard-zafiro-1",
    nombre: "placard zafiro",
    descripcion: "...",
    medidas: "150 x 180 cm",
    imagenes: [
      "placard-zafiro1-1",
      "placard-zafiro1-2",
    ],
  },
];

// Asociamos las rutas reales de las imágenes
export const mueblesData = mueblesRaw.map((mueble) => ({
  ...mueble,
  imagenes: mueble.imagenes.map((img) => imagenesMuebles[img] || img),
}));

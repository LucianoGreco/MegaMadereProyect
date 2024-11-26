// articulos.js

import { crearProducto } from '../utils.js';
import { imagenesChicas, imagenesGrandes } from './imagenes.js';

const articulos = {
  aluminio: crearProducto(
    "A001",
    "Aluminio",
    imagenesChicas.aluminio,
    imagenesGrandes.aluminio,
    "Acabado metálico en aluminio, resistente y moderno."
  ),
  amaranto: crearProducto(
    "A002",
    "Amaranto",
    imagenesChicas.amaranto,
    imagenesGrandes.amaranto,
    "Melamina color amaranto de alta durabilidad."
  ),
  amatista: crearProducto(
    "A003",
    "Amatista",
    imagenesChicas.amatista,
    imagenesGrandes.amatista,
    "Tono púrpura profundo inspirado en la piedra amatista."
  ),
  amberes: crearProducto(
    "A004",
    "Amberes",
    imagenesChicas.amberes,
    imagenesGrandes.amberes,
    "Madera de estilo urbano que combina elegancia y funcionalidad."
  ),
  azulLago: crearProducto(
    "A005",
    "Azul Lago",
    imagenesChicas.azulLago,
    imagenesGrandes.azulLago,
    "Tono azul inspirador que evoca tranquilidad."
  ),
  baltico: crearProducto(
    "A006",
    "Báltico",
    imagenesChicas.baltico,
    imagenesGrandes.baltico,
    "Madera de pino báltico, ideal para un estilo nórdico y cálido."
  ),
  blancoNature: crearProducto(
    "A007",
    "Blanco Nature",
    imagenesChicas.blancoNature,
    imagenesGrandes.blancoNature,
    "Acabado blanco natural, perfecto para iluminar cualquier espacio."
  ),
  blancoTundra: crearProducto(
    "A008",
    "Blanco Tundra",
    imagenesChicas.blancoTundra,
    imagenesGrandes.blancoTundra,
    "Acabado blanco puro, perfecto para iluminar ambientes."
  ),
  camellia: crearProducto(
    "A009",
    "Camellia",
    imagenesChicas.camellia,
    imagenesGrandes.camellia,
    "Melamina de color camellia, ideal para ambientes cálidos."
  ),
  carvalhoAserrado: crearProducto(
    "A010",
    "Carvalho Aserrado",
    imagenesChicas.carvalhoAserrado,
    imagenesGrandes.carvalhoAserrado,
    "Acabado de carvalho aserrado, robusto y duradero."
  ),
  carvalhoMezzo: crearProducto(
    "A012",
    "Carvalho Mezzo",
    imagenesChicas.carvalhoMezzo,
    imagenesGrandes.carvalhoMezzo,
    "Madera de carvalho mezzo, con un equilibrio perfecto entre elegancia y resistencia."
  ),
  cedroNature: crearProducto(
    "A013",
    "Cedro Nature",
    imagenesChicas.cedroNature,
    imagenesGrandes.cedroNature,
    "Madera de cedro con un acabado natural, ideal para ambientes cálidos."
  ),
  cedroWoodtext: crearProducto(
    "A014",
    "Cedro Woodtext",
    imagenesChicas.cedroWoodtext,
    imagenesGrandes.cedroWoodtext,
    "Acabado de cedro con textura de madera, perfecto para un toque rústico."
  ),
  ceniza: crearProducto(
    "A015",
    "Ceniza",
    imagenesChicas.ceniza,
    imagenesGrandes.ceniza,
    "Tono ceniza suave, ideal para un estilo contemporáneo."
  ),
  coliseo: crearProducto(
    "A016",
    "Coliseo",
    imagenesChicas.coliseo,
    imagenesGrandes.coliseo,
    "Acabado que evoca la grandeza del Coliseo, perfecto para espacios modernos."
  ),
  
  // deja este comentario para agregar más artículos
};

export default articulos;

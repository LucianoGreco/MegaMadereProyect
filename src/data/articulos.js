import { crearProducto } from "@/data/utils.js";
import { imagenesChicas, imagenesGrandes } from "./imagenes.js";

const articulos = {
  // almendraChica.
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
    "Tono púrpura profundo inspirado en la piedra amatista"
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
    "A009",
    "Blanco Tundra",
    imagenesChicas.blancoTundra,
    imagenesGrandes.blancoTundra,
    "Acabado blanco puro, perfecto para iluminar ambientes."
  ),
  camellia: crearProducto(
    "B999",
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
  ebanoNegro: crearProducto(
    "A017",
    "Ébano Negro",
    imagenesChicas.ebanoNegro,
    imagenesGrandes.ebanoNegro,
    "Madera de ébano negro, elegante y sofisticada."
  ),
  everest: crearProducto(
    "A018",
    "Everest",
    imagenesChicas.everest,
    imagenesGrandes.everest,
    "Melamina inspirada en las montañas, resistente y duradera"
  ),
  gaudi: crearProducto(
    "A019",
    "Gaudí",
    imagenesChicas.gaudi,
    imagenesGrandes.gaudi,
    "Madera inspirada en el estilo de Gaudí, con un diseño único y artístico."
  ),
  grafito: crearProducto(
    "A020",
    "Grafito",
    imagenesChicas.grafito,
    imagenesGrandes.grafito,
    "Acabado en grafito, elegante y sofisticado."
  ),
  grisBasalto: crearProducto(
    "A021",
    "Gris Basalto",
    imagenesChicas.grisBasalto,
    imagenesGrandes.grisBasalto,
    "Gris oscuro inspirado en la roca volcánica"
  ),
  grisCaliza: crearProducto(
    "A022",
    "Gris Caliza",
    imagenesChicas.grisCaliza,
    imagenesGrandes.grisCaliza,
    "Gris claro con matices naturales de piedra caliza"
  ),
  grisHumo: crearProducto(
    "A023",
    "Gris Humo",
    imagenesChicas.grisHumo,
    imagenesGrandes.grisHumo,
    "Tono gris humo, sutil y moderno."
  ),
  grisTapir: crearProducto(
    "A024",
    "Gris Tapir",
    imagenesChicas.grisTapir,
    imagenesGrandes.grisTapir,
    "Gris medio con sutiles variaciones de tono"
  ),
  helsinki: crearProducto(
    "A025",
    "Helsinki",
    imagenesChicas.helsinki,
    imagenesGrandes.helsinki,
    "Acabado Helsinki, con un toque moderno y minimalista."
  ),
  himalaya: crearProducto(
    "A026",
    "Himalaya",
    imagenesChicas.himalaya,
    imagenesGrandes.himalaya,
    "Melamina de textura natural, perfecta para interiores"
  ),
  home: crearProducto(
    "A027",
    "Home",
    imagenesChicas.home,
    imagenesGrandes.home,
    "Diseño contemporáneo que resalta la calidez del hogar."
  ),
  jade: crearProducto(
    "A028",
    "Jade",
    imagenesChicas.jade,
    imagenesGrandes.jade,
    "Verde suave inspirado en la piedra jade"
  ),
  kiri: crearProducto(
    "A029",
    "Kiri",
    imagenesChicas.kiri,
    imagenesGrandes.kiri,
    "Acabado natural inspirado en la madera de paulownia"
  ),
  linosaCinza: crearProducto(
    "A030",
    "Linosa Cinza",
    imagenesChicas.linosaCinza,
    imagenesGrandes.linosaCinza,
    "Tono gris linosa, sutil y moderno."
  ),
  litio: crearProducto(
    "A031",
    "Litio",
    imagenesChicas.litio,
    imagenesGrandes.litio,
    "Acabado en litio, atractivo y contemporáneo."
  ),
  merlot: crearProducto(
    "A032",
    "Merlot",
    imagenesChicas.merlot,
    imagenesGrandes.merlot,
    "Melamina color merlot, perfecta para un toque elegante."
  ),
  montBlanc: crearProducto(
    "A033",
    "Mont Blanc",
    imagenesChicas.montBlanc,
    imagenesGrandes.montBlanc,
    "Madera de Mont Blanc, elegante y resistente, perfecta para cualquier ambiente."
  ),
  moscu: crearProducto(
    "A034",
    "Moscú",
    imagenesChicas.moscu,
    imagenesGrandes.moscu,
    "Madera inspirada en el estilo de Moscú, con un toque de sofisticación."
  ),
  negroProfundo: crearProducto(
    "A035",
    "Negro Profundo",
    imagenesChicas.negroProfundo,
    imagenesGrandes.negroProfundo,
    "Negro profundo para un estilo audaz."
  ),
  nocceMilano: crearProducto(
    "A036",
    "Nocce Milano",
    imagenesChicas.nocceMilano,
    imagenesGrandes.nocceMilano,
    "Acabado de nocce milano, sofisticado y lleno de estilo."
  ),
  nogalTerracota: crearProducto(
    "A037",
    "Nogal Terracota",
    imagenesChicas.nogalTerracota,
    imagenesGrandes.nogalTerracota,
    "Tono de nogal terracota, cálido y atractivo."
  ),
  olmoFinlandes: crearProducto(
    "A038",
    "Olmo Finlándes",
    imagenesChicas.olmoFinlandes,
    imagenesGrandes.olmoFinlandes,
    "Madera de olmo finlandés, resistente y con un hermoso veteado."
  ),
  paraiso: crearProducto(
    "A039",
    "Paraíso",
    imagenesChicas.paraiso,
    imagenesGrandes.paraiso,
    "Acabado cálido y acogedor con tonos naturales"
  ),
  pinotGris: crearProducto(
    "A040",
    "Pinot Gris",
    imagenesChicas.pinotGris,
    imagenesGrandes.pinotGris,
    "Melamina color pinot gris, ideal para un diseño moderno."
  ),
  praga: crearProducto(
    "A041",
    "Praga",
    imagenesChicas.praga,
    imagenesGrandes.praga,
    "Un acabado que refleja la belleza arquitectónica de Praga."
  ),
  robleAmericanoNature: crearProducto(
    "A042",
    "Roble Americano Nature",
    imagenesChicas.robleAmericanoNature,
    imagenesGrandes.robleAmericanoNature,
    "Roble americano con un acabado natural, robusto y duradero."
  ),
  robleDakarNature: crearProducto(
    "A043",
    "Roble Dakar Nature",
    imagenesChicas.robleDakarNature,
    imagenesGrandes.robleDakarNature,
    "Roble de Dakar con un acabado natural, atractivo y resistente."
  ),
  robleEscandinavo: crearProducto(
    "A044",
    "Roble Escandinavo",
    imagenesChicas.robleEscandinavo,
    imagenesGrandes.robleEscandinavo,
    "Roble escandinavo, ideal para muebles de calidad y duraderos."
  ),
  rojo: crearProducto(
    "A045",
    "Rojo",
    imagenesChicas.rojo,
    imagenesGrandes.rojo,
    "Rojo vibrante que añade un toque de energía."
  ),
  safari: crearProducto(
    "A046",
    "Safari",
    imagenesChicas.safari,
    imagenesGrandes.safari,
    "Melamina que evoca la fauna salvaje, resistente y única"
  ),
  sahara: crearProducto(
    "A047",
    "Sahara",
    imagenesChicas.sahara,
    imagenesGrandes.sahara,
    "Melamina que evoca la calidez del desierto, ideal para espacios acogedores"
  ),
  sauco: crearProducto(
    "A048",
    "Sauco",
    imagenesChicas.sauco,
    imagenesGrandes.sauco,
    "Melamina de color sauco, perfecta parae natural."
  ),
  scotch: crearProducto(
    "A049",
    "Scotch",
    imagenesChicas.scotch,
    imagenesGrandes.scotch,
    "Melamina color scotch, ideal para un diseño atemporal."
  ),
  street: crearProducto(
    "A050",
    "Street",
    imagenesChicas.street,
    imagenesGrandes.street,
    "Diseño urbano que aporta un aire moderno y atrevido a cualquier espacio."
  ),
  tanganicaTabaco: crearProducto(
    "A051",
    "Tanganica Tabaco",
    imagenesChicas.tanganicaTabaco,
    imagenesGrandes.tanganicaTabaco,
    "Madera de Tanganica con un hermoso tono tabaco, cálido y acogedor."
  ),
  tekaArtico: crearProducto(
    "A052",
    "Teka Ártico",
    imagenesChicas.tekaArtico,
    imagenesGrandes.tekaArtico,
    "Madera de teka ártico, resistente a la humedad y ideal para exteriores."
  ),
  tekaOslo: crearProducto(
    "A053",
    "Teka Oslo",
    imagenesChicas.tekaOslo,
    imagenesGrandes.tekaOslo,
    "Madera de teka de Oslo, conocida por su resistencia y belleza natural."
  ),
  terrarum: crearProducto(
    "A054",
    "Terrarum",
    imagenesChicas.terrarum,
    imagenesGrandes.terrarum,
    "Madera de terrarum, versátil y duradera para todo tipo de muebles."
  ),
  tribal: crearProducto(
    "A055",
    "Tribal",
    imagenesChicas.tribal,
    imagenesGrandes.tribal,
    "Melamina con patrones tribales, perfecta para un estilo único"
  ),
  tuareg: crearProducto(
    "A056",
    "Tuareg",
    imagenesChicas.tuareg,
    imagenesGrandes.tuareg,
    "Melamina inspirada en la cultura Tuareg, robusta y elegante"
  ),
  venezia: crearProducto(
    "A057",
    "Venezia",
    imagenesChicas.venezia,
    imagenesGrandes.venezia,
    "Madera de Venezia, ideal para un estilo clásico y elegante."
  ),
  viena: crearProducto(
    "A058",
    "Viena",
    imagenesChicas.viena,
    imagenesGrandes.viena,
    "Madera que evoca el estilo clásico y romántico de Viena."
  ),
};
export default articulos;

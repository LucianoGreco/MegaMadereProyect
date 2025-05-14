import { imagenesChicas, imagenesGrandes } from "@/data/image/gestorImage.js";

const valoresComunes = {
  precio: 80000,
  medidas: "1830 x 2750 mm",
  espesor: "12mm",
  peso: "25kg",
};

const dataMelaminas = {
  "Tableros Melaminas": {
    Nature: [
      {
        codigo: "001",
        nombre: "Teka Artico",
        descripcion: "Tablero con textura natural clara.",
        imagenChica: imagenesChicas.tekaartico,
        imagenGrande: imagenesGrandes.tekaartico,
        ...valoresComunes,
      },
      {
        codigo: "002",
        nombre: "Venezia",
        descripcion: "Estilo italiano sobrio.",
        imagenChica: imagenesChicas.venezia,
        imagenGrande: imagenesGrandes.venezia,
        ...valoresComunes,
      },
      {
        codigo: "003",
        nombre: "Cajú",
        descripcion: "Color cálido con veta suave.",
        imagenChica: imagenesChicas.caju,
        imagenGrande: imagenesGrandes.caju,
        ...valoresComunes,
      },
      {
        codigo: "004",
        nombre: "Gaudí",
        descripcion: "Inspiración artística con tonos marrones.",
        imagenChica: imagenesChicas.gaudi,
        imagenGrande: imagenesGrandes.gaudi,
        ...valoresComunes,
      },
      {
        codigo: "005",
        nombre: "Mont Blanc",
        descripcion: "Elegancia en blanco con textura sutil.",
        imagenChica: imagenesChicas.montblanc,
        imagenGrande: imagenesGrandes.montblanc,
        ...valoresComunes,
      },
      {
        codigo: "006",
        nombre: "Nogal Terracota",
        descripcion: "Apariencia cálida y rústica.",
        imagenChica: imagenesChicas.nogalterracota,
        imagenGrande: imagenesGrandes.nogalterracota,
        ...valoresComunes,
      },
      {
        codigo: "007",
        nombre: "Carvalho Mezzo",
        descripcion: "Roble medio con textura suave.",
        imagenChica: imagenesChicas.carvalhomezzo,
        imagenGrande: imagenesGrandes.carvalhomezzo,
        ...valoresComunes,
      },
      {
        codigo: "008",
        nombre: "Nocce Milano",
        descripcion: "Nogal elegante de inspiración italiana.",
        imagenChica: imagenesChicas.noccemilano,
        imagenGrande: imagenesGrandes.noccemilano,
        ...valoresComunes,
      },
      {
        codigo: "009",
        nombre: "Blanco Nature",
        descripcion: "Blanco neutro con acabado natural.",
        imagenChica: imagenesChicas.blanconature,
        imagenGrande: imagenesGrandes.blanconature,
        ...valoresComunes,
      },
    ],
    Lisos: [
      {
        codigo: "010",
        nombre: "Grafito",
        descripcion: "Color oscuro con estilo moderno.",
        imagenChica: imagenesChicas.grafito,
        imagenGrande: imagenesGrandes.grafito,
        ...valoresComunes,
      },
      {
        codigo: "011",
        nombre: "Negro Profundo",
        descripcion: "Negro intenso con presencia elegante.",
        imagenChica: imagenesChicas.negroprofundo,
        imagenGrande: imagenesGrandes.negroprofundo,
        ...valoresComunes,
      },
      {
        codigo: "012",
        nombre: "Gris Humo",
        descripcion: "Gris versátil y contemporáneo.",
        imagenChica: imagenesChicas.grishumo,
        imagenGrande: imagenesGrandes.grishumo,
        ...valoresComunes,
      },
      {
        codigo: "013",
        nombre: "Almendra",
        descripcion: "Tono suave y acogedor.",
        imagenChica: imagenesChicas.almendra,
        imagenGrande: imagenesGrandes.almendra,
        ...valoresComunes,
      },
      {
        codigo: "014",
        nombre: "Aluminio",
        descripcion: "Inspirado en metales industriales.",
        imagenChica: imagenesChicas.aluminio,
        imagenGrande: imagenesGrandes.aluminio,
        ...valoresComunes,
      },
      {
        codigo: "015",
        nombre: "Litio",
        descripcion: "Tono gris claro con estilo limpio.",
        imagenChica: imagenesChicas.litio,
        imagenGrande: imagenesGrandes.litio,
        ...valoresComunes,
      },
      {
        codigo: "016",
        nombre: "Blanco Tundra",
        descripcion: "Blanco puro con acabado mate.",
        imagenChica: imagenesChicas.blancotundra,
        imagenGrande: imagenesGrandes.blancotundra,
        ...valoresComunes,
      },
    ],
    Hilados: [
      {
        codigo: "017",
        nombre: "Seda Azzurra",
        descripcion: "Textura sedosa en azul claro.",
        imagenChica: imagenesChicas.sedaazzurra,
        imagenGrande: imagenesGrandes.sedaazzurra,
        ...valoresComunes,
      },
      {
        codigo: "018",
        nombre: "Seda Giorno",
        descripcion: "Tono claro y suave, ideal para ambientes luminosos.",
        imagenChica: imagenesChicas.sedagiorno,
        imagenGrande: imagenesGrandes.sedagiorno,
        ...valoresComunes,
      },
      {
        codigo: "019",
        nombre: "Seda Notte",
        descripcion: "Oscuro elegante con textura sutil.",
        imagenChica: imagenesChicas.sedanotte,
        imagenGrande: imagenesGrandes.sedanotte,
        ...valoresComunes,
      },
      {
        codigo: "020",
        nombre: "Lino Chiaro",
        descripcion: "Lino claro, tono natural y sereno.",
        imagenChica: imagenesChicas.linochiaro,
        imagenGrande: imagenesGrandes.linochiaro,
        ...valoresComunes,
      },
      {
        codigo: "021",
        nombre: "Lino Blanco",
        descripcion: "Lino en blanco puro, ideal para espacios amplios.",
        imagenChica: imagenesChicas.linoblanco,
        imagenGrande: imagenesGrandes.linoblanco,
        ...valoresComunes,
      },
      {
        codigo: "022",
        nombre: "Lino Terra",
        descripcion: "Lino en tonos tierra, cálido y natural.",
        imagenChica: imagenesChicas.linoterra,
        imagenGrande: imagenesGrandes.linoterra,
        ...valoresComunes,
      },
      {
        codigo: "023",
        nombre: "Lino Negro",
        descripcion: "Lino oscuro, elegante y moderno.",
        imagenChica: imagenesChicas.linonegro,
        imagenGrande: imagenesGrandes.linonegro,
        ...valoresComunes,
      },
    ],
    MaderasClasicas: [
      {
        codigo: "024",
        nombre: "Roble Dakar Nature",
        descripcion: "Roble con textura natural y cálida.",
        imagenChica: imagenesChicas.robledakarnature,
        imagenGrande: imagenesGrandes.robledakarnature,
        ...valoresComunes,
      },
      {
        codigo: "025",
        nombre: "Roble Americano Nature",
        descripcion: "Madera clásica con vetas suaves.",
        imagenChica: imagenesChicas.robleamericanonature,
        imagenGrande: imagenesGrandes.robleamericanonature,
        ...valoresComunes,
      },
      {
        codigo: "026",
        nombre: "Cedro Nature",
        descripcion: "Tono rojizo con textura natural.",
        imagenChica: imagenesChicas.cedronature,
        imagenGrande: imagenesGrandes.cedronature,
        ...valoresComunes,
      },
      {
        codigo: "027",
        nombre: "Roble Dakar Woodtext",
        descripcion: "Textura marcada que imita la madera natural.",
        imagenChica: imagenesChicas.robledakarwood,
        imagenGrande: imagenesGrandes.robledakarwood,
        ...valoresComunes,
      },
      {
        codigo: "028",
        nombre: "Cedro Woodtext",
        descripcion: "Cedro con textura profunda y realista.",
        imagenChica: imagenesChicas.cedrowoodtext,
        imagenGrande: imagenesGrandes.cedrowoodtext,
        ...valoresComunes,
      },
      {
        codigo: "029",
        nombre: "Ebano Negro",
        descripcion: "Madera oscura y sofisticada.",
        imagenChica: imagenesChicas.ebanonegro,
        imagenGrande: imagenesGrandes.ebanonegro,
        ...valoresComunes,
      },
      {
        codigo: "030",
        nombre: "Roble Americano Supermate",
        descripcion: "Roble con acabado ultra mate.",
        imagenChica: imagenesChicas.robleamericanosupermate,
        imagenGrande: imagenesGrandes.robleamericanosupermate,
        ...valoresComunes,
      },
    ],
    Mesopotamia: [
      {
        codigo: "031",
        nombre: "Paraíso",
        descripcion: "Madera clara con vetas suaves y armónicas.",
        imagenChica: imagenesChicas.paraiso,
        imagenGrande: imagenesGrandes.paraiso,
        ...valoresComunes,
      },
      {
        codigo: "032",
        nombre: "Kiri",
        descripcion: "Tono natural claro con textura liviana.",
        imagenChica: imagenesChicas.kiri,
        imagenGrande: imagenesGrandes.kiri,
        ...valoresComunes,
      },
      {
        codigo: "033",
        nombre: "Jade",
        descripcion: "Color suave con matices verdes minerales.",
        imagenChica: imagenesChicas.jade,
        imagenGrande: imagenesGrandes.jade,
        ...valoresComunes,
      },
      {
        codigo: "034",
        nombre: "Amatista",
        descripcion: "Inspirado en piedras preciosas con tono lila.",
        imagenChica: imagenesChicas.amatista,
        imagenGrande: imagenesGrandes.amatista,
        ...valoresComunes,
      },
      {
        codigo: "035",
        nombre: "Gris Tapir",
        descripcion: "Gris oscuro y elegante con estilo contemporáneo.",
        imagenChica: imagenesChicas.gristapir,
        imagenGrande: imagenesGrandes.gristapir,
        ...valoresComunes,
      },
      {
        codigo: "036",
        nombre: "Gris Basalto",
        descripcion: "Inspirado en la piedra volcánica, de gran sobriedad.",
        imagenChica: imagenesChicas.grisbasalto,
        imagenGrande: imagenesGrandes.grisbasalto,
        ...valoresComunes,
      },
      {
        codigo: "037",
        nombre: "Gris Caliza",
        descripcion: "Tono neutro y natural, con textura suave.",
        imagenChica: imagenesChicas.griscaliza,
        imagenGrande: imagenesGrandes.griscaliza,
        ...valoresComunes,
      },
    ],
    UrbanConcept: [
      {
        codigo: "038",
        nombre: "Coliseo",
        descripcion: "Inspirado en la piedra antigua, con tonos sobrios.",
        imagenChica: imagenesChicas.coliseo,
        imagenGrande: imagenesGrandes.coliseo,
        ...valoresComunes,
      },
      {
        codigo: "039",
        nombre: "Amberes",
        descripcion: "Diseño urbano con matices cálidos y modernos.",
        imagenChica: imagenesChicas.amberes,
        imagenGrande: imagenesGrandes.amberes,
        ...valoresComunes,
      },
      {
        codigo: "040",
        nombre: "Moscú",
        descripcion:
          "Tonos fríos y elegantes, ideal para estilos contemporáneos.",
        imagenChica: imagenesChicas.moscu,
        imagenGrande: imagenesGrandes.moscu,
        ...valoresComunes,
      },
      {
        codigo: "041",
        nombre: "Street",
        descripcion: "Estética urbana con textura de concreto.",
        imagenChica: imagenesChicas.street,
        imagenGrande: imagenesGrandes.street,
        ...valoresComunes,
      },
      {
        codigo: "042",
        nombre: "Home",
        descripcion: "Diseño cálido y acogedor para ambientes modernos.",
        imagenChica: imagenesChicas.home,
        imagenGrande: imagenesGrandes.home,
        ...valoresComunes,
      },
      {
        codigo: "043",
        nombre: "Praga",
        descripcion: "Inspiración clásica europea con tonos suaves.",
        imagenChica: imagenesChicas.praga,
        imagenGrande: imagenesGrandes.praga,
        ...valoresComunes,
      },
      {
        codigo: "044",
        nombre: "Viena",
        descripcion: "Estilo refinado con colores neutros y cálidos.",
        imagenChica: imagenesChicas.viena,
        imagenGrande: imagenesGrandes.viena,
        ...valoresComunes,
      },
    ],
    Blend: [
      {
        codigo: "045",
        nombre: "Sauco",
        descripcion: "Diseño con tonos oscuros y vetas sofisticadas.",
        imagenChica: imagenesChicas.sauco,
        imagenGrande: imagenesGrandes.sauco,
        ...valoresComunes,
      },
      {
        codigo: "046",
        nombre: "Amaranto",
        descripcion: "Color profundo con un estilo cálido y moderno.",
        imagenChica: imagenesChicas.amaranto,
        imagenGrande: imagenesGrandes.amaranto,
        ...valoresComunes,
      },
      {
        codigo: "047",
        nombre: "Camellia",
        descripcion: "Tonos rosados con textura delicada y elegante.",
        imagenChica: imagenesChicas.camellia,
        imagenGrande: imagenesGrandes.camellia,
        ...valoresComunes,
      },
      {
        codigo: "048",
        nombre: "Scotch",
        descripcion: "Inspirado en la madera oscura con carácter.",
        imagenChica: imagenesChicas.scotch,
        imagenGrande: imagenesGrandes.scotch,
        ...valoresComunes,
      },
      {
        codigo: "049",
        nombre: "Pinot Gris",
        descripcion: "Tonos grisáceos con un toque vinícola.",
        imagenChica: imagenesChicas.pinotgris,
        imagenGrande: imagenesGrandes.pinotgris,
        ...valoresComunes,
      },
      {
        codigo: "050",
        nombre: "Merlot",
        descripcion: "Color intenso y sofisticado, con inspiración vinícola.",
        imagenChica: imagenesChicas.merlot,
        imagenGrande: imagenesGrandes.merlot,
        ...valoresComunes,
      },
    ],
    Étnica: [
      {
        codigo: "051",
        nombre: "Everest",
        descripcion: "Diseño frío y montañoso, con textura elegante.",
        imagenChica: imagenesChicas.everest,
        imagenGrande: imagenesGrandes.everest,
        ...valoresComunes,
      },
      {
        codigo: "052",
        nombre: "Tribal",
        descripcion: "Estilo con inspiración étnica y patrones marcados.",
        imagenChica: imagenesChicas.tribal,
        imagenGrande: imagenesGrandes.tribal,
        ...valoresComunes,
      },
      {
        codigo: "053",
        nombre: "Sahara",
        descripcion: "Tonos cálidos y desérticos con textura arenosa.",
        imagenChica: imagenesChicas.sahara,
        imagenGrande: imagenesGrandes.sahara,
        ...valoresComunes,
      },
      {
        codigo: "054",
        nombre: "Tuareg",
        descripcion: "Inspiración nómade con diseño exótico.",
        imagenChica: imagenesChicas.tuareg,
        imagenGrande: imagenesGrandes.tuareg,
        ...valoresComunes,
      },
      {
        codigo: "055",
        nombre: "Himalaya",
        descripcion: "Paleta clara con vetas suaves y frías.",
        imagenChica: imagenesChicas.himalaya,
        imagenGrande: imagenesGrandes.himalaya,
        ...valoresComunes,
      },
      {
        codigo: "056",
        nombre: "Safari",
        descripcion: "Tonos naturales y terrosos, ideal para estilos rústicos.",
        imagenChica: imagenesChicas.safari,
        imagenGrande: imagenesGrandes.safari,
        ...valoresComunes,
      },
    ],
    Nórdica: [
      {
        codigo: "057",
        nombre: "Helsinki",
        descripcion: "Diseño escandinavo sobrio con tonos claros.",
        imagenChica: imagenesChicas.helsinki,
        imagenGrande: imagenesGrandes.helsinki,
        ...valoresComunes,
      },
      {
        codigo: "058",
        nombre: "Báltico",
        descripcion: "Inspirado en maderas nórdicas frías.",
        imagenChica: imagenesChicas.baltico,
        imagenGrande: imagenesGrandes.baltico,
        ...valoresComunes,
      },
      {
        codigo: "059",
        nombre: "Olmo Finlandés",
        descripcion: "Madera clara con vetas suaves y cálidas.",
        imagenChica: imagenesChicas.olmofinlandes,
        imagenGrande: imagenesGrandes.olmofinlandes,
        ...valoresComunes,
      },
      {
        codigo: "060",
        nombre: "Roble Escandinavo",
        descripcion: "Estilo natural con apariencia elegante.",
        imagenChica: imagenesChicas.robleescandinavo,
        imagenGrande: imagenesGrandes.robleescandinavo,
        ...valoresComunes,
      },
      {
        codigo: "061",
        nombre: "Teka Oslo",
        descripcion: "Tono claro con veta delicada y diseño minimalista.",
        imagenChica: imagenesChicas.tekaoslo,
        imagenGrande: imagenesGrandes.tekaoslo,
        ...valoresComunes,
      },
    ],
  },
  Revestimiento: {
    Lisos: [
      {
        codigo: "062",
        nombre: "Ceniza",
        descripcion:
          "Tono gris claro, neutro y versátil, ideal para combinaciones sobrias y modernas.",
        imagenChica: imagenesChicas.ceniza,
        imagenGrande: imagenesGrandes.ceniza,
        ...valoresComunes,
      },
      {
        codigo: "063",
        nombre: "Grafito",
        descripcion:
          "Color gris oscuro elegante, aporta profundidad y contraste a cualquier diseño.",
        imagenChica: imagenesChicas.grafito,
        imagenGrande: imagenesGrandes.grafito,
        ...valoresComunes,
      },
      {
        codigo: "064",
        nombre: "Negro Profundo",
        descripcion:
          "Negro intenso y sofisticado, ideal para ambientes de alto impacto visual.",
        imagenChica: imagenesChicas.negroprofundo,
        imagenGrande: imagenesGrandes.negroprofundo,
        ...valoresComunes,
      },
      {
        codigo: "065",
        nombre: "Gris Humo",
        descripcion:
          "Gris medio con un matiz cálido, perfecto para espacios modernos y equilibrados.",
        imagenChica: imagenesChicas.grishumo,
        imagenGrande: imagenesGrandes.grishumo,
        ...valoresComunes,
      },
      {
        codigo: "066",
        nombre: "Almendra",
        descripcion:
          "Beige suave con matices cálidos, ideal para ambientes acogedores y naturales.",
        imagenChica: imagenesChicas.almendra,
        imagenGrande: imagenesGrandes.almendra,
        ...valoresComunes,
      },
      {
        codigo: "067",
        nombre: "Aluminio",
        descripcion:
          "Tono gris metálico claro que aporta un toque contemporáneo y tecnológico.",
        imagenChica: imagenesChicas.aluminio,
        imagenGrande: imagenesGrandes.aluminio,
        ...valoresComunes,
      },
      {
        codigo: "068",
        nombre: "Litio",
        descripcion:
          "Color neutro claro con un acabado limpio, excelente para espacios minimalistas.",
        imagenChica: imagenesChicas.litio,
        imagenGrande: imagenesGrandes.litio,
        ...valoresComunes,
      },
      {
        codigo: "069",
        nombre: "Blanco",
        descripcion:
          "Blanco puro y luminoso, clásico y versátil para todo tipo de combinaciones.",
        imagenChica: imagenesChicas.blanco,
        imagenGrande: imagenesGrandes.blanco,
        ...valoresComunes,
      },
    ],
    Nature: [
      {
        codigo: "070",
        nombre: "Gaudí",
        descripcion:
          "Diseño de madera cálida con vetas orgánicas que evocan la artesanía y el estilo natural.",
        imagenChica: imagenesChicas.gaudi,
        imagenGrande: imagenesGrandes.gaudi,
        ...valoresComunes,
      },
      {
        codigo: "071",
        nombre: "Mont Blanc",
        descripcion:
          "Inspirado en las maderas claras europeas, aporta frescura, elegancia y luminosidad al ambiente.",
        imagenChica: imagenesChicas.montblanc,
        imagenGrande: imagenesGrandes.montblanc,
        ...valoresComunes,
      },
      {
        codigo: "072",
        nombre: "Teka Ártico",
        descripcion:
          "Tonalidad clara con textura de madera teka, perfecta para espacios modernos y serenos.",
        imagenChica: imagenesChicas.tekaartico,
        imagenGrande: imagenesGrandes.tekaartico,
        ...valoresComunes,
      },
      {
        codigo: "073",
        nombre: "Venezia",
        descripcion:
          "Estética sobria con vetas tenues y tonos beige-gris, ideal para un diseño elegante y contemporáneo.",
        imagenChica: imagenesChicas.venezia,
        imagenGrande: imagenesGrandes.venezia,
        ...valoresComunes,
      },
      {
        codigo: "074",
        nombre: "Nogal Terracota",
        descripcion:
          "Color cálido con matices rojizos y vetas de nogal que crean un ambiente rústico y acogedor.",
        imagenChica: imagenesChicas.nogalterracota,
        imagenGrande: imagenesGrandes.nogalterracota,
        ...valoresComunes,
      },
      {
        codigo: "075",
        nombre: "Carvalho Mezzo",
        descripcion:
          "Madera de tono medio con vetas equilibradas que combinan calidez y naturalidad.",
        imagenChica: imagenesChicas.carvalhomezzo,
        imagenGrande: imagenesGrandes.carvalhomezzo,
        ...valoresComunes,
      },
      {
        codigo: "076",
        nombre: "Nocce Milano",
        descripcion:
          "Nogal oscuro y elegante, con vetas pronunciadas que realzan su carácter sofisticado.",
        imagenChica: imagenesChicas.noccemilano,
        imagenGrande: imagenesGrandes.noccemilano,
        ...valoresComunes,
      },
      {
        codigo: "077",
        nombre: "Blanco Nature",
        descripcion:
          "Blanco texturado con leves vetas naturales que aportan claridad y un toque orgánico.",
        imagenChica: imagenesChicas.blanconature,
        imagenGrande: imagenesGrandes.blanconature,
        ...valoresComunes,
      },
    ],
    Hilados: [
      {
        codigo: "078",
        nombre: "Seda Azzurra",
        descripcion:
          "Diseño textil con sutil tono azul y textura de seda, ideal para ambientes frescos y refinados.",
        imagenChica: imagenesChicas.sedaazurra,
        imagenGrande: imagenesGrandes.sedaazurra,
        ...valoresComunes,
      },
      {
        codigo: "079",
        nombre: "Seda Giorno",
        descripcion:
          "Acabado tipo seda en tono claro, aporta luminosidad, suavidad y elegancia natural.",
        imagenChica: imagenesChicas.sedagiorno,
        imagenGrande: imagenesGrandes.sedagiorno,
        ...valoresComunes,
      },
      {
        codigo: "080",
        nombre: "Seda Notte",
        descripcion:
          "Textura suave y tono oscuro que genera contraste y sofisticación en espacios contemporáneos.",
        imagenChica: imagenesChicas.sedanotte,
        imagenGrande: imagenesGrandes.sedanotte,
        ...valoresComunes,
      },
      {
        codigo: "081",
        nombre: "Lino Chiaro",
        descripcion:
          "Inspirado en el lino natural claro, transmite frescura, calma y una estética orgánica.",
        imagenChica: imagenesChicas.linochiaro,
        imagenGrande: imagenesGrandes.linochiaro,
        ...valoresComunes,
      },
      {
        codigo: "082",
        nombre: "Lino Blanco",
        descripcion:
          "Color blanco con textura de lino, perfecto para ambientes puros y modernos.",
        imagenChica: imagenesChicas.linoblanco,
        imagenGrande: imagenesGrandes.linoblanco,
        ...valoresComunes,
      },
      {
        codigo: "082",
        nombre: "Lino Terra",
        descripcion:
          "Tonalidad tierra con textura textil, ideal para lograr calidez y un estilo natural.",
        imagenChica: imagenesChicas.linoterra,
        imagenGrande: imagenesGrandes.linoterra,
        ...valoresComunes,
      },
      {
        codigo: "083",
        nombre: "Lino Negro",
        descripcion:
          "Lino oscuro que aporta contraste, elegancia y un look moderno con textura natural.",
        imagenChica: imagenesChicas.linonegro,
        imagenGrande: imagenesGrandes.linonegro,
        ...valoresComunes,
      },
    ],
    Mesopotamia: [
      {
        codigo: "084",
        nombre: "Gris Basalto",
        descripcion:
          "Inspirado en la piedra basáltica, este gris oscuro con textura mineral aporta carácter y solidez visual.",
        imagenChica: imagenesChicas.grisbasalto,
        imagenGrande: imagenesGrandes.grisbasalto,
        ...valoresComunes,
      },
      {
        codigo: "085",
        nombre: "Gris Caliza",
        descripcion:
          "Tono gris claro con efecto pétreo, ideal para lograr un estilo sobrio y natural.",
        imagenChica: imagenesChicas.griscaliza,
        imagenGrande: imagenesGrandes.griscaliza,
        ...valoresComunes,
      },
      {
        codigo: "086",
        nombre: "Amatista",
        descripcion:
          "Color violeta profundo con sutiles vetas minerales, agrega un toque audaz y elegante al diseño.",
        imagenChica: imagenesChicas.amatista,
        imagenGrande: imagenesGrandes.amatista,
        ...valoresComunes,
      },
      {
        codigo: "087",
        nombre: "Gris Tapir",
        descripcion:
          "Gris medio con matices terrosos, transmite calidez y un estilo sobrio y equilibrado.",
        imagenChica: imagenesChicas.gristapir,
        imagenGrande: imagenesGrandes.gristapir,
        ...valoresComunes,
      },
      {
        codigo: "088",
        nombre: "Jade",
        descripcion:
          "Tonalidad verde suave con un aire mineral, aporta frescura y un toque distintivo a los espacios.",
        imagenChica: imagenesChicas.jade,
        imagenGrande: imagenesGrandes.jade,
        ...valoresComunes,
      },
      {
        codigo: "089",
        nombre: "Kiri",
        descripcion:
          "Diseño claro con textura sutil inspirada en la madera kiri, elegante y contemporáneo.",
        imagenChica: imagenesChicas.kiri,
        imagenGrande: imagenesGrandes.kiri,
        ...valoresComunes,
      },
      {
        codigo: "090",
        nombre: "Paraíso",
        descripcion:
          "Color cálido con textura natural que evoca ambientes relajados, tropicales y luminosos.",
        imagenChica: imagenesChicas.paraiso,
        imagenGrande: imagenesGrandes.paraiso,
        ...valoresComunes,
      },
    ],
    UrbanConcept: [
      {
        codigo: "091",
        nombre: "Coliseo",
        descripcion:
          "Diseño con textura sutil y tono neutro, inspirado en la arquitectura clásica y urbana de Roma.",
        imagenChica: imagenesChicas.coliseo,
        imagenGrande: imagenesGrandes.coliseo,
        ...valoresComunes,
      },
      {
        codigo: "092",
        nombre: "Amberes",
        descripcion:
          "Tonalidad gris claro con acabado sobrio, ideal para ambientes modernos y de estética industrial.",
        imagenChica: imagenesChicas.amberes,
        imagenGrande: imagenesGrandes.amberes,
        ...valoresComunes,
      },
      {
        codigo: "093",
        nombre: "Viena",
        descripcion:
          "Inspirado en el diseño europeo, combina elegancia clásica con una textura contemporánea.",
        imagenChica: imagenesChicas.viena,
        imagenGrande: imagenesGrandes.viena,
        ...valoresComunes,
      },
      {
        codigo: "094",
        nombre: "Moscú",
        descripcion:
          "Tono oscuro con textura sofisticada que transmite fuerza, carácter y modernidad.",
        imagenChica: imagenesChicas.moscu,
        imagenGrande: imagenesGrandes.moscu,
        ...valoresComunes,
      },
      {
        codigo: "095",
        nombre: "Praga",
        descripcion:
          "Diseño cálido con matices beige y textura suave, ideal para ambientes acogedores y urbanos.",
        imagenChica: imagenesChicas.praga,
        imagenGrande: imagenesGrandes.praga,
        ...valoresComunes,
      },
      {
        codigo: "096",
        nombre: "Street",
        descripcion:
          "Diseño urbano con textura tipo concreto, perfecto para estilos industriales y contemporáneos.",
        imagenChica: imagenesChicas.street,
        imagenGrande: imagenesGrandes.street,
        ...valoresComunes,
      },
      {
        codigo: "097",
        nombre: "Home",
        descripcion:
          "Acabado cálido y neutro que transmite calma y equilibrio, ideal para espacios habitables y funcionales.",
        imagenChica: imagenesChicas.home,
        imagenGrande: imagenesGrandes.home,
        ...valoresComunes,
      },
    ],
    Blend: [
      {
        codigo: "098",
        nombre: "Sauco Revestimiento",
        descripcion:
          "Tonalidad profunda con matices violáceos, ideal para acentos sofisticados y modernos.",
        imagenChica: imagenesChicas.sauco,
        imagenGrande: imagenesGrandes.sauco,
        ...valoresComunes,
      },
      {
        codigo: "099",
        nombre: "Merlot Revestimiento",
        descripcion:
          "Inspirado en el color del vino tinto, combina elegancia y calidez con una textura refinada.",
        imagenChica: imagenesChicas.merlot,
        imagenGrande: imagenesGrandes.merlot,
        ...valoresComunes,
      },
      {
        codigo: "100",
        nombre: "Camellia Revestimiento",
        descripcion:
          "Rosa suave con un matiz floral delicado, ideal para espacios femeninos y ambientes relajados.",
        imagenChica: imagenesChicas.camelliao,
        imagenGrande: imagenesGrandes.camellia,
        ...valoresComunes,
      },
      {
        codigo: "101",
        nombre: "Scotch Revestimiento",
        descripcion:
          "Tono marrón con aire cálido y rústico, evoca la madera oscura y los interiores clásicos.",
        imagenChica: imagenesChicas.scotch,
        imagenGrande: imagenesGrandes.scotch,
        ...valoresComunes,
      },
      {
        codigo: "102",
        nombre: "Pinot Gris Revestimiento",
        descripcion:
          "Gris elegante con matices suaves, aporta un toque contemporáneo y versátil a cualquier espacio.",
        imagenChica: imagenesChicas.pinotgris,
        imagenGrande: imagenesGrandes.pinotgris,
        ...valoresComunes,
      },
      {
        codigo: "103",
        nombre: "Amaranto Revestimiento",
        descripcion:
          "Rojo intenso con profundidad visual, ideal para resaltar detalles con fuerza y sofisticación.",
        imagenChica: imagenesChicas.amaranto,
        imagenGrande: imagenesGrandes.amaranto,
        ...valoresComunes,
      },
    ],
    Etnica: [
      {
        codigo: "700",
        nombre: "Tribal Revestimiento",
        descripcion:
          "Diseño con patrones orgánicos y tonos terrosos que evocan culturas ancestrales y artesanía étnica.",
        imagenChica: imagenesChicas.tribal,
        imagenGrande: imagenesGrandes.tribal,
        ...valoresComunes,
      },
      {
        codigo: "701",
        nombre: "Sahara Revestimiento",
        descripcion:
          "Inspirado en los tonos cálidos del desierto, transmite calma, calidez y naturalidad.",
        imagenChica: imagenesChicas.sahara,
        imagenGrande: imagenesGrandes.sahara,
        ...valoresComunes,
      },
      {
        codigo: "702",
        nombre: "Tuareg Revestimiento",
        descripcion:
          "Diseño con textura y color profundo, inspirado en los pueblos nómadas del norte de África.",
        imagenChica: imagenesChicas.tuareg,
        imagenGrande: imagenesGrandes.tuareg,
        ...valoresComunes,
      },
      {
        codigo: "703",
        nombre: "Himalaya Revestimiento",
        descripcion:
          "Paleta fría con texturas naturales que evocan las cumbres nevadas y el aire puro de la montaña.",
        imagenChica: imagenesChicas.himalaya,
        imagenGrande: imagenesGrandes.himalaya,
        ...valoresComunes,
      },
      {
        codigo: "704",
        nombre: "Safari Revestimiento",
        descripcion:
          "Tonos cálidos y textura natural que remiten a paisajes africanos y aventuras exóticas.",
        imagenChica: imagenesChicas.safari,
        imagenGrande: imagenesGrandes.safari,
        ...valoresComunes,
      },
      {
        codigo: "705",
        nombre: "Everest Revestimiento",
        descripcion:
          "Tono claro y frío, con textura sutil que transmite serenidad, pureza y amplitud visual.",
        imagenChica: imagenesChicas.everest,
        imagenGrande: imagenesGrandes.everest,
        ...valoresComunes,
      },
    ],
    Nordica: [
      {
        codigo: "800",
        nombre: "Helsinki Revestimiento",
        descripcion:
          "Diseño claro con textura sutil de madera, inspirado en la estética minimalista escandinava.",
        imagenChica: imagenesChicas.helsinki,
        imagenGrande: imagenesGrandes.helsinki,
        ...valoresComunes,
      },
      {
        codigo: "801",
        nombre: "Báltico Revestimiento",
        descripcion:
          "Tono grisáceo con vetas suaves que evoca los paisajes fríos y sobrios del norte europeo.",
        imagenChica: imagenesChicas.baltico,
        imagenGrande: imagenesGrandes.baltico,
        ...valoresComunes,
      },
      {
        codigo: "802",
        nombre: "Olmo Finlandés Revestimiento",
        descripcion:
          "Madera clara con vetas delicadas, ideal para espacios luminosos y de inspiración nórdica.",
        imagenChica: imagenesChicas.olmofinlandes,
        imagenGrande: imagenesGrandes.olmofinlandes,
        ...valoresComunes,
      },
      {
        codigo: "803",
        nombre: "Roble Escandinavo Revestimiento",
        descripcion:
          "Roble claro con acabado natural, transmite calidez, simplicidad y estilo contemporáneo.",
        imagenChica: imagenesChicas.robleescandinavo,
        imagenGrande: imagenesGrandes.robleescandinavo,
        ...valoresComunes,
      },
      {
        codigo: "804",
        nombre: "Teka Oslo Revestimiento",
        descripcion:
          "Tonalidad media con textura de madera nórdica, equilibrada entre rusticidad y modernidad.",
        imagenChica: imagenesChicas.tekaoslo,
        imagenGrande: imagenesGrandes.tekaoslo,
        ...valoresComunes,
      },
    ],
    MaderasClasicas: [
      {
        codigo: "900",
        nombre: "Roble Dakar Nature Revestimiento",
        descripcion:
          "Roble de tono medio con vetas marcadas, clásico y elegante para ambientes cálidos.",
        imagenChica: imagenesChicas.robledakarnature,
        imagenGrande: imagenesGrandes.robledakarnature,
        ...valoresComunes,
      },
      {
        codigo: "901",
        nombre: "Roble Americano Nature Revestimiento",
        descripcion:
          "Madera robusta de aspecto tradicional, ideal para lograr espacios sólidos y atemporales.",
        imagenChica: imagenesChicas.robleamericanonature,
        imagenGrande: imagenesGrandes.robleamericanonature,
        ...valoresComunes,
      },
      {
        codigo: "902",
        nombre: "Cedro Nature Revestimiento",
        descripcion:
          "Color rojizo suave y textura natural, aporta calidez y distinción con un aire clásico.",
        imagenChica: imagenesChicas.cedronature,
        imagenGrande: imagenesGrandes.cedronature,
        ...valoresComunes,
      },
    ],
  },
  Fondo: {
    Lisos: [
      {
        codigo: "F100",
        nombre: "Ceniza Fondo",
        descripcion:
          "Fondo liso en tono gris claro, ideal como base neutra y versátil.",
        imagenChica: imagenesChicas.ceniza,
        imagenGrande: imagenesGrandes.ceniza,
        ...valoresComunes,
      },
      {
        codigo: "F101",
        nombre: "Grafito Fondo",
        descripcion:
          "Gris oscuro de textura uniforme, aporta profundidad y modernidad.",
        imagenChica: imagenesChicas.grafito,
        imagenGrande: imagenesGrandes.grafito,
        ...valoresComunes,
      },
      {
        codigo: "F102",
        nombre: "Negro Profundo Fondo",
        descripcion: "Fondo completamente negro, elegante y de alto contraste.",
        imagenChica: imagenesChicas.negropro,
        imagenGrande: imagenesGrandes.negropro,
        ...valoresComunes,
      },
      {
        codigo: "F103",
        nombre: "Almendra Fondo",
        descripcion:
          "Beige cálido y suave, ideal para crear ambientes acogedores.",
        imagenChica: imagenesChicas.almendra,
        imagenGrande: imagenesGrandes.almendra,
        ...valoresComunes,
      },
      {
        codigo: "F104",
        nombre: "Blanco Fondo",
        descripcion:
          "Blanco neutro y puro, excelente como base para todo tipo de combinaciones.",
        imagenChica: imagenesChicas.blanco,
        imagenGrande: imagenesGrandes.blanco,
        ...valoresComunes,
      },
    ],
    Nature: [
      {
        codigo: "F200",
        nombre: "Teka Artico Fondo",
        descripcion:
          "Madera clara con vetas sutiles, ideal como fondo natural y luminoso.",
        imagenChica: imagenesChicas.tekaartico,
        imagenGrande: imagenesGrandes.tekaartico,
        ...valoresComunes,
      },
      {
        codigo: "F201",
        nombre: "Venezia Fondo",
        descripcion:
          "Diseño con textura de madera cálida, ideal para espacios clásicos y contemporáneos.",
        imagenChica: imagenesChicas.venezia,
        imagenGrande: imagenesGrandes.venezia,
        ...valoresComunes,
      },
      {
        codigo: "F202",
        nombre: "Carvalho Mezzo Fondo",
        descripcion:
          "Madera de tono medio con vetas visibles, equilibrio entre sobriedad y calidez.",
        imagenChica: imagenesChicas.carvalhomezzo,
        imagenGrande: imagenesGrandes.carvalhomezzo,
        ...valoresComunes,
      },
      {
        codigo: "F203",
        nombre: "Nocce Milano Fondo",
        descripcion:
          "Fondo amaderado oscuro con textura rica, ideal para ambientes elegantes.",
        imagenChica: imagenesChicas.noccemilano,
        imagenGrande: imagenesGrandes.noccemilano,
        ...valoresComunes,
      },
    ],
    Hilados: [
      {
        codigo: "F300",
        nombre: "Seda Giorno Fondo",
        descripcion:
          "Fondo textil claro con textura sedosa, aporta suavidad y frescura visual.",
        imagenChica: imagenesChicas.sedagiorno,
        imagenGrande: imagenesGrandes.sedagiorno,
        ...valoresComunes,
      },
      {
        codigo: "F301",
        nombre: "Seda Notte Fondo",
        descripcion:
          "Tono oscuro con textura de seda, transmite elegancia y sobriedad.",
        imagenChica: imagenesChicas.sedanotte,
        imagenGrande: imagenesGrandes.Sedanotte,
        ...valoresComunes,
      },
      {
        codigo: "F302",
        nombre: "Lino Chiaro Fondo",
        descripcion:
          "Fondo textil claro y natural, con apariencia fresca y relajada.",
        imagenChica: imagenesChicas.linochiaro,
        imagenGrande: imagenesGrandes.linochiaro,
        ...valoresComunes,
      },
    ],
    MaderasClasicas: [
      {
        codigo: "F400",
        nombre: "Roble Dakar Woodtext Fondo",
        descripcion:
          "Madera clásica de tono medio, con textura marcada y estilo atemporal.",
        imagenChica: imagenesChicas.robledakarwood,
        imagenGrande: imagenesGrandes.robledakarwood,
        ...valoresComunes,
      },
      {
        codigo: "F401",
        nombre: "Cedro Woodtext Fondo",
        descripcion:
          "Tono cálido rojizo con vetas pronunciadas, perfecto para fondos elegantes.",
        imagenChica: imagenesChicas.cedrowood,
        imagenGrande: imagenesGrandes.cedrowood,
        ...valoresComunes,
      },
      {
        codigo: "F402",
        nombre: "Ebano Negro Fondo",
        descripcion:
          "Madera oscura y sofisticada con acabado profundo, ideal para contrastes fuertes.",
        imagenChica: imagenesChicas.ebanonegro,
        imagenGrande: imagenesGrandes.ebanonegro,
        ...valoresComunes,
      },
    ],
    Nordica: [
      {
        codigo: "F500",
        nombre: "Helsinki Fondo",
        descripcion:
          "Madera clara con estética limpia y serena, ideal para ambientes nórdicos y modernos.",
        imagenChica: imagenesChicas.helsinki,
        imagenGrande: imagenesGrandes.helsinki,
        ...valoresComunes,
      },
      {
        codigo: "F501",
        nombre: "Báltico Fondo",
        descripcion:
          "Fondo de tono grisáceo suave, inspirado en paisajes fríos y minimalistas.",
        imagenChica: imagenesChicas.baltico,
        imagenGrande: imagenesGrandes.baltico,
        ...valoresComunes,
      },
    ],
  },
};
export default dataMelaminas;


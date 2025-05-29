
import { imagenesHerrajes } from "@/data/image/gestorImage";

const herrajesDataRaw = {
  amortiguadores: [
    { codigo: "item1-1", nombre: "amortiguador de aplicar", descripcion: "gris", color: "gris" },
    { codigo: "item1-2", nombre: "amortiguador de embutir corto", descripcion: "", color: "" },
    { codigo: "item1-3", nombre: "amortiguador de embutir largo", descripcion: "", color: "" },
    { codigo: "item1-4", nombre: "pistón a gas 14\"", descripcion: "", color: "" },
  ],
  bisagras: [
    { codigo: "item2-1", nombre: "bisagra cazoleta 35 mm", descripcion: "", color: "" },
    { codigo: "item2-2", nombre: "bisagra \"t\" hierro", descripcion: "", color: "" },
    { codigo: "item2-3", nombre: "bisagra cazoleta 165°", descripcion: "", color: "" },
    { codigo: "item2-4", nombre: "bisagra cazoleta", descripcion: "", color: "" },
    { codigo: "item2-5", nombre: "bisagra cazoleta cierre lento", descripcion: "", color: "" },
    { codigo: "item2-6", nombre: "bisagra cazoleta cierre lento \"clip\"", descripcion: "", color: "" },
    { codigo: "item2-7", nombre: "bisagra cazoleta angulo ciego", descripcion: "", color: "" },
    { codigo: "item2-8", nombre: "bisagra cazoleta articulada", descripcion: "", color: "" },
    { codigo: "item2-9", nombre: "bisagra cazoleta intermedia", descripcion: "", color: "" },
    { codigo: "item2-10", nombre: "bisagra cazoleta perfil de aluminio", descripcion: "", color: "" },
    { codigo: "item2-11", nombre: "bisagra cazoleta push open", descripcion: "", color: "" },
    { codigo: "item2-12", nombre: "bisagra libro hierro bronceado", descripcion: "", color: "" },
    { codigo: "item2-13", nombre: "bisagra oculta acerada", descripcion: "", color: "" },
    { codigo: "item2-14", nombre: "bisagra oculta pvc", descripcion: "", color: "" },
    { codigo: "item2-15", nombre: "pivot", descripcion: "", color: "" },
    { codigo: "item2-16", nombre: "bisagra cazoleta 35 mm + 45°", descripcion: "", color: "" },
    { codigo: "item2-17", nombre: "bisagra cazoleta 35 mm sin resorte", descripcion: "", color: "" },
    { codigo: "item2-18", nombre: "bisagra pomela acero inoxidable", descripcion: "", color: "" },
    { codigo: "item2-19", nombre: "bisagra cazoleta 165° soft closing", descripcion: "", color: "" },
    { codigo: "item2-20", nombre: "bisagra cazoleta 35mm -45°", descripcion: "", color: "" },
    { codigo: "item2-21", nombre: "bisagra con autocierre", descripcion: "", color: "" },
    { codigo: "item2-22", nombre: "bisagra cazoleta brazo corto", descripcion: "", color: "" },
    { codigo: "item2-23", nombre: "bisagra pomela 110x55x2.8mm", descripcion: "", color: "" },
    { codigo: "item2-24", nombre: "bisagra doble contacto", descripcion: "", color: "" },
    { codigo: "item2-25", nombre: "bisagra para caja de habano", descripcion: "", color: "" },
    { codigo: "item2-26", nombre: "bisagra cazoleta acero inox", descripcion: "", color: "" },
    { codigo: "item2-27", nombre: "bisagra cazoleta cierre suave acero inox", descripcion: "", color: "" },
    { codigo: "item2-28", nombre: "bisagra piano", descripcion: "", color: "" },
  ],
  canoOval: [
    { codigo: "item3-1", nombre: "caño oval para tira led", descripcion: "", color: "" },
    { codigo: "item3-2", nombre: "caño oval aluminio reforzado", descripcion: "", color: "" },
    { codigo: "item3-3", nombre: "caño oval aluminio", descripcion: "", color: "" },
    { codigo: "item3-4", nombre: "caño oval liso cromado", descripcion: "", color: "" },
  ],
  cerraduras: [],
};


// Función para obtener todas las imágenes que empiezan con un prefijo de código
function obtenerImagenesPorPrefijo(prefijo) {
  const entradas = Object.entries(imagenesHerrajes).filter(([key]) => key.startsWith(prefijo));
  entradas.sort(([a], [b]) => {
    const numA = parseInt(a.split('-').pop());
    const numB = parseInt(b.split('-').pop());
    return numA - numB;
  });
  return entradas.map(([, src]) => src);
}

const dataHerrajes = {
  mueble: Object.fromEntries(
    Object.entries(herrajesDataRaw).map(([categoria, items]) => [
      categoria,
      items.map((item) => {
        const imagenes = obtenerImagenesPorPrefijo(item.codigo);
        const imagenChica = imagenes[0] || null;
        const galeria = imagenes.slice(1); // secundarias
        return {
          ...item,
          imagenChica,
          imagenGrande: imagenes, // galería completa
          galeria, // solo secundarias
        };
      }),
    ])
  ),
};

export default dataHerrajes;

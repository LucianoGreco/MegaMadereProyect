import { imagenesHerrajes } from "@/data/image/gestorImage";

const herrajesDataRaw = {
  categorias: [
    {
      nombre: "Amortiguadore",
      productos: [
        { nombre: "Amortiguador de aplicar", imagen: "amortiguador-aplicar1-1" },
        { nombre: "Amortiguador de embutir corto", imagen: "amortiguador-embutir-blanco1-1" },
        { nombre: "Amortiguador de embutir largo", imagen: "amortiguador-embutir-largo1-1" },
        { nombre: "Pistón a gas 14", imagen: "piston-gas-141-1" }
      ]
    },
    {
      nombre: "Bisagras",
      codigo: "BC-150-0",
      productos: [
        {
          nombre: "Bisagra cazoleta 35 mm",
          imagenes: [
            "bisagra-cazoleta-35mm1-1",
            "bisagra-cazoleta-35mm1-2",
            "bisagra-cazoleta-35mm1-3",
            "bisagra-cazoleta-35mm1-4",
            "bisagra-cazoleta-35mm1-5"
          ]
        },
        { nombre: "Bisagra T hierro", imagen: "bisagra-t-hierro1-1" },
        { nombre: "Bisagra cazoleta 165g", imagen: "bisagra-cazoleta-165g1-1" },
        {
          nombre: "Bisagra cazoleta",
          imagenes: ["bisagra-cazoleta1-1", "bisagra-cazoleta1-2", "bisagra-cazoleta1-3"]
        },
        {
          nombre: "Bisagra cazoleta cierre lento",
          imagenes: ["bisagra-cazoleta-cierre-lento1-1", "bisagra-cazoleta-cierre-lento1-2"]
        },
        {
          nombre: "Bisagra cazoleta cierre lento clip",
          imagenes: [
            "bisagra-cazoleta-cierre-lento-clip1-1",
            "bisagra-cazoleta-cierre-lento-clip1-2",
            "bisagra-cazoleta-cierre-lento-clip1-3",
            "bisagra-cazoleta-cierre-lento-clip1-4",
            "bisagra-cazoleta-cierre-lento-clip1-5",
            "bisagra-cazoleta-cierre-lento-clip1-6"
          ]
        },
        {
          nombre: "Bisagra cazoleta angulo ciego",
          imagenes: ["bisagra-cazoleta-angulo-ciego1-1", "bisagra-cazoleta-angulo-ciego1-2"]
        },
        {
          nombre: "Bisagra cazoleta articulada",
          imagenes: ["bisagra-cazoleta-articulada1-1", "bisagra-cazoleta-articulada1-2"]
        },
        {
          nombre: "Bisagra cazoleta intermedia",
          imagenes: ["bisagra-cazoleta-intermedia1-1", "bisagra-cazoleta-intermedia1-2"]
        },
        {
          nombre: "Bisagra cazoleta perfil de aluminio",
          imagenes: ["bisagra-cazoleta-perfil-aluminio1-1", "bisagra-cazoleta-perfil-aluminio1-2"]
        },
        {
          nombre: "Bisagra cazoleta push open",
          imagenes: ["bisagra-cazoleta-push-open1-1", "bisagra-cazoleta-push-open1-2"]
        },
        {
          nombre: "Bisagra libro hierro bronceado",
          imagenes: ["bisagra-libro-hierro-bronceado1-1", "bisagra-libro-hierro-bronceado1-2"]
        },
        {
          nombre: "Bisagra oculta acerada",
          imagenes: ["bisagra-oculta-acerada1-1", "bisagra-oculta-acerada1-2"]
        },
        {
          nombre: "Bisagra oculta pvc",
          imagenes: ["bisagra-oculta-pvc1-1", "bisagra-oculta-pvc1-2"]
        },
        {
          nombre: "Pivot",
          imagenes: ["pivot1-1", "pivot1-2"]
        },
        {
          nombre: "Bisagra cazoleta 35 mm + 45°",
          imagenes: ["bisagra-cazoleta-35mm-45g1-1", "bisagra-cazoleta-35mm-45g1-2"]
        },
        {
          nombre: "Bisagra cazoleta 35 mm sin resorte",
          imagenes: [
            "bisagra-cazoleta-35mm-sin-resorte1-1",
            "bisagra-cazoleta-35mm-sin-resorte1-2",
            "bisagra-cazoleta-35mm-sin-resorte1-3"
          ]
        },
        {
          nombre: "Bisagra pomela acero inoxidable",
          imagenes: [
            "bisagra-pomela-acero-inoxidable1-1",
            "bisagra-pomela-acero-inoxidable1-2"
          ]
        },
        { nombre: "Bisagra cazoleta 165° soft closing", imagen: "bisagra-cazoleta-165°-soft-closing1-1" },
        {
          nombre: "Bisagra cazoleta 35mm -45°",
          imagenes: ["bisagra-cazoleta-35mm-45g2-1", "bisagra-cazoleta-35mm-45g2-2"]
        },
        {
          nombre: "Bisagra con autocierre",
          imagenes: ["bisagra-con-autocierre1-1", "bisagra-con-autocierre1-2"]
        },
        { nombre: "Bisagra cazoleta brazo corto", imagen: "bisagra-cazoleta-brazo-corto1-1" },
        { nombre: "Bisagra pomela 110x55x", imagen: "bisagra-pomela-110x55x2.8mm1-1" },
        { nombre: "Bisagra doble contacto", imagen: "bisagra-doble-contacto1-1" },
        { nombre: "Bisagra para caja de habano", imagen: "bisagra-para-caja-de-habano1-1" },
        {
          nombre: "Bisagra cazoleta acero inox",
          imagenes: ["bisagra-cazoleta-acero-inox1-1", "bisagra-cazoleta-acero-inox1-2"]
        },
        {
          nombre: "Bisagra cazoleta cierre suave acero inox",
          imagenes: [
            "bisagra-cazoleta-cierre-suave-acero-inox1-1",
            "bisagra-cazoleta-cierre-suave-acero-inox1-2",
            "bisagra-cazoleta-cierre-suave-acero-inox1-3",
            "bisagra-cazoleta-cierre-suave-acero-inox1-4"
          ]
        },
        { nombre: "Bisagra piano", imagen: "bisagra-piano1-1" }
      ]
    },
    {
      nombre: "Caño oval",
      productos: [
        { nombre: "Caño oval para tira led", imagen: "caño-oval-para-tira-led1-1" },
        { nombre: "Caño oval aluminio reforzado", imagen: "caño-oval-aluminio-reforzado1-1" },
        { nombre: "Caño oval aluminio", imagen: "caño-oval-aluminio1-1" },
        { nombre: "Caño oval liso cromado", imagen: "caño-oval-liso-cromado1-1" }
      ]
    },
    {
      nombre: "Cerraduras",
      productos: [
        {
          nombre: "Cerradura cajón base cuadrada",
          imagenes: ["cerradura-cajón-base-cuadrada1-1", "cerradura-cajón-base-cuadrada1-2"]
        },
        {
          nombre: "Cerradura cajón base redonda",
          imagenes: ["cerradura-cajón-base-redonda1-1", "cerradura-cajón-base-redonda1-2"]
        },
        {
          nombre: "Cerradura cajón base romboide",
          imagenes: ["cerradura-cajón-base-romboide1-1", "cerradura-cajón-base-romboide1-2"]
        },
        {
          nombre: "Cerradura cajón múltiple frontal",
          imagenes: ["cerradura-cajón-múltiple-frontal1-1", "cerradura-cajón-múltiple-frontal1-2"]
        },
        {
          nombre: "Cerradura cajón múltiple lateral",
          imagenes: ["cerradura-cajón-múltiple-lateral1-1", "cerradura-cajón-múltiple-lateral1-2"]
        },
        {
          nombre: "Cerradura con leva L",
          imagenes: ["cerradura-con-leva-l1-1", "cerradura-con-leva-l1-2"]
        },
        {
          nombre: "Cerradura de empuje",
          imagenes: ["cerradura-de-empuje1-1", "cerradura-de-empuje1-2"]
        },
        { nombre: "Cerradura digital con huella para muebles", imagen: "cerradura-digital-con-huella-para-muebles1-1" },
        {
          nombre: "Cerradura digital para muebles",
          imagenes: ["cerradura-digital-para-muebles1-1", "cerradura-digital-para-muebles1-2"]
        },
        {
          nombre: "Cerradura digital con tirador y leva",
          imagenes: ["cerradura-digital-con-tirador-y-leva1-1", "cerradura-digital-con-tirador-y-leva1-2"]
        },
        {
          nombre: "Cerradura con sistema push open",
          imagenes: ["cerradura-con-sistema-push-open1-1", "cerradura-con-sistema-push-open1-2"]
        },
        {
          nombre: "Cerradura para puerta corrediza",
          imagenes: ["cerradura-para-puerta-corrediza1-1", "cerradura-para-puerta-corrediza1-2"]
        },
        {
          nombre: "Cerradura para puerta vidrio",
          imagenes: ["cerradura-para-puerta-vidrio1-1", "cerradura-para-puerta-vidrio1-2"]
        },
        {
          nombre: "Cerradura tipo serrucho para vitrina",
          imagenes: ["cerradura-tipo-serrucho-para-vitrina1-1", "cerradura-tipo-serrucho-para-vitrina1-2"]
        },
        { nombre: "Cerradura magnética oculta", imagen: "cerradura-magnetica-oculta1-1" },
        {
          nombre: "Cerradura con leva y combinación",
          imagenes: ["cerradura-con-leva-y-combinación1-1", "cerradura-con-leva-y-combinación1-2"]
        },
        {
          nombre: "Cerradura vidrio doble",
          imagenes: ["cerradura-vidrio-doble1-1", "cerradura-vidrio-doble1-2"]
        },
        {
          nombre: "Cerradura de cajón liviana",
          imagenes: ["cerradura-de-cajón-liviana1-1", "cerradura-de-cajón-liviana1-2"]
        },
        { nombre: "Cerradura leva con tirador", imagen: "cerradura-leva-con-tirador1-1" }
      ]
    }
  ]
};

/**
 * Transforma los nombres de imagen en rutas válidas importadas desde gestorImage.
 */

function asignarImagenes(data, imagenes) {
  return {
    ...data,
    categorias: data.categorias.map(categoria => ({
      ...categoria,
      productos: categoria.productos.map(producto => {
        const obtenerClave = (img) => img?.toLowerCase().replace(/-\d+$/, '');

        if (producto.imagen) {
          const clave = obtenerClave(producto.imagen);
          return {
            ...producto,
            imagenes: imagenes[clave] || []
          };
        }

        if (producto.imagenes?.length > 0) {
          const clave = obtenerClave(producto.imagenes[0]);
          return {
            ...producto,
            imagenes: imagenes[clave] || []
          };
        }

        return producto;
      })
    }))
  };
}

const herrajesDataConImagenes = asignarImagenes(herrajesDataRaw, imagenesHerrajes);

export default herrajesDataConImagenes;

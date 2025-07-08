import { CardHomeImage, backgroundPage } from "@/data/image/gestorImage.js";

const buildSection = ({ id, name, image, page, description = "" }) => {
  const key = name.toLowerCase();
  return {
    id,
    name,
    description,
    image,
    page,
    background: backgroundPage[key] || null,
  };
};

const data = {
  secciones: {
    herrajes: buildSection({
      id: 1,
      name: "Herrajes",
      image: CardHomeImage.herrajes,
      page: "/herrajes",
      description:
        "La mejor selección de herrajes para muebles y construcción, con diseños modernos y alta calidad para todos tus proyectos."
      }),
    melaminas: buildSection({
      id: 2,
      name: "Melaminas",
      image: CardHomeImage.melaminas,
      page: "/melaminas",
      description:
        "Amplia variedad de melaminas en distintos colores y texturas para dar estilo y durabilidad a tus muebles."
    }),
    muebles: buildSection({
      id: 3,
      name: "Muebles",
      image: CardHomeImage.muebles,
      page: "/muebles",
      description:
        "Diseños exclusivos de muebles funcionales y estéticos para cada ambiente de tu hogar u oficina."
    }),
    revestimiento: buildSection({
      id: 4,
      name: "Revestimientos",
      image: CardHomeImage.pisos,
      page: "/revestimientos",
      description:
        "Revestimientos de pared y pisos que combinan belleza y resistencia para transformar tus espacios."
    }),
    simulador: buildSection({
      id: 6,
      name: "Simulador",
      image: CardHomeImage.simulador,
      page: "/simulador",
      description:
        "Visualiza cómo quedarán tus ambientes antes de comenzar tu proyecto con nuestro simulador interactivo."
    }),
    vinilos: buildSection({
      id: 8,
      name: "Vinilos",
      image: CardHomeImage.vinilovidrios,
      page: "/viniloParaVidrios",
      description:
        "Vinilos decorativos y funcionales para vidrios, que aportan privacidad y un toque elegante a tus ambientes."
    }),
    contacto: buildSection({
      id: 9,
      name: "Contactos",
      image: CardHomeImage.contactos,
      page: "/contactos",
      description:
        "Contáctanos para asesoramiento personalizado y resolver todas tus consultas sobre nuestros productos y servicios."
    }),
  },
};

export default data;

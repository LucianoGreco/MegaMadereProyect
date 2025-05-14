import { CardHomeImage, backgroundPage } from "@/data/image/gestorImage.js";
// import { info } from "@/data/image/gestorImage";

const data = {
  backgroundPage: backgroundPage.home,

  secciones: {
    herrajes: {
      id: 1,
      name: "Herrajes",
      description: "",
      image: CardHomeImage.herrajes,
      backgroundPage: backgroundPage.herrajes,
      page: "/herrajes",
      // info: info.herrajes,
    },
    melaminas: {
      id: 2,
      name: "Melaminas",
      description: "",
      image: CardHomeImage.melaminas,
      backgroundPage: backgroundPage.melaminas,
      page: "/melaminas",
      // info: info.melaminas,
    },
    muebles: {
      id: 3,
      name: "Muebles",
      description: "",
      image: CardHomeImage.muebles,
      backgroundPage: backgroundPage.muebles,
      page: "/muebles",
      // info: info.muebles,
    },
    revestimiento: {
      id: 4,
      name: "Revestimientos",
      description: "",
      image: CardHomeImage.pisos,
      backgroundPage: backgroundPage.revestimientos,
      page: "/revestimientoPiso",
      // info: info.revestimientoPiso,
    },
    simulador: {
      id: 6,
      name: "Simulador",
      description: "",
      image: CardHomeImage.simulador,
      backgroundPage: backgroundPage.simulador,
      page: "/simulado",
      // info: info.simulador,
    },
    viniloParaVidrios: {
      id: 8,
      name: "Vinilo para Vidrios",
      description: "",
      image: CardHomeImage.vinilovidrios,
      backgroundPage: backgroundPage.vinilovidiros,
      page: "/viniloParaVidrios",
      // info: info.viniloParaVidrios,
    },
    contacto: {
      id: 9,
      name: "Contactos",
      description: "",
      image: CardHomeImage.contactos,
      backgroundPage: backgroundPage.contactos,
      page: "/contactos",
      // info: info.contactos,
    },
  },
};

export default data;

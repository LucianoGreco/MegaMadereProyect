import { imagenesCardHome, backgroundPage, imagenlogo } from "./imagenes"; 

const data = {
  background: backgroundPage.Home,
  secciones: {
    novedades: {
      id: 1,
      nombre: "Novedades",
      descripcion: "Últimas novedades en Mega Madera",
      cardHome: imagenesCardHome.novedades,
      // backgroundPagina: backgroundNovedades,
      pagina: 'novedades',  // Aquí se guarda la ruta relativa
    },
    Simulador: {
      id: 2,
      nombre: "Simulador",
      titulo: "Mas de +100 diseños exclusvos",
      descripcion: "Adaptamos tu diseño favorito a las dimensiones de tu hogar",
      cardHome: imagenesCardHome.muebles,
      backgroundPagina: backgroundPage.simulador,
      pagina: 'simulador',
    },
    herrajes: {
      id: 3,
      nombre: "Herrajes",
      descripcion: "Herrajes de alta calidad",
      cardHome: imagenesCardHome.herrajes,
      // backgroundPagina: backgroundHerrajes,
      pagina: 'herrajes',
    },
    melaminas: {
      id: 4,
      nombre: "Melaminas",
      descripcion: "Placas de melamina de alta calidad",
      cardHome: imagenesCardHome.melaminas,
      // backgroundPagina: backgroundMelamina,
      pagina: 'melaminas',
    },
    envios: {
      id: 5,
      nombre: "Envíos",
      descripcion: "Envíos a todo el país",
      cardHome: imagenesCardHome.envios,
      // backgroundPagina: backgroundEnvios,
      pagina: 'envios',
    },
    contactos: {
      id: 6,
      nombre: "contactos",
      descripcion: "Información de contacto",
      cardHome: imagenesCardHome.contactos,
      // backgroundPagina: backgroundContactos,
      pagina: 'contactos',
      nombreEmpresa: "Mega Madera",
      direccion: "Av. Moreno 1455",
      localidad: "San Rafael",
      provincia: "Mendoza",
      pais: "Argentina",
      telefono: "2604422505",
      email: "contacto@megamadera.com",
      horario: "Lunes a Sabados ( 9:00hs - 17:30hs )",
      logo: imagenlogo.logo,
      redes:{
        facebook: "https://facebook.com/megamadera",
        instagram: "instagram.com/mega.madera",
        whatsApp: "https://wa.me/+549260433172",
        gmail: "ventas.megamadera@gmail.com",
      }
    },
    muebles: {
      id: 7,
      nombre: "Muebles",
      descripcion: "Muebles para cada ambiente",
      cardHome: imagenesCardHome.muebles,
      // backgroundPagina: backgroundMuebles,
      pagina: 'muebles',
    }
  },
};

export default data;






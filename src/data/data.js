import novedades  from "../assets/Images/novedades.jpg";
import disenios   from "../assets/Images/disenios.jpg";
import muebles    from "../assets/Images/muebles.jpeg";
import melaminas  from "../assets/Images/melaminas.jpg";
import herrajes   from "../assets/Images/herrajes.png";
import contactos  from "../assets/Images/contactos.jpg";
import envios from "../assets/Images/envios.jpg";
import logo       from "../assets/logoB.png";
import background from "../assets/Images/background.jpg";



const data = {
  background: background,
  secciones: {
    
    disenios: {
      id: 1,
      nombre: "Diseños",
      titulo: "Mas de +100 diseños exclusvos",
      descripcion: "Adaptamos tu diseño favorito a las dimensiones de tu hogar",
      imagen: disenios,
      pagina: 'disenios',
    },
    novedades: {
      id: 2,
      nombre: "Novedades",
      descripcion: "Últimas novedades en Mega Madera",
      imagen: novedades,
      pagina: 'novedades',  // Aquí se guarda la ruta relativa
    },
    herrajes: {
      id: 3,
      nombre: "Herrajes",
      descripcion: "Herrajes de alta calidad",
      imagen: herrajes,
      pagina: 'herrajes',
    },
    melaminas: {
      id: 4,
      nombre: "Melaminas",
      descripcion: "Placas de melamina de alta calidad",
      imagen: melaminas,
      pagina: 'melaminas',
    },
    envios: {
      id: 5,
      nombre: "Envíos",
      descripcion: "Envíos a todo el país",
      imagen: envios,
      pagina: 'envios',
    },
    contactos: {
      id: 6,
      nombre: "Contactos",
      descripcion: "Información de contacto",
      imagen: contactos,
      pagina: 'contactos',
      nombreEmpresa: "Mega Madera",
      direccion: "Avenida Moreno 123",
      localidad: "San Rafael",
      provincia: "Mendoza",
      pais: "Argentina",
      telefono: "260433172",
      email: "contacto@megamadera.com",
      horario: "Lunes a viernes 9:00 a 18:00",
      logo: logo,
      redes:{
        facebook: "https://facebook.com/megamadera",
        instagram: "https://facebook.com/megamadera",
        whatsApp: "https://wa.me/+549260433172",
        gmail: "mailto:contacto@megamadera.com",
      }
    },
    muebles: {
      id: 7,
      nombre: "Muebles",
      descripcion: "Muebles para cada ambiente",
      imagen: muebles,
      pagina: 'muebles',
    }
  },
};

export default data;







import imagenLogo from "@/assets/logo/logo.png";

const contactos = {
  nombreEmpresa: "Mega Madera",
  direccion: {
    calle: "Av. Moreno 1455",
    localidad: "San Rafael",
    provincia: "Mendoza",
    pais: "Argentina",
  },
  telefono: "+54 260422505",
  correo: "contacto@megamadera.com",
  horarios: {
    mañana: {
      apertura: "08:00",
      cierre: "13:00",
    },
    tarde: {
      apertura: "16:00",
      cierre: "20:00",
    },
  },
  dias: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  logo: imagenLogo,
  redesSociales: {
    facebook: "https://facebook.com/megamadera",
    instagram: "https://instagram.com/mega.madera",
    whatsapp: "https://wa.me/+549260433172",
    correoVentas: "ventas.megamadera@gmail.com",
    GoogleMaps: "https://maps.app.goo.gl/ZKd8QbWgY8aJM6gF9"
  },
};

export default contactos;

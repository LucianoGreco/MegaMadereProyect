import imagenLogo from "@/assets/logo/logo.png"; // ✅ Si Vite la soporta como import

const contactos = {
  nombreEmpresa: "Mega Madera",
  direccion: {
    calle: "megamadera",
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
  horarios: [9, 19],
  logo: imagenLogo, // ⚠️ Este debe ser una URL procesable por el navegador
  redesSociales: {
    facebook: "https://facebook.com/megamadera",
    instagram: "https://instagram.com/mega.madera",
    whatsapp: "https://wa.me/+549260433172",
    correoVentas: "ventas.megamadera@gmail.com",
  },
};

export default contactos;
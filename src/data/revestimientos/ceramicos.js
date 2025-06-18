import { imagenesRevestimiento } from "@/data/image/gestorImage";

const productosRaw = [
  {
    id: "azulejo-16211-1", 
    nombre: "azulejo 16211",
    descripcion: "wallsticker azulejo 15 x 15",
    precio: 7955,
    estado: "disponible",
  },
  {
    id: "azulejo-16221-1",
    nombre: "azulejo 16221",
    precio: 7955.0,
    descripcion: "wallsticker azulejo 15 x 15",
  },
  {
    id: "azulejo-16231-1",
    nombre: "azulejo 16231",
    precio: 7955.0,
    descripcion: "wallsticker azulejo 15 x 15",
  },
  {
    id: "azulejo-16601-1", //✅
    nombre: "azulejo 16601",
    descripcion: "wallsticker azulejo 15x15",
    precio: 7955,
    estado: "agotado",
  },
  {
    id: "azulejo-16641-1",
    nombre: "azulejo 16641",
    precio: 7955.0,
    descripcion: "wallsticker azulejo 15x15",
  },
  {
    id: "azulejo-16651-1",
    nombre: "azulejo 16651",
    precio: 7955.0,
    descripcion: "wallsticker azulejo 15 x 15",
  },
  {
    id: "ceramico-calareo-16581-1", //✅
    nombre: "cerámico carrara 16661",
    descripcion: "cerámico carrara",
    precio: 9594,
    estado: "disponible",
  },
  {
    id: "ceramico-carrara-16661-1",
    nombre: "ceramico carrara 16661",
    precio: 9594.0,
    descripcion: "ceramico carrara",
  },
  {
    id: "ceramico-damero-16681-1",
    nombre: "ceramico damero 16681",
    precio: 9594.0,
    descripcion: "ceramico damore",
  },
  {
    id: "ceramico-espiga-verde-1",
    nombre: "ceramico espiga verde",
    precio: 9594.0,
    descripcion: "ceramico espiga verde 25.40 x 25.40",
  },
  {
    id: "ceramico-imperial-16671-1",
    nombre: "ceramico imperial 16671",
    precio: 9594.0,
    descripcion: "ceramico imperial",
  },
  {
    id: "ceramico-subway-16531-1", 
    nombre: "cerámico subway 16531",
    descripcion: "cerámico blanco 25.40 x 25.40",
    precio: 9594,
    estado: "disponible",
  },
  {
    id: "ceramico-subway-negro-16532-1", 
    nombre: "cerámico subway negro 16532",
    descripcion: "cerámico negro 25.40 x 25.40",
    precio: 9594,
    estado: "disponible",
  },
  {
    id: "ceramico-terrozo-16541-1", 
    nombre: "cerámico terrozo 16541",
    precio: 9594.0,
    descripcion: "ceramico terrozo 25.40 x 25.40",
    estado: "disponible",
  },
  {
    id: "hexa-negro-16591-1",
    nombre: "hexa. negro 16591", 
    precio: 9594.0,
    descripcion: "ceramico hexag ngro 25.4x25.4",
    estado: "disponible",
  },
  {
    id: "hexa-blanco-16592-1",
    nombre: "hexa blanco 16592", 
    precio: 9594.0,
    descripcion: "ceramico hexag bco 25.4x25.4",
    estado: "disponible",
  },
  {
    id: "venecita-clasica-13201-1", 
    nombre: "venecita clásica 13201",
    descripcion: "venecita clásica 12.70 x 30.84",
    precio: 6630,
    estado: "disponible",
  },
  {
    id: "venecita-geometrica-13221-1", 
    nombre: "venecita geométrica 13221",
    descripcion: "venecita geométrica 12.7 x 30.84",
    precio: 6630,
    estado: "disponible",
  },
  {
    id: "venecita-romantica-13231-1", 
    nombre: "venecita romántica 13231",
    descripcion: "venecita romántica 12.70 x 30.84",
    precio: 6630,
    estado: "disponible",
  },
];

export const ceramicos = productosRaw.map((producto) => {
  const claveImagen = producto.id.replace(/-\d+$/, '');
  return {
    ...producto,
    imagenes: imagenesRevestimiento.pared.ceramicos[claveImagen] || [],
  };
});
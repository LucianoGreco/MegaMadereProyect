    import { imagenesRevestimiento } from "@/data/image/gestorImage";
    
  const productosRaw = [
     {
  id: "alce-16621-1",
  nombre: "alce 16621",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "arcoiris-16701-1",
  nombre: "arcoiris 16701",
  preciooriginal: 11175.0,
  precioactual: 7822.0,
  estado: "disponible"
},
{
  id: "caritas-16631-1",
  nombre: "caritas 16631",
  preciooriginal: 11175.0,
  precioactual: 7822.0,
  estado: "disponible"
},
{
  id: "etnico-16291-1",
  nombre: "étnico 16291",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "familia-16571-1",
  nombre: "familia 16571",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "food-16691-1",
  nombre: "food 16691",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "frase-nunca-16711-1",
  nombre: "frase nunca 16711",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "frases-16501-1",
  nombre: "frases 16501",
  preciooriginal: 11175.0,
  precioactual: 7822.0,
  estado: "disponible"
},
{
  id: "frases-sueños-16561-1",
  nombre: "frases sueños 16561",
  preciooriginal: 9316.0,
  precioactual: 6521.0,
  estado: "disponible"
},
{
  id: "mariposas-16031-1",
  nombre: "mariposas 16031",
  preciooriginal: 11175.0,
  precioactual: 7822.0,
  estado: "disponible"
}
      ];
// Asignamos las imágenes según clave sin sufijo -1
export const wallstickers = productosRaw.map((producto) => {
  const claveImagen = producto.id.replace(/-\d+$/, '');
  return {
    ...producto,
    imagenes: imagenesRevestimiento.pared.wallstickers[claveImagen] || [],
  };
});
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRevestimientosNormalizados, API_BASE } from "@/api/api.js";

const RevestimientosPage = () => {
  const [revestimientos, setRevestimientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const categoriaKey = "categoria";
  const productosKey = "productos";

  useEffect(() => {
    const cargarRevestimientos = async () => {
      try {
        const res = await getRevestimientosNormalizados();
        console.log("✅ Datos normalizados:", res.data);
        setRevestimientos(res.data || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    cargarRevestimientos();
  }, []);

  const filtrar = (producto) => {
    const termino = busqueda.trim().toLowerCase();
    return producto.nombre?.toLowerCase().includes(termino);
  };

  if (loading) return <Container>Cargando revestimientos…</Container>;
  if (error) return <Container>Error al cargar los datos.</Container>;

  if (!revestimientos.length) {
    return <Container>No hay revestimientos para mostrar.</Container>;
  }

  return (
    <Container>
      <TituloPrincipal>Revestimientos</TituloPrincipal>
      <Busqueda
        type="text"
        placeholder="Buscar por nombre…"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {revestimientos.map((cat, idx) => {
        const categoriaNombre = cat[categoriaKey];
        const productos = Array.isArray(cat[productosKey]) ? cat[productosKey] : [];

        const productosFiltrados =
          busqueda.trim() === ""
            ? productos
            : productos.filter(filtrar);

        if (!productosFiltrados.length) return null;

        return (
          <div key={idx}>
            <CategoriaTitulo>{categoriaNombre}</CategoriaTitulo>
            <Grid>
              {productosFiltrados.map((prod, j) => (
                <ProductoCard
                  key={j}
                  producto={prod}
                  categoria={categoriaNombre}
                />
              ))}
            </Grid>
          </div>
        );
      })}
    </Container>
  );
};

const construirRutaImagen = (categoria, nombreImagen) => {
  if (!categoria || !nombreImagen) return "";

  const partes = categoria
    .split(" - ")
    .map((s) => s.replace(/-/g, " ").trim());
  const ruta = partes.join("/");

  return `${API_BASE.replace("/api", "")}/products/revestimientos/pared/${ruta}/${nombreImagen.trim()}`;
};

const ProductoCard = ({ producto, categoria }) => {
  const [imagenActiva, setImagenActiva] = useState(0);
  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];

  const imagenSrc =
    imagenes[imagenActiva] && categoria
      ? construirRutaImagen(categoria, imagenes[imagenActiva])
      : "";

  return (
    <Card>
      {imagenSrc && (
        <Imagen src={imagenSrc} alt={producto.nombre || "Sin nombre"} />
      )}

      {imagenes.length > 1 && (
        <Miniaturas>
          {imagenes.map((img, idx) => (
            <Miniatura
              key={idx}
              src={construirRutaImagen(categoria, img)}
              alt={`Miniatura ${idx}`}
              onClick={() => setImagenActiva(idx)}
              $activa={idx === imagenActiva}
            />
          ))}
        </Miniaturas>
      )}

      <Nombre>{producto.nombre}</Nombre>
      {producto.descripcion && <Descripcion>{producto.descripcion}</Descripcion>}
    </Card>
  );
};

export default RevestimientosPage;

// 🎨 Estilos
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TituloPrincipal = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;
`;

const CategoriaTitulo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Busqueda = styled.input`
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Imagen = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Miniaturas = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
`;

const Miniatura = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.$activa ? "#000" : "#ccc")};
  cursor: pointer;
  transition: border 0.3s;
`;

const Nombre = styled.h3`
  font-size: 1.1rem;
  margin-top: 0.75rem;
  color: #000;
`;

const Descripcion = styled.p`
  font-size: 0.9rem;
  color: #000;
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHerrajes } from '@/api/api.js';

const construirRutaImagen = (imagen, categoria) => {
  if (!imagen || !categoria) return '';
  const fileName = imagen.split('/').pop();
  return `http://localhost:4000/products/herrajes/${encodeURIComponent(categoria)}/${encodeURIComponent(fileName)}`;
};

const HerrajesPage = () => {
  const [herrajes, setHerrajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const cargarHerrajes = async () => {
      try {
        const res = await getHerrajes();
        console.log("📦 Datos crudos desde API herrajes:", res.data);

        let data = res.data?.herrajes || res.data?.data || res.data || [];
        setHerrajes(data);
      } catch (err) {
        console.error('❌ Error al cargar herrajes:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    cargarHerrajes();
  }, []);

  console.log("🔷 herrajes en render:", herrajes);

  const filtrar = (producto) => {
    const termino = busqueda.toLowerCase();
    return producto.nombre?.toLowerCase().includes(termino);
  };

  if (loading) return <Container>Cargando herrajes...</Container>;
  if (error) return <Container>Error al cargar los datos.</Container>;

  if (!herrajes.length) {
    return <Container>No hay herrajes para mostrar.</Container>;
  }

  return (
    <Container>
      <TituloPrincipal>Herrajes</TituloPrincipal>
      <Busqueda
        type="text"
        placeholder="Buscar herraje por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {herrajes.map((categoria, i) => (
        <div key={i}>
          <CategoriaTitulo>{categoria.categoria}</CategoriaTitulo>
          <Grid>
            {categoria.productos.filter(filtrar).length === 0 ? (
              <p>No hay productos en esta categoría.</p>
            ) : (
              categoria.productos.filter(filtrar).map((prod, j) => (
                <ProductoCard key={j} producto={prod} categoria={categoria.categoria} />
              ))
            )}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

const ProductoCard = ({ producto, categoria }) => {
  const [imagenActiva, setImagenActiva] = useState(0);
  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];

  const imagenSrc = construirRutaImagen(imagenes[imagenActiva], categoria);

  return (
    <Card>
      {imagenSrc && (
        <Imagen src={imagenSrc} alt={producto.nombre || 'Sin nombre'} />
      )}

      {imagenes.length > 1 && (
        <Miniaturas>
          {imagenes.map((img, idx) => (
            <Miniatura
              key={idx}
              src={construirRutaImagen(img, categoria)}
              alt={`Miniatura ${idx}`}
              onClick={() => setImagenActiva(idx)}
              $activa={idx === imagenActiva}
            />
          ))}
        </Miniaturas>
      )}

      <Nombre>{producto.nombre}</Nombre>
      <Descripcion>{producto.descripcion || 'Sin descripción'}</Descripcion>
    </Card>
  );
};

export default HerrajesPage;

// Estilos
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
  font-size: 1.5rem;
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
  background: #ffffff;
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
  border: 2px solid ${(props) => (props.$activa ? '#000' : '#ccc')};
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

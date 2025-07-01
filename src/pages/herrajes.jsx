import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchHerrajes, URL_BASE } from '@/api/api.js';

// Función única para construir la URL de la imagen
const construirRutaImagen = (img, categoria = 'otros') => {
  if (!img) return '';

  if (img.startsWith('/products/')) {
    return `${URL_BASE}${img}`; // ya está completo
  }

  const slug = categoria.toLowerCase().replace(/\s+/g, '-');
  const tieneExtension = /\.[a-zA-Z0-9]{3,4}$/.test(img);

  return `${URL_BASE}/products/herrajes/${slug}/${img}${tieneExtension ? '' : '.jpg'}`;
};

const HerrajesPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await fetchHerrajes();
        setCategorias(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('❌ Error al obtener herrajes:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    obtenerDatos();
  }, []);

  if (loading) return <Container>Cargando herrajes...</Container>;
  if (error) return <Container>Error al cargar los datos.</Container>;

  return (
    <Container>
      <TituloPrincipal>Herrajes</TituloPrincipal>

      {categorias.length > 0 ? (
        categorias.map((cat, i) => (
          <div key={i}>
            <CategoriaTitulo>{cat.categoria}</CategoriaTitulo>
            <Grid>
              {Array.isArray(cat.productos) && cat.productos.length > 0 ? (
                cat.productos.map((prod, j) => (
                  <ProductoCard
                    key={j}
                    producto={prod}
                    categoria={cat.categoria}
                  />
                ))
              ) : (
                <p>No hay productos en esta categoría.</p>
              )}
            </Grid>
          </div>
        ))
      ) : (
        <p>No se encontraron categorías.</p>
      )}
    </Container>
  );
};

const ProductoCard = ({ producto, categoria }) => {
  const [imagenActiva, setImagenActiva] = useState(0);

  const imagenes = Array.isArray(producto.imagenes)
    ? producto.imagenes
    : producto.imagen
    ? [producto.imagen]
    : [];

  const imagenSrc = construirRutaImagen(imagenes[imagenActiva], categoria);

  return (
    <Card>
      {imagenSrc && <Imagen src={imagenSrc} alt={producto.nombre || 'Sin nombre'} />}
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
      <Nombre>{producto.nombre || 'Sin nombre'}</Nombre>
      <Descripcion>{imagenes[0] || 'Sin imagen'}</Descripcion>
    </Card>
  );
};

export default HerrajesPage;


// 🎨 ESTILOS
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

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
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

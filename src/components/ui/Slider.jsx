// ✅ Archivo: src/components/ui/Slider.jsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints';
import { URL_BASE } from '@/api/api';
import { useNavigate } from 'react-router-dom';

const Slider = ({
  titulo = 'Productos',
  data = [],
  categoriaKey = 'nombre',
  productosKey = 'productos',
  buildImagePath,
}) => {
  const carruselRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (dir) => {
    if (!carruselRef.current) return;
    const step = 200;
    carruselRef.current.scrollBy({
      left: dir === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  const defaultBuildImagePath = (categoria, nombreImagen) => {
    const slugCategoria = categoria?.toLowerCase().replace(/\s+/g, '-') || 'otros';
    const tieneExtension = /\.[a-zA-Z0-9]{3,4}$/.test(nombreImagen);
    return `${URL_BASE}/products/${slugCategoria}/${nombreImagen.trim()}${tieneExtension ? '' : '.jpg'}`;
  };

  const imagenes = [];

  data.forEach(item => {
    const categoriaNombre = item[categoriaKey] || 'otros';
    const productos = Array.isArray(item[productosKey]) ? item[productosKey] : [item];

    productos.forEach(prod => {
      const imgs = Array.isArray(prod.imagenes)
        ? prod.imagenes
        : prod.imagen
        ? [prod.imagen]
        : [];

      imgs.forEach(img => {
        const url = img.startsWith('/products/')
          ? `${URL_BASE}${img}`
          : buildImagePath
          ? buildImagePath(categoriaNombre, img)
          : defaultBuildImagePath(categoriaNombre, img);

        imagenes.push({
          url,
          alt: prod.nombre || 'Producto',
          producto: prod,
          categoria: categoriaNombre,
        });
      });
    });
  });

  if (!imagenes.length) {
    return <SliderWrapper>No hay imágenes para mostrar.</SliderWrapper>;
  }

  const irADetalle = (producto, categoria) => {
    // Ruta ejemplo: /producto/herrajes?nombre=Bisagra
    const nombre = encodeURIComponent(producto.nombre);
    const slugCategoria = categoria.toLowerCase().replace(/\s+/g, '-');
    navigate(`/producto/${slugCategoria}?nombre=${nombre}`);
  };

  return (
    <SliderWrapper>
      <Header>
        <Titulo>{titulo}</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll('left')}>←</Btn>
          <Btn onClick={() => scroll('right')}>→</Btn>
        </NavButtons>
      </Header>

      <Carrusel ref={carruselRef}>
        {imagenes.map((img, idx) => (
          <Card key={idx} onClick={() => irADetalle(img.producto, img.categoria)}>
            <Imagen src={img.url} alt={img.alt} />
            <Nombre>{img.alt}</Nombre>
          </Card>
        ))}
      </Carrusel>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  color: black;
  width: 100%;
  margin-top: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Titulo = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: black;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-shrink: 0;
`;

const Btn = styled.button`
  background: var(--text-color);
  color: var(--background-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
  }
`;

const Carrusel = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 1rem 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 180px;
  scroll-snap-align: center;
  background: var(--background-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 140px;
    padding: 0.8rem;
  }
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin: 0 auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80px;
    height: 80px;
  }
`;

const Nombre = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem;
  color: black;
  background-color: #f9f9f9;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

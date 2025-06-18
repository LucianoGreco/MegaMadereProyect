import React, { useRef } from "react";
import styled from "styled-components";
import herrajesData from "@/data/pages/herrajes";
import { breakpoints } from "@/styles/breakpoints";

// ✅ Extraer TODAS las imágenes con su nombre
const todasLasImagenes = herrajesData.categorias.flatMap((categoria) =>
  categoria.productos.flatMap((producto) => {
    if (producto.imagenes)
      return producto.imagenes.map((img) => ({ imagen: img, nombre: producto.nombre }));
    if (producto.imagen)
      return [{ imagen: producto.imagen, nombre: producto.nombre }];
    return [];
  })
);

const HerrajesSlider = () => {
  const carruselRef = useRef(null);

  const scroll = (dir) => {
    if (!carruselRef.current) return;
    const step = 200;
    carruselRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <SliderWrapper>
      <Header>
        <Titulo>Herrajes Destacados</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll("left")}>←</Btn>
          <Btn onClick={() => scroll("right")}>→</Btn>
        </NavButtons>
      </Header>

      <Carrusel ref={carruselRef}>
        {todasLasImagenes.map(({ imagen, nombre }, index) => (
          <Card key={index}>
            <Thumb src={imagen} alt={nombre} />
            <Nombre>{nombre}</Nombre>
          </Card>
        ))}
      </Carrusel>
    </SliderWrapper>
  );
};

export default HerrajesSlider;

// ⬇️ ESTILOS
const SliderWrapper = styled.div`
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
  color: var(--text-color);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
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
  width: 140px;
  scroll-snap-align: center;
  background: var(--background-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 120px;
    padding: 0.8rem;
  }
`;

const Thumb = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80px;
    height: 80px;
  }
`;

const Nombre = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: black;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

import React, { useRef } from "react";
import styled from "styled-components";
import dataMelaminas from "@/data/pages/melaminas";
import { breakpoints } from "@/styles/breakpoints";

const productosDestacados = dataMelaminas["Tableros Melaminas"].Nature.slice(0, 10);

const MelaminasSlider = () => {
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
        <Titulo>Melaminas Destacadas</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll("left")}>←</Btn>
          <Btn onClick={() => scroll("right")}>→</Btn>
        </NavButtons>
      </Header>

      <Carrusel ref={carruselRef}>
        {productosDestacados.map((melamina, index) => (
          <Card key={index}>
            <Imagen src={melamina.imagenChica} alt={melamina.nombre} />
            <Nombre>{melamina.nombre}</Nombre>
          </Card>
        ))}
      </Carrusel>
    </SliderWrapper>
  );
};

export default MelaminasSlider;

// Styled Components

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

  &:hover {
    transform: scale(1.03);
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

import React, { useRef } from "react";
import styled from "styled-components";
import { empapelados } from "@/data/revestimientos/empapelados"; // asegúrate de que esté bien exportado
import { breakpoints } from "@/styles/breakpoints";

const EmpapeladosSlider = () => {
  const carruselRef = useRef(null);

  const scroll = (dir) => {
    if (!carruselRef.current) return;
    const step = 200;
    carruselRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Filtrar productos con imágenes
  const productosConImagenes = empapelados.filter((prod) => prod.imagenes.length > 0);

  return (
    <SliderWrapper>
      <Header>
        <Titulo>Empapelados Destacados</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll("left")}>←</Btn>
          <Btn onClick={() => scroll("right")}>→</Btn>
        </NavButtons>
      </Header>

      <Carrusel ref={carruselRef}>
        {productosConImagenes.flatMap(({ nombre, imagenes }, index) =>
          imagenes.map((img, i) => (
            <Card key={`${index}-${i}`}>
              <Thumb src={img} alt={nombre} />
              <Nombre>{nombre}</Nombre>
            </Card>
          ))
        )}
      </Carrusel>
    </SliderWrapper>
  );
};

export default EmpapeladosSlider;

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
`;

const Btn = styled.button`
  background: var(--text-color);
  color: var(--background-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;

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
  text-align: center;
  background: var(--background-color);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
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
  margin: auto;

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

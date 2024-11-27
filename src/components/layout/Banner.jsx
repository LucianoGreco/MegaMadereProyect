// src/components/layout/Banner.jsx
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '@/data/data';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = useMemo(() => Object.values(data.secciones), [data.secciones]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sections.length]);

  const currentSection = sections[currentIndex];

  return (
    <BannerContainer>
      <ImageWrapper>
        <BannerImage src={currentSection.cardHome} alt={currentSection.nombre} />
      </ImageWrapper>
      <StyledButton to={`/${currentSection.pagina}`}>{currentSection.nombre}</StyledButton>
    </BannerContainer>
  );
};
const BannerContainer = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);  /* Agregando la sombra */
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ isMovingLeftToRight }) => (isMovingLeftToRight ? '0' : '-3vw')};
  width: 104vw;
  transition: left 3s ease-in-out;
`;

const BannerImage = styled.img`
  width: 110vw;
  height: 100vh;
`;

const StyledButton = styled(Link)`
  position: absolute;
  bottom: 5rem;
  left: 10%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem; /* Ajusta el tamaño según sea necesario */
  text-transform: uppercase; /* Opcional, para estilo */
  text-decoration: none;

  /* Estilos heredados de GlobalStyles */
  backdrop-filter: blur(10px);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-weight: bold;
  padding: 10px 20px;
  text-shadow: var(--shadow);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: var(--hover-text-color);
    background-color: var(--hover-background-color);
  }
`;

export default Banner;

// Banner.jsx:
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data";
import Header from "../layout/Header";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMovingLeftToRight, setIsMovingLeftToRight] = useState(true);

  const sections = Object.values(data.secciones);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMovingLeftToRight((prev) => !prev);

      if (isMovingLeftToRight) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isMovingLeftToRight, sections.length]);

  const currentSection = sections[currentIndex];

  return (
    <BannerContainer>
      <Header />
      <ImageWrapper isMovingLeftToRight={isMovingLeftToRight}>
        <BannerImage src={currentSection.imagen} alt={currentSection.nombre} />
      </ImageWrapper>
      <StyledButton to={`/${currentSection.pagina}`}>{currentSection.nombre}</StyledButton> // Usa Link para redireccionar
    </BannerContainer>
  );
};

// Estilos usando styled-components
const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ isMovingLeftToRight }) => (isMovingLeftToRight ? "0" : "-3vw")};
  width: 104vw;
  height: 100%;
  transition: left 3s ease-in-out;
`;

const BannerImage = styled.img`
  width: 110vw;
  height: 100vh;
  object-fit: cover;
`;

const StyledButton = styled(Link)` // Usa Link estilizado
  position: absolute;
  bottom: 180px;
  left: 20%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default Banner;

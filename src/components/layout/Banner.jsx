import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../../data/data';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMovingLeftToRight, setIsMovingLeftToRight] = useState(true);

  const sections = useMemo(() => Object.values(data.secciones), [data.secciones]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMovingLeftToRight(prev => !prev);
      if (isMovingLeftToRight) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % sections.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isMovingLeftToRight, sections.length]);

  const currentSection = sections[currentIndex];

  return (
    <BannerContainer>
      <ImageWrapper isMovingLeftToRight={isMovingLeftToRight}>
        <BannerImage src={currentSection.imagen} alt={currentSection.nombre} />
      </ImageWrapper>
      <StyledButton to={`/${currentSection.pagina}`}>
        {currentSection.nombre}
      </StyledButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100vw;
  height: 55vh;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ isMovingLeftToRight }) => (isMovingLeftToRight ? '0' : '-3vw')};
  width: 104vw;
  height: 100%;
  transition: left 3s ease-in-out;
`;

const BannerImage = styled.img`
  width: 110vw;
  height: 70vh;
  object-fit: cover;
`;

const StyledButton = styled(Link)`
  position: absolute;
  bottom: 5rem;
  left: 10%;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: 2rem; /* Rem para escalabilidad */
  font-weight: bold;
`;

export default Banner;

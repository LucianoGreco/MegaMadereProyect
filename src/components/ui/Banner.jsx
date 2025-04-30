// src/components/layout/Banner.jsx
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/data";
import Navbar from "@/components/layout/navbar/Navbar";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = useMemo(
    () => Object.values(data.secciones),
    [data.secciones]
  );

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
        <BannerImage src={currentSection.backgroundPage} alt={currentSection.name} />
      </ImageWrapper>
      <StyledButton to={`/${currentSection.name}`}>
        {currentSection.name}
      </StyledButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); /* Sombra más suave */
  padding-butom: 10px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out; /* Transición de desvanecimiento */
  opacity: 0;
  animation: fadeIn 3s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); /* Sombra sutil en la imagen */
`;

const StyledButton = styled(Link)`
  position: absolute;
  bottom: 3rem;
  left: 10%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-decoration: none;
  backdrop-filter: blur(8px);
  font-weight: bold;
  padding: 12px 24px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    left: 5%;
    font-size: 1.4rem;
    padding: 10px 20px;
  }
`;

export default Banner;

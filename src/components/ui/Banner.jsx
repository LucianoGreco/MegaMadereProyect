// src/components/layout/Banner.jsx
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/pages/home";
import { breakpoints } from "@/styles/breakpoints"; // Asegurate que esté importado

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = useMemo(() => Object.values(data.secciones), []);

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
        <BannerImage
          src={currentSection.backgroundPage}
          alt={currentSection.name}
        />
      </ImageWrapper>
      <StyledButton to={`/${currentSection.name}`}>
        {currentSection.name}
      </StyledButton>
    </BannerContainer>
  );
};

export default Banner;

// styled-components

const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.tablet}) {
    height: 70vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50vh;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
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
  object-position: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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
  font-weight: bold;
  padding: 12px 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.4rem;
    padding: 10px 20px;
    bottom: 2rem;
    left: 7%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    padding: 8px 16px;
    bottom: 1.5rem;
    left: 5%;
  }
`;

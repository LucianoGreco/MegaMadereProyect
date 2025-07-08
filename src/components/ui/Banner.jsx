import React, { useState, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/pages/home";
import { breakpoints } from "@/styles/breakpoints";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = useMemo(() => Object.values(data.secciones), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [sections.length]);

  const currentSection = sections[currentIndex];

  return (
    <BannerContainer>
      <ImageWrapper>
        {sections.map((section, idx) => (
          <BannerImage
            key={idx}
            src={section.background}
            alt={section.name}
            $active={idx === currentIndex}
            loading="lazy"
          />
        ))}
        <Overlay />
      </ImageWrapper>

      <Content>
        <Title>{currentSection.name}</Title>
        <Description>
          {currentSection.description?.trim()
            ? currentSection.description
            : `Descubre lo mejor de nuestra colección en ${currentSection.name}. Explora ahora y transforma tus espacios.`}
        </Description>
        <StyledButton
          to={currentSection.page}
          aria-label={`Ir a ${currentSection.name}`}
        >
          Explorar {currentSection.name}
        </StyledButton>
      </Content>
    </BannerContainer>
  );
};

export default Banner;

// 📐 styled-components

const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 2;
  overflow: hidden;
  min-height: 300px;
`;

const BannerImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
    `}
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0) 90%
  );
  z-index: 1;
`;

const Content = styled.div`
  flex: 1;
  z-index: 2;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f9f9f9;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #222;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

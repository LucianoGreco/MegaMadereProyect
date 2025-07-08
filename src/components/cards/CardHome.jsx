import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

const CardHome = ({ name, image, page }) => {
  return (
    <CardLink to={page}>
      <CardContainer>
        <CardImage src={image} alt={name} />
        <CardOverlay />
        <CardTitle>{name}</CardTitle>
      </CardContainer>
    </CardLink>
  );
};

export default CardHome;

// 📐 styled-components

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 300px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* cuadrado por defecto */
  border-radius: 16px;
  overflow: hidden;
  background: #f8f8f8;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 56.25%; /* 16:9 rectangular en mobile */
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  padding: 0.7rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

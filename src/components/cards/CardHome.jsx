// src/components/cards/CardHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints"; // asegúrate de tenerlo

const CardLink = styled(Link)`
  width: 20%;
  min-width: 240px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  padding: 5px;
  color: inherit;
  backdrop-filter: blur(3px);
  background-color: var(--background-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    height: 200px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const CardTitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  left: 0;
  width: 100%;
  padding: 0.6rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.4rem;
  }
`;

const CardHome = ({ name, image, page }) => {
  return (
    <CardLink to={page}>
      <CardImage src={image} alt={name} />
      <CardTitleOverlay>{name}</CardTitleOverlay>
    </CardLink>
  );
};

export default CardHome;

// src/components/cards/CardHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
  width: 20%;
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
  
  ::hover{
    background-color: var(--background-color);
 
  };

`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const CardTitleOverlay = styled.div`
  height: 40px;
  position: absolute;
  top: 75%;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */  color: #fff;

 
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

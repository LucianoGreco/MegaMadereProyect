// Carrusel.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import data from "@/data/pages/contactos";
import GlobalStyle from "@/styles/globalStyles";

// Animación de desplazamiento infinito
const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  display: inline-block;
  align-content: center;
  width: 100vw;
  height: 100px;
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const CarouselInner = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: max-content;
  animation: ${scroll} 10s linear infinite; /* Ajusta la velocidad según sea necesario */
`;

const Message = styled.div`
  display: flex;
  align-items: center;

  font-size: 4.5rem;
  white-space: nowrap;
  color: var(--text-color);
  padding-right: 3rem; /* Espacio justo para que las letras no se peguen */
  font-weight: bold;
`;

const LogoImage = styled.img`
  height: 70px;
  margin: 0 5px;
  vertical-align: middle;
`;

const Carrusel = () => {
  const nombreEmpresa = data.nombreEmpresa;
  const logoImage = data.logo;

  const renderNombreEmpresa = () => {
    return nombreEmpresa
      .split("")
      .map((char, index) =>
        char === "M" ? (
          <LogoImage key={index} src={logoImage} alt="Logo" />
        ) : (
          <span key={index}>{char}</span>
        )
      );
  };

  return (
    <CarouselContainer>
      <GlobalStyle />
      <CarouselInner>
        {/* Repetimos el contenido suficiente para evitar cortes visibles */}
        {[...Array(4)].map((_, i) => (
          <Message key={i}>{renderNombreEmpresa()}</Message>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carrusel;

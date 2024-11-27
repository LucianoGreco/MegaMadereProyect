// Carrusel.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import data from '@/data/data'; // Importa el archivo data.js

// Keyframes para la animación de desplazamiento continuo de izquierda a derecha
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Contenedor principal del carrusel
const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100px;
  white-space: nowrap;
//  background-color: rgba(0, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0;
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
`;

// Contenedor de los elementos del carrusel
const CarouselInner = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: max-content;
  height: 100%;
  animation: ${scroll} 15s linear infinite; /* Velocidad y dirección del carrusel */
`;

// Estilo de cada mensaje
const Message = styled.div`
  display: flex;
  align-items: center;
  font-size: 4.5rem;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.8); /* Texto en gris oscuro */
  
  margin-right: 2rem;
`;

// Estilo para la imagen del logo dentro del mensaje
const LogoImage = styled.img`
  height: 80px;
  margin: 0 5px;
  vertical-align: middle;
`;

const Carrusel = () => {
  // Extrae el nombre de la empresa y el logo desde data.js
  const nombreEmpresa = data.secciones.contactos.nombreEmpresa;
  const logoImage = data.secciones.contactos.logo;

  // Función para reemplazar las "M" con la imagen del logo
  const renderNombreEmpresa = () => {
    return nombreEmpresa.split('').map((char, index) => (
      char === 'M' ? (
        <LogoImage key={index} src={logoImage} alt="Logo" />
      ) : (
        <span key={index}>{char}</span>
      )
    ));
  };

  return (
    <CarouselContainer>
      <CarouselInner>
        {/* Duplicamos el contenido para el efecto infinito */}
        <Message>{renderNombreEmpresa()}</Message>
        <Message>{renderNombreEmpresa()}</Message>
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carrusel;

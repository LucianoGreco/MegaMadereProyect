import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mensajeSlider, logoImage } from './data'; // Importa los mensajes y la imagen del logo

// Definición de la animación de desplazamiento continuo para el carrusel
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Contenedor principal del carrusel con configuraciones de diseño y fondo
const CarouselContainer = styled.div`
  overflow: hidden;                     // Oculta las imágenes que salen de los límites
  white-space: nowrap;                  // Evita el salto de línea de las imágenes
  position: relative;                   // Posiciona elementos internamente en relación al contenedor
  width: 100vw;                         // Ancho completo de la ventana de visualización
  height: 100px;                        // Altura fija para el carrusel
  background-color: rgba(255, 255, 255, 0.1); // Fondo con un leve color blanco
  margin: 5px 0;                        // Espaciado vertical para separación
  backdrop-filter: blur(10px);          // Aplica un desenfoque de fondo
`;

// Contenedor para los elementos del carrusel, animado para el efecto de desplazamiento
const CarouselInner = styled.div`
  display: flex;                        // Coloca las imágenes en una fila horizontal
  align-items: center;                  // Centra los elementos verticalmente
  width: max-content;                   // Ajusta el ancho al contenido total
  height: 100%;                         // Altura total del contenedor
  animation: ${scroll} 20s linear infinite; // Animación de desplazamiento continua
`;

// Estilo de cada mensaje dentro del carrusel
const Message = styled.div`
  display: inline-block;                // Coloca cada mensaje en línea
  font-size: 4.5rem;                    // Tamaño de fuente grande para visibilidad
  white-space: nowrap;                  // Evita el salto de línea en los mensajes
  color: rgba(0, 0, 0, 1);              // Color del texto
  flex-shrink: 0;                       // Evita que los elementos se ajusten al contenedor
`;

// Estilo para la imagen del logo dentro de los mensajes
const LogoImage = styled.img`
  height: 80px;                         // Tamaño fijo de la imagen del logo
  vertical-align: middle;               // Alineación vertical al centro de la línea de texto
  margin: 0 10px;                       // Espaciado horizontal alrededor del logo
`;

// Componente del carrusel horizontal de imágenes
const HorizontalImageSlider = () => {
  // Duplica los mensajes para crear el efecto de desplazamiento continuo
  const messages = mensajeSlider.concat(mensajeSlider);

  return (
    <CarouselContainer>
      <CarouselInner>
        {/* Renderizado de cada mensaje en el carrusel */}
        {messages.map((mensaje, index) => (
          <Message key={index}>
            {/* Separación de texto e imagen del logo */}
            {mensaje.split('{logo}').map((part, i) => (
              <React.Fragment key={i}>
                {part.replace(/&nbsp;/g, '\u00A0')} {/* Reemplaza &nbsp; con espacios no rompibles */}
                {i < mensaje.split('{logo}').length - 1 && (
                  <LogoImage src={logoImage} alt="Logo" /> {/* Inserta el logo entre textos */}
                )}
              </React.Fragment>
            ))}
          </Message>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default HorizontalImageSlider;

// Importa las librerías y módulos necesarios
import React, { useState, useEffect } from "react"; // React y sus hooks useState y useEffect
import styled from "styled-components"; // Librería para escribir estilos CSS en JavaScript
import { Link } from "react-router-dom"; // Componente para enlaces de navegación de React Router
import data from "../../data/data"; // Importa un archivo de datos
import GlobalStyles from '../../styles/globalStyles'; // Importa estilos globales

// Componente principal del banner
const Banner = () => {
  // Estado para manejar el índice actual de la sección mostrada
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para controlar la dirección del movimiento de la imagen (izquierda a derecha)
  const [isMovingLeftToRight, setIsMovingLeftToRight] = useState(true);

  // Convierte las secciones de datos en un array
  const sections = Object.values(data.secciones);

  // Efecto que cambia la sección cada 3 segundos
  useEffect(() => {
    // Configura un intervalo que se ejecuta cada 3 segundos
    const intervalId = setInterval(() => {
      // Alterna la dirección del movimiento
      setIsMovingLeftToRight((prev) => !prev);

      // Si el movimiento es de izquierda a derecha, actualiza el índice
      if (isMovingLeftToRight) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }
    }, 3000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [isMovingLeftToRight, sections.length]);

  // Obtiene la sección actual usando el índice actual
  const currentSection = sections[currentIndex];

  // Renderiza el componente de banner
  return (
    <BannerContainer>
      <GlobalStyles /> {/* Aplica los estilos globales */}
      {/* Contenedor de imagen con movimiento */}
      <ImageWrapper isMovingLeftToRight={isMovingLeftToRight}>
        <BannerImage src={currentSection.imagen} alt={currentSection.nombre} />
      </ImageWrapper>
      {/* Botón que redirige a la página de la sección actual */}
      <StyledButton to={`/${currentSection.pagina}`}>
        {currentSection.nombre}
      </StyledButton>
    </BannerContainer>
  );
};

// Estilos usando styled-components

// Contenedor del banner con ancho completo y altura de la ventana
const BannerContainer = styled.div`
  width: 100vw;
  height: 55vh;
  position: relative;
  overflow: hidden;
`;

// Wrapper de la imagen, controla el movimiento de la imagen de izquierda a derecha
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ isMovingLeftToRight }) => (isMovingLeftToRight ? "0" : "-3vw")};
  width: 104vw;
  height: 100%;
  transition: left 3s ease-in-out;
`;

// Estilo de la imagen del banner
const BannerImage = styled.img`
  width: 110vw;
  height: 70vh;
  object-fit: cover;
`;

// Botón que redirige a la sección específica
const StyledButton = styled(Link)`
  position: absolute;
  bottom: 80px;
  left: 10%;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: 1.5em;
  font-weight: bold;
`;

// Exporta el componente para su uso en otras partes de la aplicación
export default Banner;

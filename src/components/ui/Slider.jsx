// src/components/Slider.js
import React, { useState, useRef } from "react";
import styled from "styled-components";
import productos from "@/data/components/melaminas"; // Asegúrate de que la ruta sea correcta
import GlobalStyle from "@/styles/globalStyles"; // Asegúrate de tener este archivo

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0); // Referencia para el toque inicial
  const touchEnd = useRef(0); // Referencia para el toque final

  const products = Object.values(productos);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const visibleImages = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      handleNext(); // Desliza hacia la derecha para avanzar
    }
    if (touchStart.current - touchEnd.current < -50) {
      handlePrev(); // Desliza hacia la izquierda para retroceder
    }
  };

  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ArrowButton left onClick={handlePrev}>
        &lt;
      </ArrowButton>

      <GlobalStyle />

      <ProductName>{products[currentIndex].nombre}</ProductName>

      <ImageContainer>
        {visibleImages.map((product, index) => (
          <ImageWrapper key={index} isActive={index === 1}>
            <ProductImage
              src={product.imagenChica}
              alt={`Imagen ${index + 1}`}
            />
          </ImageWrapper>
        ))}
      </ImageContainer>

      <ArrowButton right onClick={handleNext}>
        &gt;
      </ArrowButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90vw;
  height: 50vh; /* Ajustar la altura */
  margin: auto;
  overflow: hidden;
  touch-action: none; /* Evita el comportamiento por defecto del touch */
  background-color: var(--background-color) |; /* Fondo para contraste */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Sombra difusa en el contenedor */
  
  border: 1px solid var(--text-color);

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
  
  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); /* Aumenta el sombreado al pasar el mouse */
  }
`;

const ArrowButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 15px" : "right: 15px")};
  transform: translateY(-50%);
  font-size: 1.5rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    height: 35px;
    width: 35px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  transform: scale(${(props) => (props.isActive ? 1.1 : 0.9)}); /* Menos escala */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; /* Reducido el tamaño */
  height: 200px; /* Reducido el tamaño */
  margin: 0 10px;
  position: relative;
  transition: transform 0.5s ease;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: ${(props) => (props.isActive ? "0 0 15px rgba(0, 0, 0, 0.4)" : "none")}; /* Sombra en la imagen activa */

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Sombra al hacer hover */
  }

  @media (max-width: 768px) {
    width: 60vw; /* Ajustado para dispositivos móviles */
    height: 60vw; /* Ajustado para dispositivos móviles */
    margin: 0 5px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const ProductName = styled.div`
  color: white;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  font-size: 2.2em; /* Reducido el tamaño */
  font-weight: bold;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.6em; /* Ajuste para pantallas pequeñas */
  }
`;

export default Slider;

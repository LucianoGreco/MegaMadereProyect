// src/components/Slider.js
import React, { useState, useRef } from "react";
import styled from "styled-components";
import articulos from "@/data/articulos"; // Asegúrate de que la ruta sea correcta
import GlobalStyle from "@/styles/globalStyles";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0); // Referencia para el toque inicial
  const touchEnd = useRef(0); // Referencia para el toque final

  // Extraemos las imágenes y los nombres de los productos
  const products = Object.values(articulos);

  // Función para manejar el cambio de imagen hacia adelante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Función para manejar el cambio de imagen hacia atrás
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Mostrar 5 imágenes en total, con la imagen central aumentada
  const visibleImages = [
    products[(currentIndex - 2 + products.length) % products.length],
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  // Función para manejar el deslizamiento táctil
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      handleNext(); // Desliza hacia abajo para avanzar
    }
    if (touchStart.current - touchEnd.current < -50) {
      handlePrev(); // Desliza hacia arriba para retroceder
    }
  };

  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Botones solo visibles en pantallas grandes */}
      <ArrowButton left onClick={handlePrev}>
        &lt;
      </ArrowButton>

      <GlobalStyle />

      {/* Nombre del producto fuera de las tarjetas, sobre el slider */}
      <ProductName>{products[currentIndex].nombre}</ProductName>

      <ImageContainer>
        {visibleImages.map((product, index) => (
          <ImageWrapper
            key={index}
            scale={index === 2 ? 1.2 : 1} // Imagen central (índice 2) se agranda
          >
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

// Estilos usando styled-components
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90vw; /* Ajusta el tamaño del slider */
  height: 50vh; /* Aumenta el tamaño en pantallas pequeñas */
  margin: auto;
  overflow: hidden;

  /* Hacemos que se adapte a pantallas pequeñas */
  @media (max-width: 768px) {
    flex-direction: column;
    height: 90vh;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px" : "right: 10px")};
  transform: translateY(-50%);
  font-size: 2em;
  background: var(--text-color);
  border: none;
  // color: var(--background-color);
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: var(--text-color);
    background-color: var(--background-color);
  }

  /* Ocultar los botones en pantallas pequeñas */
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  /* Apilar las imágenes verticalmente en pantallas pequeñas */
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const ImageWrapper = styled.div`
  transition: transform 0.3s ease, scale 0.3s ease;
  transform: scale(${(props) => props.scale});
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px; /* Ajusta el tamaño de las imágenes */
  height: 100px;
  margin: 0 10px;
  position: relative;
  /* Agregamos el efecto de sombra al pasar el mouse */
  &:hover {
    transform: scale(
      ${(props) => props.scale * 1.1}
    ); /* Agranda un 10% la imagen */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  }

  /* Ajustamos el tamaño de las imágenes en pantallas pequeñas */
  @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
    margin: 10px 0;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.div`
  color: white;
  position: absolute;
  top: 50%; /* Centrado en la parte superior del slider */
  left: 50%;
  transform: translate(-50%, -50%); /* Centrado vertical y horizontal */
  color: #fff; /* Aquí se define el color blanco */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: 2em;
  font-weight: bold;
  z-index: 2; /* Asegura que el nombre esté por encima de las imágenes */

  /* Ajustamos el tamaño del texto en pantallas pequeñas */
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export default Slider;

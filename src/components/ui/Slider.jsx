import React, { useState } from "react";
import styled from "styled-components";
import articulos from "../../data/palcas/articulos"; // Asegúrate de que la ruta sea correcta

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <SliderContainer>
      <ArrowButton left onClick={handlePrev}>
        &lt;
      </ArrowButton>

      <ImageContainer>
        {visibleImages.map((product, index) => (
          <ImageWrapper
            key={index}
            scale={index === 2 ? 1.2 : 1} // Imagen central (índice 2) se agranda
          >
            {index === 2 && ( // Solo mostrar el nombre sobre la imagen central
              <ProductName>{product.nombre}</ProductName>
            )}
            <ProductImage src={product.imagenChica} alt={`Imagen ${index + 1}`} />
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
  height: 40vh;
  margin: auto;
  overflow: hidden;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px" : "right: 10px")};
  transform: translateY(-50%);
  font-size: 2em;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
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

  /* Agregamos el efecto de sombra al pasar el mouse */
  &:hover {
    transform: scale(${(props) => props.scale * 1.1}); /* Agranda un 10% la imagen */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Agrega una sombra al texto */
`;

export default Slider;

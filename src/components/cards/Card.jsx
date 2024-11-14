// Importamos React y styled-components
import React from 'react';
import styled from 'styled-components';

// Definimos el fondo futurista (opcionalmente puedes usar una imagen personalizada)
const backgroundImage = 'url("ruta/de/tu/fondo.jpg")';

// Estilos para la tarjeta con styled-components
const CardContainer = styled.div`
  width: 100vw;
  max-width: 400px; /* Controlamos el ancho máximo de la tarjeta */
  background-color: rgba(0, 0, 0, 0.5);
  background-image: ${backgroundImage};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: inherit;
  margin-bottom: 10px;
`;

const CardDimensions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 15px;
`;

const Dimension = styled.span`
  color: inherit;
`;

// Componente Card
const Card = ({ nombre, imagenChica, descripcion, medidas }) => {
  return (
    <CardContainer>
      <CardTitle>{nombre}</CardTitle>
      <CardImage src={imagenChica} alt={nombre} />
      <CardDescription>{descripcion}</CardDescription>
      <CardDimensions>
        <Dimension>Alto: {medidas.alto} cm</Dimension>
        <Dimension>Ancho: {medidas.ancho} cm</Dimension>
        <Dimension>Profundidad: {medidas.profundidad} cm</Dimension>
      </CardDimensions>
    </CardContainer>
  );
};

export default Card;

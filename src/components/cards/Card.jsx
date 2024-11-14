import React from "react";
import styled from "styled-components";

// Contenedor de la tarjeta de producto
const CardContainer = styled.div`
  border: 1px solid #ccc;

  width: 280px;
  height: 160px;

  border-radius: 8px;
`;

// Imagen del producto
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 10px;
`;

// Descripción del producto
const ProductDescription = styled.p`
  font-weight: 100;
`;

const Card = ({ infoCard }) => {
  if (!infoCard) {
    return <div>Seleccione un producto para ver más detalles</div>;
  }

  return (
    <CardContainer>
      <ProductImage src={infoCard.imagenGrande} alt={infoCard.nombre} />
      <InfoContainer>
        <h3>{infoCard.nombre}</h3>
        <ProductDescription>{infoCard.descripcion}</ProductDescription>
        <div>
          <strong>Medidas:</strong>
          <p>Alto: {infoCard.medidas.alto} cm</p>
          <p>Ancho: {infoCard.medidas.ancho} cm</p>
          <p>Profundidad: {infoCard.medidas.profundidad} cm</p>
        </div>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

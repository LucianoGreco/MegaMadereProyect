import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  text-align: center;
`;

const ZoomContainer = styled.div`

  position: fixed;
  top: 50%;
  left: 50%;
  width: 80vw;
  height: 80vh;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ZoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Card = ({ infoCard }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!infoCard) {
    return (
      <p style={{ color: "#c0c0c0", fontSize: "1rem", textAlign: "center" }}>
        Seleccione un producto para ver más detalles.
      </p>
    );
  }

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      <CardContainer>
        <Image
          src={infoCard.imagenGrande}
          alt={infoCard.nombre}
          onClick={toggleZoom}
        />
        <ContentOverlay>
          <h2>{infoCard.nombre}</h2>
          <p>{infoCard.descripcion}</p>
        </ContentOverlay>
      </CardContainer>

      {isZoomed && (
        <ZoomContainer>
          <CloseButton onClick={toggleZoom}>✖</CloseButton>
          <ZoomImage src={infoCard.imagenGrande} alt={infoCard.nombre} />
        </ZoomContainer>
      )}
    </>
  );
};

export default Card;
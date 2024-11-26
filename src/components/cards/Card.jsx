import React from "react";
import styled from "styled-components";

// Contenedor principal para centrar la tarjeta
const ContenedorPadre = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  background: rgba(30, 30, 40, 0.9);
  // box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  }
`;

// Mantén las demás propiedades; ya están optimizadas para el estilo futurista.


const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  filter: grayscale(20%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Nombre = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  color: #e0e0e0;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Descripcion = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #b0b0b0;
  text-align: justify;
  margin: 0;
`;

const MedidasTitulo = styled.h3`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
`;

const MedidasList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MedidasItem = styled.li`
  font-size: 0.9rem;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "•";
    color: #57e3c1;
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #707070;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 15px;
`;

const Card = ({ infoCard }) => {
  if (!infoCard) {
    return (
      <ContenedorPadre>
        <p style={{ color: "#c0c0c0", fontSize: "1rem" }}>
          Seleccione un producto para ver más detalles
        </p>
      </ContenedorPadre>
    );
  }

  return (
    <ContenedorPadre>
      <CardContainer>
        <Image src={infoCard.imagenGrande} alt={infoCard.nombre} />
        <Content>
          <Nombre>{infoCard.nombre}</Nombre>
          <Descripcion>{infoCard.descripcion}</Descripcion>
          <MedidasTitulo>Medidas de la placa</MedidasTitulo>
          <MedidasList>
            <MedidasItem>Alto: {infoCard.medidas.alto} cm</MedidasItem>
            <MedidasItem>Ancho: {infoCard.medidas.ancho} cm</MedidasItem>
            <MedidasItem>
              Espesor: {infoCard.medidas.espesor_material} cm
            </MedidasItem>
          </MedidasList>
        </Content>
        <Footer>© 2024 - Detalles del producto</Footer>
      </CardContainer>
    </ContenedorPadre>
  );
};

export default Card;

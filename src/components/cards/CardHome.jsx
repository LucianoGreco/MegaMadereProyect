import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data";

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  padding: 5px;
  width: 100%;
  margin: 0 auto;

  /* Definir 2 columnas por defecto */
  grid-template-columns: 1fr 1fr; 

  /* Media query para pantallas pequeñas (dispositivos móviles y tabletas) */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una sola columna en pantallas pequeñas */
  }
`;

const Card = styled.div`
  height: 350px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: var(--border-radius);
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Asignar el área para este elemento en el grid */
  grid-area: ${(props) => props.area};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardHome = () => (
  <Container>
    {Object.values(data.secciones).map((section) => (
      <Card
        background={section.cardHome}
        key={section.id}
        large={section.nombre === "Simulador"}
      >
        <Link to={`/${section.pagina}`}>{section.nombre}</Link>
      </Card>
    ))}
  </Container>
);

export default CardHome;

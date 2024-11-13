// CardHome.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data";

const CardHome = () => {
  return (
    <Container>
      {Object.values(data.secciones).map((section) => (
        <Card background={section.imagen}>
          <CardLink to={`/${section.pagina}`} key={section.id}>
            {section.nombre}
          </CardLink>
        </Card>
      ))}
    </Container>
  );
};

// Estilos usando styled-components
// Estilos usando styled-components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
  padding: 5px;

  // Layout especial para las tarjetas en 7 posiciones
  & > div:nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
  & > div:nth-child(2) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  & > div:nth-child(3) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
  & > div:nth-child(4) {
    grid-column: 1 / span 2;
  }
  & > div:nth-child(5) {
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
  }
  & > div:nth-child(6) {
    grid-column: 1 / span 1;
  }
  & > div:nth-child(7) {
    grid-column: 2 / span 1;
    grid-row: 4 / span 2;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end; // Cambiado a flex-end para posicionar el título en la parte inferior
  justify-content: center;
  border-radius: 8px;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  padding: 5px;

  /* Efecto de imagen en blanco y negro por defecto */
  filter: grayscale(100%);
  transition: transform 0.3s ease, filter 0.3s ease; /* Transición suave para el zoom y el color */

  /* Efecto al pasar el mouse */
  &:hover {
    transform: scale(1.05); /* Agrandar la tarjeta al pasar el mouse */
    filter: grayscale(0%); /* Volver la imagen a color */
  }
`;

export default CardHome;

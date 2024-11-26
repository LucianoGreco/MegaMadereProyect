// \src\components\cards\CardHome.jsx:
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data";

const CardHome = () => (
  <Container>
    {Object.values(data.secciones).map((section) => (
      <Card background={section.cardHome} key={section.id}>
        <StyledLink to={`/${section.pagina}`}>
          {section.nombre}
        </StyledLink>
      </Card>
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 5px;
  width: 100%;
  margin: 0 auto;

  /* Estilos para Desktop */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "novedades simulador simulador simulador"
      "herrajes simulador simulador simulador"
      "melaminas melaminas muebles envios"
      "muebles contactos contactos contactos";
  }

  /* Estilos para Tablet */
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "novedades simulador"
      "herrajes simulador"
      "melaminas melaminas"
      "muebles envios"
      "muebles contactos";
  }

  /* Estilos para Móvil */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "novedades"
      "simulador"
      "herrajes"
      "melaminas"
      "muebles"
      "envios"
      "contactos";
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  backdrop-filter: blur(10px);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  padding: 10px 20px;
  text-shadow: var(--shadow);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: var(--hover-text-color);
    background-color: var(--hover-background-color);
  }
`;

const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: var(--border-radius);
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 200px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export default CardHome;

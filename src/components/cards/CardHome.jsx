import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../../data/data';

const CardHome = () => (
  <Container>
    {Object.values(data.secciones).map((section) => (
      <Card background={section.imagen} key={section.id}>
        <CardLink to={`/${section.pagina}`}>
          {section.nombre}
        </CardLink>
      </Card>
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
  padding: 5px;

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
  align-items: flex-end;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
`;

export default CardHome;

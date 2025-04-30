// Grilla.jsx
import React from 'react';
import styled from 'styled-components';

// Estilo para el contenedor de la grilla
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Estilo para cada tarjeta
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

// Estilo para la imagen
const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

// Estilo para el nombre
const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
`;

const Grilla = ({ items }) => {
  console.log(items); 
  return (
    <GridContainer>
      {items.map((item, index) => (
        <Card key={index}>
          <CardImage src={item.imagenChica} alt={item.nombre} />
          <CardTitle>{item.nombre}</CardTitle>
        </Card>
      ))}
    </GridContainer>
  );
};

export default Grilla;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImagenPrincipal = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const ImagenSecundaria = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-color: #888;
  }
`;

const Nombre = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Descripcion = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const Card = ({ producto }) => {
  const { nombre, descripcion, imagenes = [] } = producto;
  const [imagenActual, setImagenActual] = useState(imagenes[0] || '');

  useEffect(() => {
    setImagenActual(imagenes[0] || '');
  }, [imagenes]);

  return (
    <CardContainer>
      {imagenActual && <ImagenPrincipal src={imagenActual} alt={nombre} />}
      <Nombre>{nombre}</Nombre>
      <Descripcion>{descripcion}</Descripcion>

      {imagenes.length > 1 && (
        <GaleriaContainer>
          {imagenes.map((img, index) => (
            <ImagenSecundaria
              key={index}
              src={img}
              alt={`${nombre} miniatura ${index}`}
              onClick={() => setImagenActual(img)}
              style={{
                borderColor: imagenActual === img ? '#333' : 'transparent'
              }}
            />
          ))}
        </GaleriaContainer>
      )}
    </CardContainer>
  );
};

export default Card;

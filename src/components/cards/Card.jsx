import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { breakpoints } from "@/styles/breakpoints";

const CardContainer = styled.div`
  height: 82vh;
  background-color: rgba(255, 255, 255, 0.83);
  border-radius: 0 16px ;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    padding-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 0 16px 0 0 ;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 0 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;
const Code = styled.p`
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  padding: 0 1rem;
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 2rem;

  &:hover span {
    opacity: 1;
    transform: translateY(-8px);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 110%;
  background: #000;
  color: #fff;
  padding: 6px 12px;
  font-size: 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #25D366;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #1ebe5d;
  }
`;

const Card = ({ producto }) => {
  if (!producto) return <p>No hay producto seleccionado.</p>;

  const mensaje = encodeURIComponent(
    `Hola MegaMadera. Estoy interesado en este producto: ${producto.codigo}: ${producto.nombre}`
  );
  const urlWhatsApp = `https://wa.me/5492604331727?text=${mensaje}`;

  return (
    <CardContainer>
      <Image
        src={producto.imagenGrande}
        alt={producto.nombre}
        onError={(e) => (e.target.src = '/images/placeholder.jpg')}
      />
      <Title>{producto.nombre || 'Sin nombre'}</Title>
      <Code>{producto.codigo ? `Código: ${producto.codigo}` : 'Código no disponible'}</Code>
      <Description>{producto.descripcion || 'Sin descripción'}</Description>
      <ButtonWrapper>
        <Tooltip>Consultar por WhatsApp</Tooltip>
        <Button href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          Consultar
        </Button>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default Card;

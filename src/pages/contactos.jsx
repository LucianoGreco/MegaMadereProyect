import React from 'react';
import styled from 'styled-components';
import data from '@/data/data.js';

const Contacto = () => {
  const contactos = data.secciones.contactos;

  if (!contactos) {
    return <ErrorMessage>Información de contacto no disponible</ErrorMessage>;
  }

  const { 
    nombreEmpresa, direccion, localidad, provincia, pais, telefono, email, horario, logo, redes 
  } = contactos;

  return (
    <Container>
      <Header>
        <Logo src={logo} alt={`${nombreEmpresa} Logo`} />
        <Title>{nombreEmpresa}</Title>
      </Header>
      <Info>
        <p><strong>Dirección:</strong> {direccion}, {localidad}, {provincia}, {pais}</p>
        <p><strong>Teléfono:</strong> <a href={`tel:${telefono}`}>{telefono}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Horario:</strong> {horario}</p>
      </Info>
      <Redes>
        <h2>Síguenos en:</h2>
        {Object.entries(redes).map(([key, link]) => (
          <RedLink key={key} href={link} target="_blank" rel="noopener noreferrer">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </RedLink>
        ))}
      </Redes>
    </Container>
  );
};

export default Contacto;

// Styled Components
const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--background-color);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  color: var(--text-color);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--text-color);
`;

const Info = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.8;

  a {
    color: var(--text-color);
    text-decoration: underline;

    &:hover {
      color: var(--hover-background-color);
    }
  }
`;

const Redes = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const RedLink = styled.a`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--text-color);
    color: var(--hover-text-color);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: var(--hover-text-color);
  font-size: 1.2rem;
  padding: 2rem;
  background: var(--hover-background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

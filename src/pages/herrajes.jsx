import React, { useState } from 'react';
import styled from 'styled-components';
import dataHerrajes from '@/data/pages/herrajes';
import Grilla from '@/components/ui/Grilla';
import Card from '@/components/cards/Card';
import { breakpoints } from '@/styles/breakpoints';

const Container = styled.div`
  max-width: 1200px;  /* limita ancho máximo para centrar */
  width: 100%;
  display: flex;
  gap: 1rem;           /* espacio entre tarjeta y grilla */
  padding: 1rem;
  justify-content: center;
  margin: 0 auto;      /* centra horizontalmente en la pantalla */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 25%;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center; /* centra la tarjeta */

  @media (max-width: ${breakpoints.mobile}) {
    flex: 1;
    width: 100%;
    padding: 0;
    margin-bottom: 1rem;
  }
`;

const GrillaWrapper = styled.div`
  flex: 0 0 70%;
  display: flex;
  justify-content: center; /* centra la grilla */

  @media (max-width: ${breakpoints.mobile}) {
    flex: 1;
    width: 100%;
  }
`;

const Herrajes = () => {
  const items = Object.values(dataHerrajes["mueble"]).flat();
  const [paginaActual, setPaginaActual] = useState(1);
  const [productoSeleccionado, setProductoSeleccionado] = useState(items[0]);

  return (
    <Container>
      <CardWrapper>
        <Card producto={productoSeleccionado} />
      </CardWrapper>
      <GrillaWrapper>
        <Grilla
          items={items}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          onItemClick={setProductoSeleccionado}
        />
      </GrillaWrapper>
    </Container>
  );
};

export default Herrajes;

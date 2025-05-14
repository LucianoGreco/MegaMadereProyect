// src/pages/melaminas.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import dataMelamina from '@/data/pages/melaminas';
import Grilla from '@/components/ui/Grilla';
import Card from '@/components/cards/Card';
import { breakpoints } from '@/styles/breakpoints';

const Container = styled.div`
  width: 100vw;
  display: flex;
  gap: 0.1rem;
  padding: 1rem;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 25%;
  padding: 20px 0 0 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex: 1;
    width: 100%;
    padding: 0;
    margin-bottom: 1rem;
  }
`;

const GrillaWrapper = styled.div`
  flex: 0 0 70%;

  @media (max-width: ${breakpoints.mobile}) {
    flex: 1;
    width: 100%;
  }
`;

const Melaminas = () => {
  const items = Object.values(dataMelamina["Tableros Melaminas"]).flat();
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

export default Melaminas;

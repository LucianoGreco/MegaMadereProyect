import styled from 'styled-components';

// Estilos
const GridContainer = styled.div`
  border: 1px solid red;
  max-height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Grid = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columnas */
  grid-template-rows: repeat(3, 1fr);    /* 3 filas */
  gap: 0; /* Sin espacio entre columnas ni filas */
  padding: 0; /* Sin padding */
  box-sizing: border-box;
  overflow-y: auto;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Zoom */
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 6px;
  margin: 0;
  color: #333;
  background-color: #f8f8f8;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #eaeaea;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.2s;

  &:hover {
    background: #ccc;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

// Componente principal
const Grilla = ({ items, paginaActual, setPaginaActual, onItemClick }) => {
  const itemsPorPagina = 15; // 5 columnas x 3 filas
  const totalPaginas = Math.ceil(items.length / itemsPorPagina);
  const inicio = (paginaActual - 1) * itemsPorPagina;
  const itemsPagina = items.slice(inicio, inicio + itemsPorPagina);

  const handleAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const handleSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  return (
    <GridContainer>
      <Grid>
        {itemsPagina.map((item, index) => (
          <Card
            key={index}
            onClick={() => onItemClick?.(item)}
            title="Click para ver detalles"
          >
            <Image
              src={item.imagenChica}
              alt={item.nombre}
              onError={(e) => (e.target.src = '/images/placeholder.jpg')}
            />
            <Name>{item.nombre}</Name>
          </Card>
        ))}
      </Grid>

      <Pagination>
        <Button onClick={handleAnterior} disabled={paginaActual === 1}>
          {'<'}
        </Button>
        <span>Página {paginaActual} de {totalPaginas}</span>
        <Button onClick={handleSiguiente} disabled={paginaActual === totalPaginas}>
          {'>'}
        </Button>
      </Pagination>
    </GridContainer>
  );
};

export default Grilla;

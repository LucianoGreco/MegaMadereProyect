
import styled from 'styled-components';

// Estilos
const GridContainer = styled.div`
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
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 0 16px ;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

const Name = styled.p`
  padding: 10px;
  font-weight: 600;
  color: #444;
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
  const itemsPorPagina = 15; // 4 columnas x 2 filas
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

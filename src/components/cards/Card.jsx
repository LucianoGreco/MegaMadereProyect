import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { breakpoints } from "@/styles/breakpoints";

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 82vh;
  background-color: #000;
  border-radius: 0 16px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
// border: 1px solid red;
  position: relative;
  z-index: 1;
  // background: rgba(255, 255, 255, 0.85);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;
const Code = styled.p`
 font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const Description = styled.p`
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
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
  padding: 8px 22px;
  background-color: #25D366;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  svg {
    font-size: 2.8rem;
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
      <Overlay>
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
      </Overlay>
    </CardContainer>
  );
};

export default Card;

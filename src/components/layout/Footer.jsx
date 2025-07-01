
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Columna>
          <h3>Mega Madera</h3>
          <p>Av. Moreno 1455</p>
          <p>San Rafael, Mendoza, Argentina</p>
        </Columna>

        <Columna>
          <h4>Contacto</h4>
          <p>Tel: +54 260422505</p>
          <p>Email: contacto@megamadera.com</p>
        </Columna>

        <Columna>
          <h4>Horario</h4>
          <p>Lunes a Viernes: 8:00 a 12:30 / 16:00 a 20:30</p>
          <p>Sábados: 8:00 a 13:00</p>
        </Columna>
      </Content>

      <Copy>
        &copy; {new Date().getFullYear()} Mega Madera - Todos los derechos reservados.
      </Copy>
    </Container>
  );
};

export default Footer;

// Estilos
const Container = styled.footer`
  background: #222;
  color: #eee;
  padding: 2rem 1rem 1rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const Columna = styled.div`
  flex: 1;
  min-width: 200px;

  h3, h4 {
    margin-bottom: 0.5rem;
    color: #fff;
  }

  p {
    margin: 0.3rem 0;
    color: #ccc;
  }
`;

const Copy = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
`;

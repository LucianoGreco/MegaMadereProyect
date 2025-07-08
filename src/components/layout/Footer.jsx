import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo>Mega Madera</Logo>

        <Columns>
          <Column>
            <Title>Dirección</Title>
            <Item>Av. Moreno 1455</Item>
            <Item>San Rafael, Mendoza, Argentina</Item>
          </Column>

          <Column>
            <Title>Contacto</Title>
            <Item>Tel: +54 260422505</Item>
            <Item>Email: contacto@megamadera.com</Item>
          </Column>

          <Column>
            <Title>Horario</Title>
            <Item>Lunes a Viernes: 8:00 a 12:30 / 16:00 a 20:30</Item>
            <Item>Sábados: 8:00 a 13:00</Item>
          </Column>
        </Columns>

        <Copy>
          &copy; {new Date().getFullYear()} Mega Madera · Todos los derechos reservados.
        </Copy>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background: #121212;
  color: #eee;
  padding: 3rem 1.5rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #f5c518;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const Column = styled.div`
  max-width: 300px;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #f5c518;
  font-weight: 600;
`;

const Item = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0;
  color: #ccc;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Copy = styled.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
`;

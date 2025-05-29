import styled from "styled-components";
import contactos from "@/data/pages/contactos";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

// Estilos
const Container = styled.section`
  height: 300px;
  width: 700px;
  margin: 3rem auto;
  padding: 2.5rem;
  border-radius: 20px;
  background: linear-gradient(145deg, #e0e0e0, #f8f8f8);
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.6),
    inset 2px 2px 6px rgba(0, 0, 0, 0.1), 0 12px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  img {
    border-radius: 50%;
    border: 2px solid #ccc;
    background: white;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.25rem;
  font-weight: 700;
`;

const Address = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const InfoRow = styled.div`
  text-align: center;
  color: #444;
  margin-bottom: 1.25rem;
  line-height: 1.5;

  p {
    margin: 0.3rem 0;
  }
`;

const Section = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.h2`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Text = styled.p`
  color: #555;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1rem;

  a {
    color: #555;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  a:hover {
    transform: scale(1.2);
    color: #000;
  }
`;

const Contactos = () => {
  const {
    nombreEmpresa,
    direccion,
    telefono,
    correo,
    horarios,
    dias,
    logo,
    redesSociales,
  } = contactos;

  return (
    <Container>
      {logo && (
        <LogoWrapper>
          <img
            src={logo}
            alt={`Logo de ${nombreEmpresa}`}
            width={100}
            height={100}
            style={{ borderRadius: "9999px", objectFit: "contain" }}
          />
        </LogoWrapper>
      )}

      <Heading>{nombreEmpresa}</Heading>
      <Address>
        {direccion.calle}, {direccion.localidad}, {direccion.provincia},{" "}
        {direccion.pais}
      </Address>

      <InfoRow>
        <p>
          📞 <strong>{telefono}</strong>
        </p>
        <p>
          ✉️ <strong>{correo}</strong>
        </p>
      </InfoRow>

      <Section>
        <SubHeading>Horarios de Atención</SubHeading>
        <Text>
          {dias.join(", ")} de {horarios[0]}:00 a {horarios[1]}:00 hs
        </Text>
      </Section>

      <SocialLinks>
        {redesSociales.facebook && (
          <a
            href={redesSociales.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} color="#1877F2" />
          </a>
        )}
        {redesSociales.instagram && (
          <a
            href={redesSociales.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} color="#E4405F" />
          </a>
        )}
        {redesSociales.whatsapp && (
          <a
            href={redesSociales.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} color="#25D366" />
          </a>
        )}
        {redesSociales.correoVentas && (
          <a href={`mailto:${redesSociales.correoVentas}`}>
            <FaEnvelope size={24} color="#EA4335" />
          </a>
        )}
      </SocialLinks>
    </Container>
  );
};

export default Contactos;

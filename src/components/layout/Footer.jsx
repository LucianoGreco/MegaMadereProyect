import styled from "styled-components";
import contactos from "@/data/pages/contactos";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Estilos
const Container = styled.section`
  max-width: 900px;
  margin: 4rem auto;
  padding: 3rem;
  border-radius: 24px;
  background: #f3f3f3;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Logo = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: contain;
  border: 3px solid #ccc;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Address = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  color: #444;
  margin-bottom: 2rem;

  p {
    margin: 0.4rem 0;
  }

  strong {
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Schedule = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #555;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;

  a {
    color: #555;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #000;
    transform: scale(1.2);
  }
`;

// Componente principal
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
      {logo && <Logo src={logo} alt={`Logo de ${nombreEmpresa}`} />}
      <Heading>{nombreEmpresa}</Heading>
      <Address>
        {direccion.calle}, {direccion.localidad}, {direccion.provincia},{" "}
        {direccion.pais}
      </Address>

      <ContactInfo>
        <p>📞 <strong>{telefono}</strong></p>
        <p>✉️ <strong>{correo}</strong></p>
      </ContactInfo>

      <Schedule>
        <SubHeading>Horarios de Atención</SubHeading>
        <Text>
          {dias.join(", ")}:
          <br />
          Mañana: {horarios.mañana.apertura} - {horarios.mañana.cierre} hs<br />
          Tarde: {horarios.tarde.apertura} - {horarios.tarde.cierre} hs
        </Text>
      </Schedule>

      <SocialLinks>
        {redesSociales.facebook && (
          <a href={redesSociales.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#1877F2" />
          </a>
        )}
        {redesSociales.instagram && (
          <a href={redesSociales.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="#E4405F" />
          </a>
        )}
        {redesSociales.whatsapp && (
          <a href={redesSociales.whatsapp} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
        )}
        {redesSociales.correoVentas && (
          <a href={`mailto:${redesSociales.correoVentas}`}>
            <FaEnvelope size={24} color="#EA4335" />
          </a>
        )}
        {redesSociales.GoogleMaps && (
          <a href={redesSociales.GoogleMaps} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt size={24} color="#EA4335" />
          </a>
        )}
      </SocialLinks>
    </Container>
  );
};

export default Contactos;

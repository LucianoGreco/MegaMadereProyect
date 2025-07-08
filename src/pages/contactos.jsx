import styled from "styled-components";
import contactos from "@/data/pages/contactos";
import { breakpoints } from "@/styles/breakpoints";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// 🎨 Estilos
const Container = styled.section`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 3rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 2rem;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 1rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ccc;
    object-fit: contain;
    background: white;
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Address = styled.p`
  color: #666;
  font-size: 1rem;
  margin-top: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const InfoRow = styled.div`
  color: #444;
  font-size: 1rem;
  line-height: 1.6;

  p {
    margin: 0.3rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const Section = styled.div``;

const SubHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Text = styled.p`
  color: #555;
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    bottom: 15px;
    right: 15px;
  }
`;

const MapaIframe = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
    <>
      <Container>
        {logo && (
          <LogoWrapper>
            <img src={logo} alt={`Logo de ${nombreEmpresa}`} />
          </LogoWrapper>
        )}

        <Heading>{nombreEmpresa}</Heading>

        <Address>
          {direccion.calle}, {direccion.localidad}, {direccion.provincia},{" "}
          {direccion.pais}
        </Address>

        <InfoRow>
          <p>📞 <strong>{telefono}</strong></p>
          <p>✉️ <strong>{correo}</strong></p>
        </InfoRow>

        <Section>
          <SubHeading>Horarios de Atención</SubHeading>
          <Text>
            {dias.join(", ")} de {horarios.mañana.apertura} a{" "}
            {horarios.mañana.cierre} y de {horarios.tarde.apertura} a{" "}
            {horarios.tarde.cierre} hs
          </Text>
        </Section>

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

        {redesSociales.GoogleMaps && (
          <MapaIframe
            src="https://maps.google.com/maps?q=Av.%20Moreno%201455%2C%20San%20Rafael%2C%20Mendoza%2C%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </Container>

      {redesSociales.whatsapp && (
        <WhatsAppButton
          href={redesSociales.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </WhatsAppButton>
      )}
    </>
  );
};

export default Contactos;

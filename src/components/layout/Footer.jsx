// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  backdrop-filter: blur(10px);
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;

  svg {
    color: white;
    font-size: 1.5rem;

    &:hover {
      color: #f0a500;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <LinksList>
      <li><Link to="/cookies">Cookies</Link></li>
      <li><Link to="/terminos">Términos y Condiciones</Link></li>
      <li><Link to="/privacidad">Política de Privacidad</Link></li>
    </LinksList>
    <SocialIcons>
      <a href="https://facebook.com/megamadera" aria-label="Facebook"><FaFacebook /></a>
      <a href="https://instagram.com/megamadera" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://wa.me/+549260433172" aria-label="WhatsApp"><FaWhatsapp /></a>
      <a href="mailto:contacto@megamadera.com" aria-label="Correo electrónico"><FaEnvelope /></a>
    </SocialIcons>
    <p>&copy; {new Date().getFullYear()} Mega Madera. Todos los derechos reservados.</p>
  </FooterContainer>
);

export default Footer;

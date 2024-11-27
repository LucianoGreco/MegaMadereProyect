import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  backdrop-filter: blur(10px);
  width: 100%;
  box-sizing: border-box;  /* Asegura que el padding no haga que el contenido se desborde */
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Permite que los enlaces se apilen en pantallas pequeñas */
  margin-bottom: 15px; /* Espacio entre los enlaces y los iconos de redes sociales */

  li {
    flex: 1 1 auto; /* Deja que los elementos se ajusten al espacio disponible */
    min-width: 120px; /* Evita que los enlaces se apilen demasiado en pantallas pequeñas */
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;

  svg {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: white;
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
    <FooterText>&copy; {new Date().getFullYear()} Mega Madera. Todos los derechos reservados.</FooterText>
  </FooterContainer>
);

export default Footer;

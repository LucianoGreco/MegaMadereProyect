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
  width: 100vw;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  li {
    display: inline-block;
    backdrop-filter: blur(10px);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    color: var(--text-color);
    font-weight: bold;
    padding: 10px 20px;
    text-decoration: none;
    text-shadow: var(--shadow);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: var(--background-color);
      background-color: var(--text-color);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
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
      color: var(--hover-background-color);
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

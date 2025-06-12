// src/components/layout/Footer.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--text-color);
  text-align: center;
  backdrop-filter: blur(10px);
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  a {
    color: var(--text-color);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--hover-background-color);
      text-decoration: underline;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <Link to="/cookies">Cookies</Link>
      <span>•</span>
      <Link to="/terminos">Términos</Link>
      <span>•</span>
      <Link to="/privacidad">Privacidad</Link>
      <span>•</span>
      <Link to="/contactos">Contacto</Link>
    </FooterLinks>
    <FooterText>
      &copy; {new Date().getFullYear()} Mega Madera. Todos los derechos reservados.
    </FooterText>
  </FooterContainer>
);

export default Footer;

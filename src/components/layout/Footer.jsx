// src/components/layout/Footer.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  backdrop-filter: blur(10px);
  width: 100%;
  box-sizing: border-box;
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} Mega Madera. Todos los derechos reservados.</FooterText>
  </FooterContainer>
);

export default Footer;
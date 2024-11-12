import React from "react";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import data from "../../data/data"; // Asegúrate de que la ruta a data.js sea correcta

const Header = () => {
  const logo = data.secciones.contactos.logo; // Accede al logo de data.js

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo de Mega Madera" />
      <Navbar />
    </HeaderContainer>
  );
};

// Estilos usando styled-components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1); // Fondo transparente para que se vea sobre la imagen
  height: 30vh;  // Asegúrate de que el header tenga el tamaño adecuado
  padding: 0 20px;
  position: relative;  // Asegúrate de que el header quede estático y no se mueva
  z-index: 10;  // Coloca el header por encima de otros componentes
`;

const Logo = styled.img`
  height: 80%; // Ajusta el tamaño del logo en relación con la altura del header
  object-fit: contain;
`;

export default Header;

import React from "react";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom"; // Importa Link para redireccionar
import data from "@/data/data"; // Asegúrate de que la ruta a data.js sea correcta
import GlobalStyles from "@/styles/globalStyles";

// Importa la imagen directamente si la ruta dinámica no funciona
// import logoImage from "../../assets/images/logo.png";

const Header = () => {
  // Verifica que la ruta dinámica funcione correctamente
  const logo = data?.secciones?.contactos?.logo; // Usa encadenamiento opcional para evitar errores

  // Agrega un log para verificar si la ruta del logo es correcta
  console.log("Ruta del logo:", logo);

  return (
    <HeaderContainer>
      <GlobalStyles />
      <Link to="/"> {/* Enlace al Home */}
        {/* Usa logo dinámico o ruta estática */}
        <Logo src={logo || "/assets/images/logo.png"} alt="Logo de Mega Madera" />
      </Link>
      <Navbar />
    </HeaderContainer>
  );
};

// Estilos usando styled-components
const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 13vh; /* Ajusta el tamaño del header */
  padding: 0 10px;
  position: relative;
  width: 100vw;
  z-index: 10; /* Coloca el header por encima de otros componentes */
`;


const Logo = styled.img`
  height: 50px; /* Ajusta el tamaño del logo en relación con la altura del header */
  width: 100px; /* Ajusta el tamaño del
`;

export default Header;

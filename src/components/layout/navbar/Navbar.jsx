// Navbar.jsx:
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa Link
import data from "../../../data/data";
import GlobalStyles from "../../../styles/globalStyles";

const Navbar = () => {
  const secciones = Object.values(data.secciones);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Nav>
      < GlobalStyles />
      <NavList>
        {secciones.map((section, index) => (
          <NavItem key={section.id}>
            <StyledLink
              to={`/${section.pagina}`} // Redirecciona con Link
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {section.nombre}
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

// Estilos usando styled-components
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center; /* Centrado de los elementos */
  margin-right: 30px;
  `;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link)` // Usar Link estilizado
  color: ${(props) => (props.isSelected ? "#f0f0f0" : "white")};
  text-decoration: none;
  transition: color 0.3s;
`;

export default Navbar;

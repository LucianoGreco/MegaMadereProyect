// Navbar.jsx:
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa Link
import data from "../../../data/data";

const Navbar = () => {
  const secciones = Object.values(data.secciones);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? secciones.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === secciones.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Nav>
      <NavButton onClick={handlePrev}>{"<"}</NavButton>
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
      <NavButton onClick={handleNext}>{">"}</NavButton>
    </Nav>
  );
};

// Estilos usando styled-components
const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`;

const NavButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 20px;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`;

export default Navbar;

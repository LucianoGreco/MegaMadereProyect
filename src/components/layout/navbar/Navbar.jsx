import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/data";
import { FaBars } from "react-icons/fa"; // Importamos el ícono de hamburguesa

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--background-color);
    padding: 10px 0;
    z-index: 100;
    
  }
`;

const NavItem = styled.li`
  margin: 0 4px;
  text-align: center;


  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const MenuIcon = styled(FaBars)`
  display: none;
  font-size: 2em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const sections = useMemo(() => Object.values(data.secciones), [data.secciones]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <MenuIcon onClick={toggleMenu} />
      <NavList isMenuOpen={isMenuOpen}>
        {sections.map((section, index) => (
          <NavItem key={section.id}>
            <StyledLink
              to={`/${section.pagina}`}
              onClick={() => {
                setSelectedIndex(index);
                setIsMenuOpen(false); // Cerrar el menú al seleccionar una opción
              }}
            >
              {section.nombre}
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

export default Navbar;

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../../data/data";
import { FaBars } from "react-icons/fa"; // Importamos el ícono de hamburguesa

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? "block" : "none")}; /* Mostrar o esconder el menú */
    position: absolute;
    top: 60px; /* Ajustamos la posición del menú */
    left: 0;
    width: 100%;
    background-color: var(--background-color); /* Ajustar el fondo */
    padding: 10px 0;
    z-index: 100;
  }
`;

const NavItem = styled.li`
  margin: 0 4px;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%; /* Las opciones ocupan todo el ancho */
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  display: block;
  padding: 5px 5px;
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
    display: block; /* Mostrar el icono hamburguesa en pantallas pequeñas */
  }
`;

const Navbar = () => {
  const sections = useMemo(() => Object.values(data.secciones), [data.secciones]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Cambiar el estado del menú (abierto/cerrado)
  };

  return (
    <nav>
      <MenuIcon onClick={toggleMenu} /> {/* Icono de hamburguesa */}
      <NavList isMenuOpen={isMenuOpen}>
        {sections.map((section, index) => (
          <NavItem key={section.id}>
            <StyledLink
              to={`/${section.pagina}`}
              isSelected={selectedIndex === index}
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

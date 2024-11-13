import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../../data/data";

const Navbar = () => {
  const sections = useMemo(() => Object.values(data.secciones), [data.secciones]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Nav>
      <NavList>
        {sections.map((section, index) => (
          <NavItem key={section.id}>
            <StyledLink
              to={`/${section.pagina}`}
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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

const StyledLink = styled(Link)`
  color: ${(props) => (props.isSelected ? "#f0f0f0" : "white")};
  text-decoration: none;
  transition: color 0.3s;
`;

export default Navbar;

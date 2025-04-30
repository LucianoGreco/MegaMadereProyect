// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/data";

const NavbarContainer = styled.nav`

  height: 40px;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,0)
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
   background-color: rgba(0,0,0,0)

`;

const NavItem = styled.li`
  margin: 0 5px;
  transition: 0.3s ease, transform 0.3s ease;
   background-color: rgba(0,0,0,0)
`;

const Navbar = () => {


  return (
    <NavbarContainer>

      <NavList>
        {Object.values(data.secciones).map((seccion) => (
          <NavItem key={seccion.id}>
            <Link to={seccion.page}>{seccion.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;

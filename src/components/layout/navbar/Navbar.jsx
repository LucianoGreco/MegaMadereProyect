import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "@/data/pages/home";

const NavbarContainer = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 8px 12px;
    border-radius: 12px;
    transition: all 0.3s ease;
    color: var(--text-color);
    background-color: transparent;

    &:hover {
      background-color: var(--text-color);
      color: var(--background-color);
      transform: scale(1.05);
    }

    &.active {
      background-color: var(--text-color);
      color: var(--background-color);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const secciones = Object.values(data.secciones);

  return (
    <NavbarContainer>
      {secciones.map((sec) => (
        <Link
          key={sec.id}
          to={sec.page}
          className={location.pathname === sec.page ? "active" : ""}
        >
          {sec.name}
        </Link>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;

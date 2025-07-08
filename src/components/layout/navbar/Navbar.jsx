import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "@/data/pages/home";

const NavbarContainer = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.3px;
    padding: 6px 10px;
    border-radius: 4px;
    transition: background 0.3s ease, color 0.3s ease;
    color: #333;
    text-decoration: none;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      color: #0066cc;
      font-weight: 600;
      border-bottom: 2px solid #0066cc;
      background: transparent;
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

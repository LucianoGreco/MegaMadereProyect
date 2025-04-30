import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "@/components/layout/navbar/Navbar.jsx";
import data from "@/data/pages/dataContactos";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Empezamos con el header visible
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsVisible(true); // Mostrar si se hace scroll hacia arriba o está en la parte superior
      } else {
        setIsVisible(false); // Ocultar si se hace scroll hacia abajo
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setIsVisible(true); // Mostrar si el mouse está en la parte superior de la página
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <HeaderContainer isVisible={isVisible}>
      <ContainerLogo>
        <Link to="/">
          <Logo src={data.logo} alt="Logo de Mega Madera" />
        </Link>
      </ContainerLogo>
      <Navbar />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 95vw;
  height: 25vh;
  border: 2px solid var(--text-color);
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  position: fixed;
  margin: 10px;
  top: 0;
  left: 0;
  background: var(--blackground-color);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100%)"};
`;

const ContainerLogo = styled.div`
  border-radius: 100%;
  backdrop-filter: blur(0px);

  a{
    text-shadow: none !important; /* Sobrescribe el sombreado del globalStyle */
    background: var(--blackground-color); 
    border: 0;
  }
  :hover {
    transform: scale(1.05); /* Aumenta un poquito */
    background: var(--blackground-color); 
  }
`;



const Logo = styled.img`
  width: 80px;
  padding: 0;
  text-shadow: none !important;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Aumenta un poquito */
    background: var(--blackground-color); 
  }

  &:active {
    transform: scale(0.95); /* Disminuye un poco menos del estado inicial */
  }
`;



export default Header;

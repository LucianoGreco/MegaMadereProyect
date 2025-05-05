import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/navbar/Navbar.jsx";
import data from "@/data/pages/dataContactos";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    const showHeader = () => {
      clearTimeout(hideTimeout);
      setIsVisible(true);

      // Ocultar después de 3 segundos de inactividad
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setHideTimeout(timeout);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar si se hace scroll hacia arriba o llega arriba del todo
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        showHeader();
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        showHeader();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, [lastScrollY, hideTimeout]);

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
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;


const ContainerLogo = styled.div`
  border-radius: 100%;
  backdrop-filter: blur(0px);

  a {
    text-shadow: none !important;
    background: var(--blackground-color);
    border: 0;
  }

  :hover {
    transform: scale(1.05);
    background: var(--blackground-color);
  }
`;

const Logo = styled.img`
  width: 80px;
  padding: 0;
  text-shadow: none !important;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: var(--blackground-color);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Header;

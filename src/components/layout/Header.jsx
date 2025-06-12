import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import Navbar from "@/components/layout/navbar/Navbar";
import data from "@/data/pages/home";
import contactos from "@/data/pages/contactos";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

const HoverTrigger = styled.div`
  position: fixed;
  top: 0;
  height: 12px;
  width: 100%;
  z-index: 999;
  pointer-events: auto; /* siempre activo para detectar hover */
`;


const HeaderContainer = styled.header`
  width: 95vw;
  max-width: 1200px;
  height: 18vh;
  margin: 10px auto;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-color);
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(-120%)"};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
    border-radius: 24px;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    display: inline-flex;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 70px;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SideMenu = styled.nav`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? "0" : "-300px")};
  height: 100vh;
  width: 280px;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1100;
`;

const MenuItem = styled(Link)`
  padding: 12px 16px;
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimeout = useRef(null);
  const showTimeout = useRef(null);

  const secciones = Object.values(data.secciones);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Función para ocultar el header después de 3 segundos
  const startHideTimer = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000);
  };

  // Función para ocultar el header con delay al quitar el mouse del borde
  const startHideAfterShow = () => {
    if (showTimeout.current) clearTimeout(showTimeout.current);
    showTimeout.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000);
  };

  useEffect(() => {
    // Cuando el componente monta, empezar el timer para ocultar header
    startHideTimer();

    // Limpieza
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
    };
  }, []);

  // Manejador del hover en el borde superior
  const handleMouseEnterTop = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (showTimeout.current) clearTimeout(showTimeout.current);
    setNavVisible(true);
    // Después de mostrarse, ocultar de nuevo en 3 segundos si no se vuelve a mover el mouse
    startHideAfterShow();
  };

  return (
    <HeaderWrapper $isVisible={navVisible}>
      {/* Zona invisible en el borde superior para detectar el mouse */}
       <HoverTrigger onMouseEnter={handleMouseEnterTop} />
  <HeaderContainer $isVisible={navVisible}>
        <ContainerLogo>
          <Link to="/" onClick={() => setNavVisible(true)}>
            <Logo src={contactos.logo} alt="Logo de Mega Madera" />
          </Link>
          <ToggleButton onClick={toggleMenu}>
            <MenuIcon size={28} />
          </ToggleButton>
        </ContainerLogo>
        <Navbar />
      </HeaderContainer>

      <SideMenu $open={menuOpen}>
        <CloseButton onClick={toggleMenu}>
          <CloseIcon size={28} />
        </CloseButton>
        {secciones.map((sec) => (
          <MenuItem key={sec.id} to={sec.page} onClick={toggleMenu}>
            {sec.name}
          </MenuItem>
        ))}
      </SideMenu>
    </HeaderWrapper>
  );
};

export default Header;

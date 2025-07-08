import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import Navbar from "@/components/layout/navbar/Navbar";
import data from "@/data/pages/home";
import contactos from "@/data/pages/contactos";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ $isVisible }) => ($isVisible ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`;

const Logo = styled.img`
  width: 50px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
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
  width: 250px;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1100;

  @media (max-width: 500px) {
    width: 80%;
    padding: 1.5rem 1rem;
  }
`;

const MenuItem = styled(Link)`
  padding: 12px 16px;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimeout = useRef(null);
  const showTimeout = useRef(null);

  const secciones = Object.values(data.secciones);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const startHideTimer = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000);
  };

  const startHideAfterShow = () => {
    if (showTimeout.current) clearTimeout(showTimeout.current);
    showTimeout.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000);
  };

  useEffect(() => {
    startHideTimer();
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
    };
  }, []);

  const handleMouseEnterTop = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (showTimeout.current) clearTimeout(showTimeout.current);
    setNavVisible(true);
    startHideAfterShow();
  };

  return (
    <>
      <HoverTrigger onMouseEnter={handleMouseEnterTop} />
      <HeaderWrapper $isVisible={navVisible}>
        <HeaderInner>
          <Link to="/">
            <Logo src={contactos.logo} alt="Logo Mega Madera" />
          </Link>
          <Navbar />
          <ToggleButton onClick={toggleMenu}>
            <MenuIcon size={28} />
          </ToggleButton>
        </HeaderInner>

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
    </>
  );
};

const HoverTrigger = styled.div`
  position: fixed;
  top: 0;
  height: 12px;
  width: 100%;
  z-index: 999;
`;

export default Header;

import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Importar íconos

const MenuContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: rgba(30, 30, 40, 0.9);
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(30, 30, 40, 0.9);
    padding: 20px;
    z-index: 1000;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  text-align: center;
  background: rgba(50, 50, 70, 0.8);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgba(70, 70, 100, 0.9);
  }
`;

const SubMenuContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  background: rgba(20, 20, 30, 0.9);
  border-radius: 10px;
  margin-top: 8px;
  padding: 5px;

  & > div {
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    padding: 8px;
    margin-bottom: 5px;
    text-align: left;
    background: rgba(40, 40, 50, 0.8);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background: rgba(60, 60, 80, 0.9);
    }
  }

  h4 {
    color: #bbb;
    text-align: center;
    margin: 12px 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItem = ({ menuData, setCardData }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCategory = (index) => {
    setActiveCategory((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSelectOption = (item) => {
    setCardData(item);
    closeMenu(); // Cerrar el menú después de seleccionar
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <FaBars />
      </HamburgerButton>

      <MenuContainer isMenuOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          <FaTimes />
        </CloseButton>

        {menuData.map((item, index) => (
          <div key={item.codigo || index}>
            <CategoryButton onClick={() => toggleCategory(index)}>
              {item.nombre}
            </CategoryButton>
            <SubMenuContainer open={activeCategory === index}>
              <button onClick={() => handleSelectOption(item)}>
                {item.nombre}
              </button>
            </SubMenuContainer>
          </div>
        ))}
      </MenuContainer>
    </>
  );
};

export default NavItem;

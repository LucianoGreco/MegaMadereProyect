import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: rgba(30, 30, 40, 0.9);
  height: 100%;
  overflow-y: auto;

  /* En pantallas pequeñas, el menú se oculta inicialmente */
  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(30, 30, 40, 0.9); /* Fondo oscuro */
    padding: 50px 20px 20px 20px; /* Añadir más espacio arriba para no tapar la barra de estado */
    z-index: 1000; /* Asegurarnos de que el menú se superponga sobre otros elementos */
  }
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  text-align: center;
  background: rgba(50, 50, 70, 0.8);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  /* Centrar el texto */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(70, 70, 100, 0.9);
  }
`;

const SubMenuContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  background: rgba(20, 20, 30, 0.9);
  border-radius: var(--border-radius);
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
    border-radius: var(--border-radius);
    cursor: pointer;

    /* Centrar el texto */
    display: flex;
    justify-content: center;
    align-items: center;

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
  margin-left: 10px;

  /* Mostrar el botón de hamburguesa solo en pantallas pequeñas */
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

  // Cerrar el menú al seleccionar una opción
  const handleSelectOption = (item) => {
    setCardData(item);
    setIsMenuOpen(false); // Cierra el menú después de la selección
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <HamburgerButton onClick={toggleMenu}>
        <FaBars />
      </HamburgerButton>

      <MenuContainer isMenuOpen={isMenuOpen}>
        {menuData.map((category, index) => (
          <div key={index}>
            <CategoryButton onClick={() => toggleCategory(index)}>
              {category.name}
            </CategoryButton>
            <SubMenuContainer open={activeCategory === index}>
              {category.items.map((subCategory, subIndex) => (
                <div key={subIndex}>
                  <h4>{subCategory.name}</h4>
                  {subCategory.items.map((item, itemIndex) => (
                    <button key={itemIndex} onClick={() => handleSelectOption(item)}>
                      {item.nombre}
                    </button>
                  ))}
                </div>
              ))}
            </SubMenuContainer>
          </div>
        ))}
      </MenuContainer>
    </>
  );
};

export default NavItem;

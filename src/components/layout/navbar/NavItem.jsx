import React, { useState } from 'react';
import styled from 'styled-components';

// Botón principal para "Menú de Categorías"
const MenuButton = styled.button`
background-color: rgba(255, 255, 255, 0.6);

color: black;
  height: 200px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;


  &:hover, &:active {
    background-color: white;
    color: black;
  }

  

  
`;

// Contenedor para los submenús
const SubMenuContainer = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  margin-top: 2px;
  padding: 5px;
  width: 30vw;
  justify-content: center;

`;

// Botones de categoría y subcategoría
const CategoryButton = styled.button`
background-color: rgba(255, 255, 255, 0.6);
color: black;
  display: block;

  border: none;
  padding: 4px;
  margin: 2px;
  width: fit-content;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;




  &:hover, &:active {
    background-color: white;
    color: black;
  }
`;


const MenuContainer = styled.div`
display: flex;
`;

// Subcategoría en formato de lista
const SubCategoryList = styled.div`
  // display: flex;
  // margin-left: 20px;
  // padding-left: 10px;
  // border-left: 1px solid #fff;
  // display: block;
  // border: 1px solid yellow;
`;

const NavItem = ({ menuData, setCardData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const toggleSubCategory = (subIndex) => {
    setActiveSubCategory(activeSubCategory === subIndex ? null : subIndex);
  };

  const handleItemClick = (item) => {
    setCardData(item);  // Pasamos los datos del artículo al Card
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>Menú de Categorías</MenuButton>

      <SubMenuContainer open={menuOpen}>
        {menuData.map((category, index) => (
          
          
          <MenuContainer key={index}>
            <CategoryButton onClick={() => toggleCategory(index)}>
              {category.name}
            </CategoryButton>

            {activeCategory === index && (
              <SubCategoryList>
                {category.items.map((subCategory, subIndex) => (
                  <MenuContainer key={subIndex}>
                    <CategoryButton onClick={() => toggleSubCategory(subIndex)}>
                      {subCategory.name}
                    </CategoryButton>

                    {activeSubCategory === subIndex && (
                      <SubCategoryList>
                        {subCategory.items.map((item, itemIndex) => (
                          <CategoryButton key={itemIndex} onClick={() => handleItemClick(item)}>
                            {item.nombre}  {/* Usamos el nombre del artículo */}
                          </CategoryButton>
                        ))}
                      </SubCategoryList>
                    )}
                  </MenuContainer>
                ))}
              </SubCategoryList>
            )}
          </MenuContainer>
        ))}
      </SubMenuContainer>
    </MenuContainer>
  );
};

export default NavItem;

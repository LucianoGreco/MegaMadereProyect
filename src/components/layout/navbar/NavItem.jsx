// NavItem.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import menuData from '../../../data/melaminas';

// Botón principal para "Menú de Categorías"
const MenuButton = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: black;
  }
    margin: 1px;

`;

// Contenedor para los submenús
const SubMenuContainer = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};

  margin-top: 2px;
  padding: 5px;
  width: 50vw;


  `;

// Botones de categoría y subcategoría
const CategoryButton = styled.button`
  // background-color: #444;
  display: block;
  color: white;
  border: none;
  padding: 4px;
  margin: 2px;
  width: fit-content;  // Ajusta el ancho al contenido
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  // margin-top: 5px;
 border: 1px solid red;
 font-size: 2px;
font-weight: 100;



  &:hover, &:active {
    background-color: white;
    color: black;
  }
`;

// Subcategoría en formato de lista
const SubCategoryList = styled.div`
display: flex;
  margin-left: 20px;
  padding-left: 10px;
  border-left: 1px solid #fff;
  display: block;
  
`;

const NavItem = () => {
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

  return (
    <div>
      <MenuButton onClick={toggleMenu}>Menú de Categorías</MenuButton>
      
      <SubMenuContainer open={menuOpen}>
        {menuData.map((category, index) => (
          <div key={index}>
            <CategoryButton onClick={() => toggleCategory(index)}>
              {category.name}
            </CategoryButton>
            
            {activeCategory === index && (
              <SubCategoryList>
                {category.items.map((subCategory, subIndex) => (
                  <div key={subIndex}>
                    <CategoryButton onClick={() => toggleSubCategory(subIndex)}>
                      {subCategory.name}
                    </CategoryButton>
                    
                    {activeSubCategory === subIndex && (
                      <SubCategoryList>
                        {subCategory.items.map((item, itemIndex) => (
                          <CategoryButton key={itemIndex}>
                            {item.nombre}  {/* - ${item.precio}
                            <div>Medidas: {item.medidas.ancho} x {item.medidas.alto} x {item.medidas.profundidad}</div>
                            <div>Espesor: {item.medidas.espesor_material} mm</div> */}
                          </CategoryButton>
                        ))}
                      </SubCategoryList>
                    )}
                  </div>
                ))}
              </SubCategoryList>
            )}
          </div>
        ))}
      </SubMenuContainer>
    </div>
  );
};

export default NavItem;

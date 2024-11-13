import React, { useState } from "react";
import styled from "styled-components";
import clasificacionMelaminas from "../../../data/melaminas";
import articulos from "../../../data/palcas/articulos";

// Contenedor principal que organiza las seis secciones en fila
const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  border: 4px solid red;
`;

// Contenedor de cada sección individual dentro del contenedor principal
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1); // Fondo semitransparente
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  border: 4px solid rgba(0, 0, 0, 0.6);
`;

// Estilo del título principal que actúa como botón para abrir/cerrar el menú
const Title = styled.h2`
  font-size: 18px;
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  padding: 10px;
  border-radius: 4px;
  &:hover {
    color: black;
    background-color: white;
  }
`;

// Estilo de los botones que representan cada categoría en el menú
const MenuButton = styled.div`
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #e6e6e6;
  }
`;

// Estilo de los productos en la lista
const ProductItem = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 6px;
  margin: 3px 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #e6e6e6;
  }
`;

const NavItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeLine, setActiveLine] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveCategory(null);
    setActiveLine(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setActiveLine(null);
  };

  const handleLineClick = (line) => {
    setActiveLine((prevLine) => (prevLine === line ? null : line));
  };

  const renderProducts = (products) => {
    return products.map((productKey, idx) => {
      const productData = articulos[productKey.replace("articulos.", "")];
      return (
        <ProductItem key={idx}>
          {productData ? productData.nombre : "Artículo desconocido"}
        </ProductItem>
      );
    });
  };

  return (
    <FlexContainer>
      {/* Sección Menú de Categorías */}
      <SectionContainer>
        <Title onClick={toggleMenu}>Menú de Categorías</Title>
        {isMenuOpen &&
          Object.keys(clasificacionMelaminas.categorias).map(
            (categoryKey, idx) => (
              <MenuButton
                key={idx}
                onClick={() => handleCategoryClick(categoryKey)}
                style={{
                  backgroundColor:
                    activeCategory === categoryKey
                      ? "white"
                      : "rgba(0, 0, 0, 1)",
                  color: activeCategory === categoryKey ? "black" : "white",
                }}
              >
                {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
              </MenuButton>
            )
          )}
      </SectionContainer>

      {/* Sección Melaminas */}
      <SectionContainer>
        <h3>Melaminas</h3>
        {/* Muestra opciones o subcategorías específicas de Melaminas */}
        {/* Ejemplo de contenido: */}
        {isMenuOpen && activeCategory === "melaminas" && (
          <div>{/* Aquí se mostrarían las subcategorías de melaminas */}</div>
        )}
      </SectionContainer>

      {/* Sección Revestimientos */}
      <SectionContainer>
        <h3>Revestimientos</h3>
        {/* Muestra opciones o subcategorías específicas de Revestimientos */}
      </SectionContainer>

      {/* Sección Fondos */}
      <SectionContainer>
        <h3>Fondos</h3>
        {/* Muestra opciones o subcategorías específicas de Fondos */}
      </SectionContainer>

      {/* Sección Todas */}
      <SectionContainer>
        <h3>Todas</h3>
        {activeCategory === "todas" &&
          Object.values(articulos).map((product, idx) => (
            <ProductItem key={idx}>{product.nombre}</ProductItem>
          ))}
      </SectionContainer>

      {/* Sección Lista de Artículos */}
      <SectionContainer>
        <h3>Lista de Artículos</h3>
        {activeLine && (
          <div>
            {renderProducts(
              clasificacionMelaminas.categorias[activeCategory].lineas[
                activeLine
              ]
            )}
          </div>
        )}
      </SectionContainer>
    </FlexContainer>
  );
};

export default NavItem;

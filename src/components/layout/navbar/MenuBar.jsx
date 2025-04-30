// menuBar.jsx
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 220px;
  padding: 20px;
  background-color: #f2f2f2;
  border-right: 1px solid #ccc;
  height: 100vh;
`;

const MenuTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: none;
  text-align: left;
  cursor: pointer;
  border-radius: 6px;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const MenuBar = ({ productos, onSeleccionarProducto }) => {
  return (
    <MenuContainer>
      <MenuTitle>Productos</MenuTitle>
      {productos.map((producto, index) => (
        <MenuItem key={index} onClick={() => onSeleccionarProducto(producto)}>
          {producto.nombre}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default MenuBar;

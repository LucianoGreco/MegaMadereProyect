// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Estilo de cada elemento en la lista de menú
// const MenuItem = styled.li`
//   margin-left: 20px;
// `;

// // Estilo del enlace con hover y foco para accesibilidad
// const MenuLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-weight: bold;

//   &:hover {
//     color: #ccc; // Cambia de color en hover
//   }

//   &:focus {
//     outline: 2px solid #fff; // Añadir contorno en el foco para accesibilidad
//     outline-offset: 2px;
//   }
// `;

// // Componente NavItem
// const NavItem = ({ to, children, ariaLabel = 'Enlace de navegación' }) => (
//   <MenuItem>
//     <MenuLink to={to} aria-label={ariaLabel}>{children}</MenuLink>
//   </MenuItem>
// );

// NavItem.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
//   ariaLabel: PropTypes.string,
// };

// export default NavItem;
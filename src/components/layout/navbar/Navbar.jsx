
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/pages/home";

const NavbarContainer = styled.nav`
  height: 40px;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  transition: transform 0.6s ease, opacity 0.6s ease;
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  background-color: transparent;
`;

const NavItem = styled.li`
  margin: 0 5px;
  transition: 0.3s ease, transform 0.3s ease;
  background-color: transparent;
`;

const Navbar = ({ isVisible, onMouseOver, onMouseOut }) => {
  return (
    <NavbarContainer $isVisible={isVisible} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <NavList>
        {Object.values(data.secciones).map((seccion) => (
          <NavItem key={seccion.id}>
            <Link to={seccion.page}>{seccion.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
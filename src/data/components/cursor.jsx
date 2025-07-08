import { useEffect, useState } from "react";
import styled, { keyframes, createGlobalStyle, css } from "styled-components";
import contactos from "@/data/pages/contactos";

// Animación de rotación
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Estilo del cursor
const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  width: ${({ hovered }) => (hovered ? "32px" : "24px")};
  height: ${({ hovered }) => (hovered ? "32px" : "24px")};
  transition: width 0.2s ease, height 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: ${({ rotating }) =>
      rotating
        ? css`${spin} 1s linear infinite`
        : "none"};
  }
`;

// Ocultar cursor nativo — global para todos los elementos
const GlobalStyle = createGlobalStyle`
  body, a, button, * {
    cursor: none !important;
  }
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotating, setRotating] = useState(false);
  const [hovered, setHovered] = useState(false);
  let stopTimeout;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setRotating(true);

      clearTimeout(stopTimeout);
      stopTimeout = setTimeout(() => {
        setRotating(false);
      }, 100);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setHovered(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <CustomCursor
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        rotating={rotating}
        hovered={hovered}
      >
        <img src={contactos.logo} alt="Logo" />
      </CustomCursor>
    </>
  );
};

export default Cursor;

import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% { text-shadow: 0 0 6px rgba(255,255,255,0.2); }
  50% { text-shadow: 0 0 10px rgba(255,255,255,0.6); }
  100% { text-shadow: 0 0 6px rgba(255,255,255,0.2); }
`;

const Wrapper = styled.div`
  width: 220px;
  height: 80vh;
  position: relative;
  margin: 20px;
`;

const FocusOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 60px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  z-index: 2;
  pointer-events: none;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 40vh;
  padding-bottom: 40vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 1rem;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  opacity: 0.5;
  scroll-snap-align: center;

  &[data-active="true"] {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    transform: scale(1.2);
    opacity: 1;
    animation: ${pulse} 2s infinite;
  }
`;

const MenuBar = ({ productos, onSeleccionarProducto }) => {
  const containerRef = useRef();
  const itemRefs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const containerMiddle = container.scrollTop + container.clientHeight / 2;

    let closestIndex = null;
    let minDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemTop = item.offsetTop - container.offsetTop;
      const itemCenter = itemTop + item.offsetHeight / 2;
      const distance = Math.abs(containerMiddle - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicial

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <FocusOverlay />
      <MenuContainer ref={containerRef}>
        {productos.map((producto, index) => (
          <MenuItem
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-active={index === centerIndex}
            onClick={() => {
              onSeleccionarProducto(producto);
              itemRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }}
          >
            {producto.nombre}
          </MenuItem>
        ))}
      </MenuContainer>
    </Wrapper>
  );
};

export default MenuBar;

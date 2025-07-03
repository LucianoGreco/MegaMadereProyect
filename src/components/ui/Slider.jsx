import React, { useRef } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";
import { API_BASE } from "@/api/api";
import { useNavigate } from "react-router-dom";

const Slider = ({
  titulo = "Productos",
  data = [],
  categoriaKey = "nombre",
  productosKey = "productos",
  buildImagePath,
  onLoadMore,
}) => {
  const carruselRef = useRef(null);
  const navigate = useNavigate();

  console.log(`🔷 Renderizando Slider: ${titulo}`);
  console.log(`📊 Data recibida:`, data);

  const scroll = (dir) => {
    if (!carruselRef.current) return;
    const step = 200;
    const carrusel = carruselRef.current;

    if (
      dir === "right" &&
      carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 50
    ) {
      onLoadMore && onLoadMore();
    }

    carrusel.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

const defaultBuildImagePath = (categoria, nombreImagen) => {
  let path = "";

  if (titulo.toLowerCase().includes("herrajes")) {
    path = `herrajes/${categoria.toLowerCase().replace(/\s+/g, "-")}/${nombreImagen.trim()}`;
  } else if (titulo.toLowerCase().includes("melaminas")) {
    path = `melaminas/${nombreImagen.trim()}`;
  } else if (titulo.toLowerCase().includes("revestimientos")) {
    // Reemplaza los "-" por espacios
    const partes = categoria
      .split(" - ")
      .map(s => s.replace(/-/g, " ").trim());
    const ruta = partes.join("/");
    path = `revestimientos/pared/${ruta}/${nombreImagen.trim()}`;
  }

  return `${API_BASE.replace("/api", "")}/products/${path}`;
};


  const imagenes = [];

  data.forEach((item) => {
    const categoriaNombre = (item[categoriaKey] || "otros");
    const productos = Array.isArray(item[productosKey])
      ? item[productosKey]
      : [item];

    productos.forEach((prod) => {
      const imgs = Array.isArray(prod.imagenes)
        ? prod.imagenes
        : prod.imagen
        ? [prod.imagen]
        : [];

      imgs.forEach((img) => {
        let url = "";
        if (img.startsWith("/products/")) {
          // ya es ruta relativa desde backend
          url = `${API_BASE.replace("/api", "")}${img}`;
        } else {
          // construimos
          url = buildImagePath
            ? buildImagePath(categoriaNombre, img)
            : defaultBuildImagePath(categoriaNombre, img);
        }

        imagenes.push({
          url,
          alt: prod.nombre || "Producto",
          producto: prod,
          categoria: categoriaNombre,
        });
      });
    });
  });

  if (!imagenes.length) {
    return <SliderWrapper>No hay imágenes para mostrar.</SliderWrapper>;
  }

  const irADetalle = (producto, categoria) => {
    const nombre = encodeURIComponent(producto.nombre);
    const slugCategoria = categoria.replace(/\s+/g, "-");
    navigate(`/producto/${slugCategoria}?nombre=${nombre}`);
  };

  return (
    <SliderWrapper>
      <Header>
        <Titulo>{titulo}</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll("left")}>←</Btn>
          <Btn onClick={() => scroll("right")}>→</Btn>
        </NavButtons>
      </Header>

      <Carrusel ref={carruselRef}>
        {imagenes.map((img, idx) => (
          <Card
            key={idx}
            onClick={() => irADetalle(img.producto, img.categoria)}
          >
            <Imagen src={img.url} alt={img.alt} />
            <Nombre>{img.alt}</Nombre>
          </Card>
        ))}
      </Carrusel>
    </SliderWrapper>
  );
};

export default Slider;

// 📐 Estilos

const SliderWrapper = styled.div`
  color: black;
  width: 100%;
  margin-top: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Titulo = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: black;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-shrink: 0;
`;

const Btn = styled.button`
  background: var(--text-color);
  color: var(--background-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
  }
`;

const Carrusel = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 1rem 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 180px;
  scroll-snap-align: center;
  background: var(--background-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin: 0 auto;
`;

const Nombre = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem;
  color: black;
  background-color: #f9f9f9;
`;

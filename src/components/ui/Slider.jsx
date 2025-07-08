import React, { useRef } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";
import { API_BASE } from "@/api/api";
import { useNavigate } from "react-router-dom";

const defaultBuildImagePath = (categoria, nombreImagen, titulo) => {
  let path = "";

  if (titulo.toLowerCase().includes("herrajes")) {
    path = `herrajes/${categoria.toLowerCase().replace(/\s+/g, "-")}/${nombreImagen.trim()}`;
  } else if (titulo.toLowerCase().includes("melaminas")) {
    path = `melaminas/${nombreImagen.trim()}`;
  } else if (titulo.toLowerCase().includes("revestimientos")) {
    const partes = categoria
      .split(" - ")
      .map((s) => s.replace(/-/g, " ").trim());
    const ruta = partes.join("/");
    path = `revestimientos/pared/${ruta}/${nombreImagen.trim()}`;
  }

  return `${API_BASE.replace("/api", "")}/products/${path}`;
};

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

  const scroll = (dir) => {
    if (!carruselRef.current) return;

    const carrusel = carruselRef.current;
    const step = carrusel.clientWidth * 0.8;

    if (
      dir === "right" &&
      carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 50
    ) {
      onLoadMore?.();
    }

    carrusel.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const imagenes = [];

  data.forEach((item) => {
    const categoriaNombre = item[categoriaKey] || "otros";
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
          url = `${API_BASE.replace("/api", "")}${img}`;
        } else {
          url = buildImagePath
            ? buildImagePath(categoriaNombre, img, titulo)
            : defaultBuildImagePath(categoriaNombre, img, titulo);
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

  const irADetalle = (producto) => {
    const nombre = encodeURIComponent(producto.nombre);
    let pagina = "";

    if (titulo.toLowerCase().includes("melaminas")) {
      pagina = "/melaminas";
    } else if (titulo.toLowerCase().includes("herrajes")) {
      pagina = "/herrajes";
    } else if (titulo.toLowerCase().includes("revestimientos")) {
      pagina = "/revestimientos";
    }

    navigate(`${pagina}?nombre=${nombre}`);
  };

  return (
    <SliderWrapper>
      <Header>
        <Titulo>{titulo}</Titulo>
        <NavButtons>
          <Btn onClick={() => scroll("left")} aria-label="Desplazar a la izquierda">
            ⟨
          </Btn>
          <Btn onClick={() => scroll("right")} aria-label="Desplazar a la derecha">
            ⟩
          </Btn>
        </NavButtons>
      </Header>

      <CarruselContainer>
        <Carrusel ref={carruselRef} role="list">
          {imagenes.map((img, idx) => (
            <Card
              key={idx}
              onClick={() => irADetalle(img.producto)}
              role="listitem"
            >
              <Imagen src={img.url} alt={img.alt} />
              <Nombre>{img.alt}</Nombre>
            </Card>
          ))}
        </Carrusel>
      </CarruselContainer>
    </SliderWrapper>
  );
};

export default Slider;

// 🎨 Estilos

const SliderWrapper = styled.section`
  width: 100%;
  margin: 3rem 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Titulo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #222;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Btn = styled.button`
  background: #f5c518;
  color: #222;
  border: none;
  border-radius: 4px;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #e0b814;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CarruselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 0.5rem;
`;

const Carrusel = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;
`;

const Card = styled.article`
  flex: 0 0 auto;
  width: 180px;
  scroll-snap-align: center;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 150px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 120px;
  }
`;

const Imagen = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 110px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 90px;
  }
`;

const Nombre = styled.p`
  padding: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

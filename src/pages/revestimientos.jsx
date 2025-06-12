// src\pages\revestimientos.jsx:
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import revestimientos from "@/data/revestimientos";
import { breakpoints } from "@/styles/breakpoints";

const recolectarCategorias = (obj, prefix = []) => {
  const resultado = [];
  for (const clave of Object.keys(obj)) {
    const valor = obj[clave];
    const path = [...prefix, clave].join("→");
    const label = [...prefix, clave].join(" → ");

    if (Array.isArray(valor)) {
      resultado.push({ path, label, productos: valor });
    } else if (typeof valor === "object" && valor !== null) {
      resultado.push(...recolectarCategorias(valor, [...prefix, clave]));
    }
  }
  return resultado;
};

const categorias = recolectarCategorias(revestimientos.pared);
console.log("Categorías recolectadas:", categorias.map((c) => c.label));

const Revestimientos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [productoActivo, setProductoActivo] = useState(null);
  const gridRef = useRef();

  useEffect(() => {
    // Ejecutar solo una vez al montar para setear categoría inicial
    if (!categoriaSeleccionada && categorias.length > 0) {
      setCategoriaSeleccionada(categorias[0].path);
    }
  }, []); // <-- aquí la corrección, deps vacías

  const productosFiltrados = () => {
    const categoria = categorias.find((c) => c.path === categoriaSeleccionada);
    if (!categoria) return [];
    return categoria.productos.filter((p) =>
      (p?.nombre ?? "").toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const scrollGrid = (dir) => {
    const contenedor = gridRef.current;
    if (!contenedor) return;
    contenedor.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <MainContainer>
      <Menu>
        <Busqueda
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <TituloMenu>Categorías</TituloMenu>
        {categorias.map((cat) => (
          <BotonMenu
            key={cat.path}
            $activo={cat.path === categoriaSeleccionada}
            onClick={() => {
              setCategoriaSeleccionada(cat.path);
              setProductoActivo(null);
            }}
          >
            {cat.label}
          </BotonMenu>
        ))}
      </Menu>

      <Contenido>
        <Titulo>
          {categorias.find((c) => c.path === categoriaSeleccionada)?.label}
        </Titulo>

        <ScrollControls>
          <ScrollBtn onClick={() => scrollGrid("left")}>←</ScrollBtn>
          <ScrollBtn onClick={() => scrollGrid("right")}>→</ScrollBtn>
        </ScrollControls>

        <Grid ref={gridRef}>
          {productosFiltrados().map((producto) => (
            <Card
              key={`${producto.nombre}-${producto.descripcion}`}
              onClick={() => {
                setProductoActivo(null);
                setTimeout(() => setProductoActivo(producto), 0);
              }}
            >
              {producto.imagenes?.[0] ? (
                <Imagen src={producto.imagenes[0]} alt={producto.nombre} />
              ) : (
                <FallbackImagen>Imagen no disponible</FallbackImagen>
              )}
              <CardContenido>
                <Nombre>{producto.nombre}</Nombre>
                <Precio>${(producto.precioactual ?? 0).toLocaleString("es-AR")}</Precio>
                <Estado $disponible={producto.estado === "disponible"}>
                  {producto.estado}
                </Estado>
              </CardContenido>
            </Card>
          ))}
        </Grid>
      </Contenido>

      {productoActivo && (
        <Modal onClick={() => setProductoActivo(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {productoActivo.imagenes?.[1] || productoActivo.imagenes?.[0] ? (
              <ModalImagenWrapper>
                <ModalImagen
                  src={productoActivo.imagenes?.[1] || productoActivo.imagenes?.[0]}
                  alt={productoActivo.nombre}
                />
                <FullscreenButton
                  onClick={() =>
                    window.open(
                      productoActivo.imagenes?.[1] || productoActivo.imagenes?.[0],
                      "_blank"
                    )
                  }
                >
                  Ver en pantalla completa
                </FullscreenButton>
              </ModalImagenWrapper>
            ) : (
              <FallbackImagen>Imagen ampliada no disponible</FallbackImagen>
            )}

            <ModalTexto>
              <h2>{productoActivo.nombre}</h2>
              <p>{productoActivo.descripcion}</p>
              <Precio>
                ${productoActivo.precioactual?.toLocaleString("es-AR") ?? "0"}
              </Precio>
              <Estado $disponible={productoActivo.estado === "disponible"}>
                {productoActivo.estado}
              </Estado>
              <Cerrar onClick={() => setProductoActivo(null)}>✕ Cerrar</Cerrar>
            </ModalTexto>
          </ModalContent>
        </Modal>
      )}
    </MainContainer>
  );
};

export default Revestimientos;

// styled-components (igual que antes)

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Menu = styled.aside`
  width: 250px;
  background: #f9f9f9;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 1rem;
  }
`;

const TituloMenu = styled.h2`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
`;

const BotonMenu = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  background-color: ${(p) => (p.$activo ? "#2f855a" : "#fff")};
  color: ${(p) => (p.$activo ? "#fff" : "#333")};
  border: none;
  border-radius: 6px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.$activo ? "#276749" : "#e0e0e0")};
  }
`;

const Busqueda = styled.input`
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const Contenido = styled.main`
  flex: 1;
  padding: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;
`;

const ScrollControls = styled.div`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const ScrollBtn = styled.button`
  background: #eee;
  border: none;
  padding: 0.4rem 0.7rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;

    & > * {
      flex: 0 0 auto;
      min-width: 120px;
      max-width: 140px;
      scroll-snap-align: center;
    }
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
`;

const Imagen = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: #f5f5f5;
`;

const FallbackImagen = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
`;

const CardContenido = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Nombre = styled.h2`
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
`;

const Precio = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2e7d32;
`;

const Estado = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: ${(p) => (p.$disponible ? "#e8f5e9" : "#ffebee")};
  color: ${(p) => (p.$disponible ? "#2e7d32" : "#c62828")};
`;

const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    max-height: 100vh;
  }
`;

const ModalImagenWrapper = styled.div`
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImagen = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 70vh;

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 50vh;
  }
`;

const ModalTexto = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }
`;

const Cerrar = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1rem;
  color: #219653;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

const FullscreenButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  color: #333;

  &:hover {
    background: #f0f0f0;
  }
`;

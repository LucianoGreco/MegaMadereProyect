import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { getMelaminas, API_BASE } from "@/api/api.js";
import ProductoDestacado from "@/components/ProductoDestacado.jsx";
import { breakpoints } from "@/styles/breakpoints";

const construirRutaImagen = (img) => {
  if (!img) return "";
  const tieneExtension = /\.[a-zA-Z0-9]{3,4}$/.test(img);
  return `${API_BASE.replace("/api", "")}/products/melaminas/${img}${
    tieneExtension ? "" : ".jpg"
  }`;
};

const MelaminasPage = () => {
  const [melaminas, setMelaminas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [productoDestacado, setProductoDestacado] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const nombreSeleccionado = params.get("nombre")?.toLowerCase() || "";

  useEffect(() => {
    const cargarMelaminas = async () => {
      try {
        const res = await getMelaminas();
        const mel = Array.isArray(res.data?.data) ? res.data.data : [];
        setMelaminas(mel);

        if (nombreSeleccionado) {
          for (const cat of mel) {
            const prod = cat.productos.find(
              (p) => p.nombre.toLowerCase() === nombreSeleccionado
            );
            if (prod) {
              setProductoDestacado(prod);
              break;
            }
          }
        }
      } catch (err) {
        console.error("❌ Error al cargar melaminas:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    cargarMelaminas();
  }, [nombreSeleccionado]);

  const seleccionarProducto = (producto) => {
    navigate(`?nombre=${encodeURIComponent(producto.nombre)}`);
    setProductoDestacado(producto);
  };

  const cerrarModal = () => {
    navigate(`/melaminas`);
    setProductoDestacado(null);
  };

  const filtrar = (producto) => {
    const termino = busqueda.toLowerCase();
    return producto.nombre?.toLowerCase().includes(termino);
  };

  if (loading) return <Container>Cargando melaminas...</Container>;
  if (error) return <Container>Error al cargar los datos.</Container>;
  if (!melaminas.length) {
    return <Container>No hay melaminas para mostrar.</Container>;
  }

  return (
    <Container>
      <TituloPrincipal>Melaminas</TituloPrincipal>

      <Busqueda
        type="text"
        placeholder="Buscar melamina por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {melaminas.map((cat, i) => (
        <div key={i}>
          <CategoriaTitulo>{cat.categoria}</CategoriaTitulo>
          <Grid>
            {(cat.productos || []).filter(filtrar).length === 0 ? (
              <EmptyMsg>No hay productos en esta categoría.</EmptyMsg>
            ) : (
              cat.productos
                .filter(filtrar)
                .map((prod, j) => (
                  <ProductoCard
                    key={j}
                    producto={prod}
                    onClick={() => seleccionarProducto(prod)}
                  />
                ))
            )}
          </Grid>
        </div>
      ))}

      {productoDestacado && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={cerrarModal}>×</CloseButton>
            <ProductoDestacado
              producto={productoDestacado}
              construirRutaImagen={construirRutaImagen}
            />
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

const ProductoCard = ({ producto, onClick }) => {
  const [imagenActiva] = useState(0);
  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];
  const imagenSrc = construirRutaImagen(imagenes[imagenActiva]);

  return (
    <Card onClick={onClick}>
      {imagenSrc && (
        <Imagen src={imagenSrc} alt={producto.nombre || "Sin nombre"} />
      )}
      <Nombre>{producto.nombre}</Nombre>
    </Card>
  );
};

export default MelaminasPage;

// 🎨 Estilos
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const TituloPrincipal = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #222;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const CategoriaTitulo = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
  }
`;

const Busqueda = styled.input`
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Imagen = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Nombre = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
`;

const EmptyMsg = styled.p`
  font-size: 0.95rem;
  color: #999;
  text-align: center;
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

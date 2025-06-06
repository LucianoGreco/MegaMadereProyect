import { useState } from "react";
import styled from "styled-components";
import revestimientos from "@/data/revestimientos";

const recolectarCategorias = (obj, prefix = []) => {
  const resultado = [];
  for (const clave in obj) {
    const valor = obj[clave];
    if (Array.isArray(valor)) {
      resultado.push({
        path: [...prefix, clave].join("/"),
        label: [...prefix, clave].join(" → "),
        productos: valor
      });
    } else if (typeof valor === "object") {
      resultado.push(...recolectarCategorias(valor, [...prefix, clave]));
    }
  }
  return resultado;
};

const categorias = recolectarCategorias(revestimientos.pared);

const Revestimientos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0].path);
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = () => {
    const categoria = categorias.find((c) => c.path === categoriaSeleccionada);
    if (!categoria) return [];
    return categoria.productos.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return (
    <Container>
      <Menu>
        <TituloMenu>Categorías</TituloMenu>
        {categorias.map((cat) => (
          <BotonMenu
            key={cat.path}
            $activo={cat.path === categoriaSeleccionada}
            onClick={() => setCategoriaSeleccionada(cat.path)}
          >
            {cat.label}
          </BotonMenu>
        ))}
      </Menu>

      <Contenido>
        <Busqueda
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <Titulo>
          {categorias.find((c) => c.path === categoriaSeleccionada)?.label}
        </Titulo>

        <Grid>
          {productosFiltrados().map((producto) => (
            <Card key={producto.id}>
              <ImagenContainer>
                {producto.imagenes?.[0] && (
                  <Imagen src={producto.imagenes[0]} alt={producto.nombre} />
                )}
              </ImagenContainer>
              <CardContenido>
                <Nombre>{producto.nombre}</Nombre>
                <Descripcion>{producto.descripcion}</Descripcion>
                <Precio>${(producto.precioactual ?? 0).toLocaleString("es-AR")}</Precio>
                <Estado $disponible={producto.estado === "disponible"}>
                  {producto.estado}
                </Estado>
              </CardContenido>
            </Card>
          ))}
        </Grid>
      </Contenido>
    </Container>
  );
};

export default Revestimientos;

// ------------------ ESTILOS ------------------

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 3rem;
  background-color: #fafafa;
  min-height: 100vh;
`;

const Menu = styled.aside`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const TituloMenu = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
`;

const BotonMenu = styled.button`
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.$activo ? "#2f855a" : "#f0f0f0")};
  color: ${(props) => (props.$activo ? "#fff" : "#333")};
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$activo ? "#276749" : "#e2e2e2")};
  }
`;

const Contenido = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Busqueda = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Titulo = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 0.5rem;

    & > * {
      flex: 0 0 80%;
      max-width: 80%;
      scroll-snap-align: start;
    }
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImagenContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContenido = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Nombre = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
`;

const Descripcion = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

const Precio = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2f855a;
`;

const Estado = styled.span`
  align-self: flex-start;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 999px;
  font-weight: 500;
  color: ${(props) => (props.$disponible ? "#2e7d32" : "#c62828")};
  background-color: ${(props) => (props.$disponible ? "#e8f5e9" : "#ffebee")};
`;

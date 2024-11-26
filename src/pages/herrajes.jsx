import React, { useState } from "react";
import { herrajes } from "../data/palcas/imagenes";

const productos = Object.keys(herrajes).map((key, index) => ({
  id: key,
  imagen: herrajes[key],
  nombre: `Herraje ${index + 1}`,
  descripcion: `Este es el herraje número ${index + 1}, ideal para tus proyectos.`,
  precio: `$${(index + 1) * 100}.00`,
}));

const ITEMS_POR_PAGINA = 16;

const Herrajes = () => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(productos.length / ITEMS_POR_PAGINA);
  const productosPaginados = productos.slice(
    (paginaActual - 1) * ITEMS_POR_PAGINA,
    paginaActual * ITEMS_POR_PAGINA
  );

  const cambiarPagina = (direccion) => {
    if (direccion === "prev" && paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    } else if (direccion === "next" && paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Por defecto 4 columnas
          gap: "20px",
          // Responsive: En pantallas pequeñas apilar las tarjetas una debajo de otra
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {productosPaginados.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p style={{ fontWeight: "bold", color: "#333" }}>{producto.precio}</p>
            <a
              href="https://wa.me/2604331727"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#25d366",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Consultar
            </a>
          </div>
        ))}
      </div>

      {/* Navegación de páginas */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => cambiarPagina("prev")}
          disabled={paginaActual === 1}
          style={{
            margin: "0 10px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: paginaActual === 1 ? "not-allowed" : "pointer",
          }}
        >
          Anterior
        </button>
        <span>Página {paginaActual} de {totalPaginas}</span>
        <button
          onClick={() => cambiarPagina("next")}
          disabled={paginaActual === totalPaginas}
          style={{
            margin: "0 10px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: paginaActual === totalPaginas ? "not-allowed" : "pointer",
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Herrajes;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

import { fetchHerrajes, obtenerMelaminas, URL_BASE } from "@/api/api";

import Banner from "@/components/ui/Banner";
import Carrusel from "@/components/ui/Carrusel";
import Slider from "@/components/ui/Slider";
import EmpapeladosSlider from "@/components/ui/EmpapeladosSlider";
import CardHome from "@/components/cards/CardHome";
import data from "@/data/pages/home";

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem 1rem;
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
    gap: 12px;
  }
`;

const Home = () => {
  const [melaminasData, setMelaminasData] = useState([]);
  const [herrajesData, setHerrajesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const melaminas = await obtenerMelaminas();
        const herrajes = await fetchHerrajes();

        console.log("📦 Melaminas:", melaminas);
        console.log("📦 Herrajes:", herrajes);

        const melaminasFormateadas = Array.isArray(melaminas)
          ? melaminas.map(c => ({
              categoria: c.categoria,
              productos: c.productos || [],
            }))
          : [];

        setMelaminasData(melaminasFormateadas);
        setHerrajesData(herrajes);
      } catch (error) {
        console.error("❌ Error al cargar datos en Home:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <HomeContainer>
      <Banner />

      <Slider
        titulo="Melaminas Destacadas"
        data={melaminasData}
        categoriaKey="categoria"
        productosKey="productos"
        buildImagePath={(categoria, img) =>
          `${URL_BASE}/products/melaminas/${img}`
        }
      />

      <Carrusel />
      <EmpapeladosSlider />

      {Object.values(data.secciones).map((seccion) => (
        <CardHome
          key={seccion.id}
          name={seccion.name}
          description={seccion.description}
          image={seccion.image}
          page={seccion.page}
        />
      ))}

      <Slider
        titulo="Herrajes Destacados"
        data={herrajesData}
        categoriaKey="nombre"
        productosKey="productos"
        buildImagePath={(categoria, img) =>
          `${URL_BASE}/products/herrajes/${img}`
        }
      />
    </HomeContainer>
  );
};

export default Home;

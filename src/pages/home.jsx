import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

import {
  getHerrajes,
  getMelaminas,
  getRevestimientosNormalizados,
  API_BASE,
} from "@/api/api";

import Banner from "@/components/ui/Banner";
import CardHome from "@/components/cards/CardHome";
import Slider from "@/components/ui/Slider";
import data from "@/data/pages/home";

const PAGE_SIZE = 6;

const Home = () => {
  const [melaminasFull, setMelaminasFull] = useState([]);
  const [melaminas, setMelaminas] = useState([]);
  const [melaminasPage, setMelaminasPage] = useState(1);

  const [herrajesFull, setHerrajesFull] = useState([]);
  const [herrajes, setHerrajes] = useState([]);
  const [herrajesPage, setHerrajesPage] = useState(1);

  const [revestimientosFull, setRevestimientosFull] = useState([]);
  const [revestimientos, setRevestimientos] = useState([]);
  const [revestimientosPage, setRevestimientosPage] = useState(1);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const [melRes, herRes, revRes] = await Promise.all([
          getMelaminas(),
          getHerrajes(),
          getRevestimientosNormalizados(),
        ]);

        const mel = Array.isArray(melRes.data?.data) ? melRes.data.data : [];
        const her = Array.isArray(herRes.data?.data) ? herRes.data.data : [];
        const rev = Array.isArray(revRes.data) ? revRes.data : [];

        setMelaminasFull(mel);
        setHerrajesFull(her);
        setRevestimientosFull(rev);

        setMelaminas(mel.slice(0, PAGE_SIZE));
        setHerrajes(her.slice(0, PAGE_SIZE));
        setRevestimientos(rev.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error("❌ Error al cargar productos:", err);
      }
    };

    cargarProductos();
  }, []);

  const loadMore = (fullData, currentPage, setPage, setVisible) => {
    const nextPage = currentPage + 1;
    setPage(nextPage);
    setVisible(fullData.slice(0, nextPage * PAGE_SIZE));
  };

  const handleLoadMoreHerrajes = () =>
    loadMore(herrajesFull, herrajesPage, setHerrajesPage, setHerrajes);

  const handleLoadMoreMelaminas = () =>
    loadMore(melaminasFull, melaminasPage, setMelaminasPage, setMelaminas);

  const handleLoadMoreRevestimientos = () =>
    loadMore(
      revestimientosFull,
      revestimientosPage,
      setRevestimientosPage,
      setRevestimientos
    );

  const buildImagePath = (path, nombreImagen) =>
    `${API_BASE.replace(
      "/api",
      ""
    )}/products/revestimientos/${path}/${nombreImagen}`;

  return (
    <HomeSection>
      <Banner />

      <Section>
        <SectionTitle>Herrajes</SectionTitle>
        <Slider
          titulo="Herrajes"
          data={herrajes}
          categoriaKey="categoria"
          productosKey="productos"
          onLoadMore={handleLoadMoreHerrajes}
        />
      </Section>

      <Section>
        <SectionTitle>Melaminas</SectionTitle>
        <Slider
          titulo="Melaminas"
          data={melaminas}
          categoriaKey="categoria"
          productosKey="productos"
          onLoadMore={handleLoadMoreMelaminas}
        />
      </Section>

      <Section>
        <SectionTitle>Revestimientos</SectionTitle>
        <Slider
          titulo="Revestimientos"
          data={revestimientos}
          categoriaKey="path"
          productosKey="productos"
          onLoadMore={handleLoadMoreRevestimientos}
          buildImagePath={buildImagePath}
        />
      </Section>

      <Section>
        <SectionTitle>Explora nuestras secciones</SectionTitle>
        <CardsGrid>
          {Object.values(data.secciones).map((seccion) => (
            <CardHome
              key={seccion.id}
              name={seccion.name}
              image={seccion.image}
              page={seccion.page}
            />
          ))}
        </CardsGrid>
      </Section>
    </HomeSection>
  );
};

export default Home;

// 🎨 Estilos
const HomeSection = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  & > section:last-child {
    margin-bottom: 4rem;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const CardsGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;


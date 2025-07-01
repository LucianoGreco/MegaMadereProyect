// src/components/SliderMelaminas.jsx

import React, { useEffect, useState } from 'react';
import { obtenerMelaminas } from '@/api/api';
import Slider from '@/components/ui/Slider';
import { formatearMelaminasParaSlider } from '@/utils/formatearMelaminasParaSlider';

const SliderMelaminas = () => {
  const [melaminas, setMelaminas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await obtenerMelaminas();

      console.log('🔍 Melaminas desde API:', rawData);

      const adaptado = formatearMelaminasParaSlider(rawData);

      console.log('✅ Melaminas adaptadas para Slider:', adaptado);

      setMelaminas(adaptado);
    };

    fetchData();
  }, []);

  return <Slider titulo="Melaminas" data={melaminas} />;
};

export default SliderMelaminas;

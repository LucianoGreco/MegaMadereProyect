import { empapelados, categoriasEmpapelados } from "@/data/revestimientos/empapelados";
import { adhesivosPared } from "@/data/revestimientos/adhesivos";
import { ceramicos } from "@/data/revestimientos/ceramicos";
import { wallstickers } from "@/data/revestimientos/wallstickers";

import { agruparPorCategoria } from "@/data/utils/agruparPorCategoria";

const empapeladosPorCategoria = agruparPorCategoria(empapelados, categoriasEmpapelados);

const revestimientos = {
  pared: {
    adhesivos: adhesivosPared,
    ceramicos: ceramicos,
    wallstickers: wallstickers,
    empapelados: empapeladosPorCategoria,
  },
};

export default revestimientos;

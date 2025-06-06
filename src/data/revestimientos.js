import { adhesivosPared } from "@/data/revestimientos/adhesivos.js";
import { ceramicos } from "@/data/revestimientos/ceramicos.js";
import { wallstickers } from "@/data/revestimientos/wallstickers.js";
import { empapelados } from "./revestimientos/empapelados";

const revestimientos = {
  pared: {
    adhesivos: adhesivosPared,
    "ceramicos y wallstickers": {
    "ceramicos venecitas azulejos": ceramicos,
    wallstickers : wallstickers,
    },
    empapelados: empapelados,
  }
};

export default revestimientos;  

import Dashboard from "../Components/Nav/Dashboard";
import Conversa from "../Components/Nav/Conversa";

import Geral from "../Components/Nav/Analytics/Geral";
import Engajamento from "../Components/Nav/Analytics/Engajamento";
import Publico from "../Components/Nav/Analytics/Publico";
import Alcance from "../Components/Nav/Analytics/Alcance";
import Stories from "../Components/Nav/Analytics/Stories";

import Calendario from "../Components/Nav/Publicacoes/Calendario";
import ListagemMedia from "../Components/Nav/Publicacoes/ListagemMedia";

import CompetidoresComparacao from "../Components/Nav/Escutando/CompetidoresComparacao";
import Competidores from "../Components/Nav/Escutando/Competidores";

import iconDashboard from "../Components/Icons/dashboard";
import iconAnalytics from "../Components/Icons/analise";
import iconPublicacoes from "../Components/Icons/publicacoes";
import iconConversa from "../Components/Icons/conversa";
import iconEscutando from "../Components/Icons/competidores";

export const menuItems = [
  {
    name: "Dashboard",
    comp: Dashboard,
    icon: iconDashboard,
    subMenus: [],
  },
  {
    name: "Análise",
    comp: Geral,
    icon: iconAnalytics,
    subMenus: [
      { name: "Engajamento", comp: Engajamento },
      { name: "Publico", comp: Publico },
      { name: "Alcance", comp: Alcance },
      { name: "Stories", comp: Stories },
    ],
  },
  {
    name: "Calendário",
    comp: Calendario,
    icon: iconPublicacoes,
    subMenus: [{ name: "Lista de Media", comp: ListagemMedia }],
  },
  {
    name: "Conversa",
    comp: Conversa,
    icon: iconConversa,
    subMenus: [],
  },
  {
    name: "Observando",
    comp: Competidores,
    icon: iconEscutando,
    subMenus: [{ name: "Comparação", comp: CompetidoresComparacao }],
  },
];

import { orderBy } from "lodash";

let postsOrdenados;
const ordenarColuna = (sortKey, state) => {
  postsOrdenados = orderBy(state, [sortKey], "desc");
  return postsOrdenados;
};

export default ordenarColuna;

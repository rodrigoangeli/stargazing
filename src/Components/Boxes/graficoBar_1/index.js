import React from "react";
import GraficoBar from "../../Graficos/Bar";

const GraficoBar1 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>{props.desc}</h6>
      </div>
      <div className="box__conteudo">
        <GraficoBar
          dados={[65, 59, 80, 81, 56, 55, 40]}
          labels={[
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
            "Domingo",
          ]}
          cor="rgba(248, 213, 126,.5)"
          fillcor="rgba(248, 213, 126,.25)"
          bgcor="rgba(248, 213, 126,1)"
          redraw
        />
      </div>
    </div>
  </div>
);

export default GraficoBar1;

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
          dados={props.dados}
          labels={props.labels}
          cor="rgba(252, 138, 74,.5))"
          fillcor="rgba(252, 138, 74,.25)"
          bgcor="rgba(252, 138, 74,1)"
          redraw
        />
      </div>
    </div>
  </div>
);

export default GraficoBar1;

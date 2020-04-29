import React from "react";
import GraficoLine from "../../Graficos";

const Grafico2 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>{props.desc}</h6>
      </div>
      <div className="box__conteudo">
        <GraficoLine
          gapNumero={props.gapNumero}
          dados={props.dados}
          labels={props.labels}
          cor="rgba(73, 211, 153,.5)"
          fillcor="rgba(73, 211, 153,.25)"
          bgcor="rgba(73, 211, 153,1)"
          redraw
        />
      </div>
    </div>
  </div>
);

export default Grafico2;

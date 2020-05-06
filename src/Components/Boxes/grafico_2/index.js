import React from "react";
import GraficoLine from "../../Graficos";

const Grafico2 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>
          {" "}
          <span className="off1"></span> {props.desc}
        </h6>
        <p>{props.ultimos}</p>
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

import React from "react";
import GraficoBar from "../../Graficos/Bar";

const GraficoBar1 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>
          {" "}
          <span className="off2"></span> {props.desc}
        </h6>
        <p>{props.ultimos}</p>
      </div>
      <div className="box__conteudo">
        <GraficoBar
          gapNumero={props.gapNumero}
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

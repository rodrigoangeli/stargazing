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
          dados={[65, 59, 80, 81, 56, 55, 80]}
          labels={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
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

export default Grafico2;

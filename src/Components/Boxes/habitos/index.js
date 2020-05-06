import React from "react";
import Habitos from "../../Graficos/Habitos";

const Habitos1 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper habitos grafico">
      <div className="box__titulo">
        <h6>
          {" "}
          <span className="off1"></span> {props.desc}
        </h6>
        <p>{props.ultimos}</p>
      </div>
      <div className="box__conteudo ">
        <div className="box__dados">
          <h1>{props.num}</h1>
          <p>
            Houve um número positivo de seguidores ganhos no período selecionado
          </p>
        </div>
        <Habitos />
      </div>
    </div>
  </div>
);

export default Habitos1;

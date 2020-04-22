import React from "react";
import Ascensao from "../../Icons/ascensao";
import Descensao from "../../Icons/descensao";
import Neutro from "../../Icons/neutro";

const Modelo1 = (props) => (
  <div className="box">
    <div className="box__iconeWrapper">
      <div className="box__icone off1">{props.icone}</div>
    </div>
    <div className="box__conteudoWrapper">
      <div className="box__titulo">
        <h6>{props.desc}</h6>
      </div>
      <div className="box__conteudo">
        <div className="box__dados">
          <h2>{props.num}</h2>
          {props.porcentagem && (
            <span
              className={
                props.porcentagem.includes("+")
                  ? "ml-2 pos"
                  : props.porcentagem.includes("-")
                  ? "ml-2 neg"
                  : "ml-2 "
              }
            >
              <b>{props.porcentagem}</b>
              {props.porcentagem.includes("+") ? (
                <Ascensao />
              ) : props.porcentagem.includes("-") ? (
                <Descensao />
              ) : (
                <Neutro />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Modelo1;

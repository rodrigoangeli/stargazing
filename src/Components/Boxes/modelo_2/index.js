import React from "react";
import Ascensao from "../../Icons/ascensao";
import Descensao from "../../Icons/descensao";
import Neutro from "../../Icons/neutro";

const Modelo2 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper vertical">
      <div className="box__iconeWrapper">
        <div className={"box__icone " + props.fill}>{props.icone}</div>
      </div>
      <div className="box__conteudo">
        <div className="box__dados">
          <h2>{props.num}</h2>

          <div className="box__titulo">
            <h6>{props.desc}</h6>
          </div>
          {props.porcentagem && (
            <span
              className={
                props.porcentagem.includes("+")
                  ? "pos"
                  : props.porcentagem.includes("-")
                  ? "neg"
                  : ""
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

export default Modelo2;

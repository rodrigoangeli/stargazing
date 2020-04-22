import React from "react";
import Ascensao from "../../Icons/ascensao";
import Descensao from "../../Icons/descensao";
import Neutro from "../../Icons/neutro";
import GraficoLine from "../../Graficos";

const Grafico1 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>{props.desc}</h6>
      </div>
      <div className="box__conteudo">
        <div className="box__dados">
          <h1>{props.num}</h1>
          {props.porcentagem && (
            <>
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
            </>
          )}
          <p>
            Houve um número positivo de seguidores ganhos no período selecionado
          </p>
        </div>
        <GraficoLine
          dados={[65, 59, 80, 81, 56, 55, 10]}
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

export default Grafico1;

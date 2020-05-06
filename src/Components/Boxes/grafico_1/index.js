import React from "react";
import Ascensao from "../../Icons/ascensao";
import Descensao from "../../Icons/descensao";
import Neutro from "../../Icons/neutro";
import GraficoLine from "../../Graficos";

const Grafico1 = (props) => (
  <div className="box">
    <div className="box__conteudoWrapper grafico">
      <div className="box__titulo">
        <h6>
          <span className="off3"></span> {props.desc}
        </h6>
        <p>{props.ultimos}</p>
      </div>
      <div className="box__conteudo">
        <div className="box__dados">
          <div className="box__num lg">{props.num}</div>
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
            {props.num > 0
              ? "Houve um número positivo de seguidores ganhos no período selecionado"
              : props.num < 0
              ? " Houve um número negativo de seguidores ganhos no período selecionado"
              : " Não houve uma mudança no número de seguidores no período selecionado"}
          </p>
        </div>
        <GraficoLine
          gapNumero={props.gapNumero}
          dados={props.dados}
          labels={props.labels}
          cor="rgba(93, 142, 255,.5)"
          fillcor="rgba(93, 142, 255,.25)"
          bgcor="rgba(93, 142, 255,1)"
          redraw
        />
      </div>
    </div>
  </div>
);

export default Grafico1;

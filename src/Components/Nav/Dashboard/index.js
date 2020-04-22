import React, { Component } from "react";
import Modelo1 from "../../Boxes/modelo_1";
import Grafico1 from "../../Boxes/grafico_1";
import Publicacoes from "../../Icons/publicacoes";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="componenteWrapper">
        <h3 className="titulo">Dashboard</h3>
        <div className="row">
          <div className="col-4">
            <Modelo1
              num="3,198"
              desc="Publicações"
              porcentagem="0%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              num="53.7k"
              desc="Seguidores"
              porcentagem="0%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              num="1,131"
              desc="Seguindo"
              porcentagem="0%"
              icone={<Publicacoes />}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <Grafico1 />
          </div>
        </div>
      </div>
    );
  }
}

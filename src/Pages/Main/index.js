import React, { Component } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import DadosGerais from "../../Components/DadosGerais";
import Posts from "../../Components/Posts";

const { ipcRenderer } = window.require("electron");
const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../../Utils/constants");

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: [],
      nome: "",
      carregando: false,
      limite: 15,
    };
    this.gerarDados = this.gerarDados.bind(this);
    this.buscarIg = this.buscarIg.bind(this);
    this.setPosts = this.setPosts.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on(SEND_TO_RENDERER, this.gerarDados);
  }
  componentWillUnmount() {
    ipcRenderer.removeListener(SEND_TO_RENDERER, this.gerarDados);
  }

  gerarDados(event, data) {
    var a = '{"shortcode_media"';
    if (data.indexOf(a) !== -1) {
      this.setState({
        resultado: [
          ...this.state.resultado,
          ...JSON.parse(
            "[" + data.split(/(?={"shortcode_media")/).join(",") + "]"
          ),
        ],
      });
    } else {
      this.setState({
        resultado: [...this.state.resultado, JSON.parse(data)],
      });
    }
  }

  setPosts(posts) {
    this.setState({ resultado: posts });
  }

  buscarIg(value) {
    this.setState({
      carregando: !this.state.carregando,
      nome: value,
    });
    ipcRenderer.send(CATCH_ON_MAIN, value + " " + this.state.limite);
  }

  render() {
    return (
      <div className="Main">
        {this.state.carregando &&
          this.state.limite != this.state.resultado.length && (
            <div className="Carregando">
              <div className="carregando__info">
                <h4>
                  Coletando dados de <span>@{this.state.nome}</span>
                </h4>
                <div className="p3">
                  Isso pode levar alguns minutos, aguarde.
                </div>
                <div className="carregando__barra">
                  <div
                    className="carregando__progresso"
                    style={{
                      width:
                        (this.state.resultado.length / this.state.limite) *
                          100 +
                        "%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        <Sidebar></Sidebar>
        <div className="Content">
          <Header buscarIg={this.buscarIg}></Header>
          <Posts
            resultado={this.state.resultado}
            setPosts={this.setPosts}
          ></Posts>
        </div>
      </div>
    );
  }
}

export default Main;

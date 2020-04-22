import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Searchbar from "../../Components/Searchbar";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../../Components/Nav";

const { ipcRenderer } = window.require("electron");
const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../../Utils/constants");

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      resultado: [],
      nome: "",
    };
    this.gerarDados = this.gerarDados.bind(this);
    this.buscarIg = this.buscarIg.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on(SEND_TO_RENDERER, this.gerarDados);
  }
  componentWillUnmount() {
    ipcRenderer.removeListener(SEND_TO_RENDERER, this.gerarDados);
  }

  gerarDados(event, data) {}

  buscarIg(value) {
    this.setState({
      carregando: !this.state.carregando,
      nome: value,
    });
    ipcRenderer.send(CATCH_ON_MAIN, value + " " + this.state.limite);
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="Main">
        <Router>
          <Sidebar />

          <div className="Content">
            <Searchbar buscarIg={this.buscarIg}></Searchbar>

            <div className="Componentes">
              <Nav />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;

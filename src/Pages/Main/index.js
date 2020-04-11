import React, { Component } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import DadosGerais from "../../Components/DadosGerais";
import Posts from "../../Components/Posts";

const { ipcRenderer } = window.require("electron");
const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../../Utils/constants");
const teste = [];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: [],
      name: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRenderer = this.handleRenderer.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on(SEND_TO_RENDERER, this.handleRenderer);
  }
  componentWillUnmount() {
    ipcRenderer.removeListener(SEND_TO_RENDERER, this.handleRenderer);
  }

  handleRenderer(event, data) {
    var verificar = data.includes('{"shortcode_media"');
    var verificar2 = data.includes('{"shortcode_media"', 15);

    if (verificar && verificar2) {
      var splitted = data.split(/(?={"shortcode_media")/);
      console.log(splitted);
      for (var i = 0; i < splitted.length; i++) {
        splitted[i] = JSON.parse(splitted[i]);
        teste.push(splitted[i]);
      }
    } else {
      teste.push(JSON.parse(data));
    }
    //checar se string contém {"shortcode_media" mais de uma vez
    //se sim, vai separar em array ambos
    //dar push nessas arrays pra array teste

    // se nao, apenas pushar pra array teste

    this.setState({
      resultado: teste,
    });
  }

  handleClick(e) {
    e.preventDefault();
    ipcRenderer.send(CATCH_ON_MAIN, this.state.name);
    this.setState({ name: "" });
  }
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="Main">
        <Sidebar></Sidebar>
        <div className="Content">
          <Header
            onNameChange={this.onNameChange}
            onClick={this.handleClick}
            name={this.state.name}
          ></Header>
          <Posts dados={this.state.resultado}></Posts>
        </div>
      </div>
    );
  }
}

export default Home;

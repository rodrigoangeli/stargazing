import React, { Component } from "react";

const { ipcRenderer } = window.require("electron");

const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../../Utils/constants");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: "",
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
    this.setState({
      resultado: data,
    });
    console.log("handleRenderer", data);
  }

  handleClick() {
    console.log("teste");
    ipcRenderer.send(CATCH_ON_MAIN, "192.168.25.8"); //Envia para Main.js, no futuro, mandar pelo input o nome do usuario pra ser scrapeado
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"></div>
          <button onClick={this.handleClick}>teste23</button>
          <div id="resultado">{this.state.resultado}</div>
        </div>
      </div>
    );
  }
}

export default Home;

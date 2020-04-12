import React, { Component } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import DadosGerais from "../../Components/DadosGerais";
import Posts from "../../Components/Posts";

const { ipcRenderer } = window.require("electron");
const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../../Utils/constants");
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

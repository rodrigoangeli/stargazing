import React, { Component } from "react";
import Titlebar from "./Components/Titlebar";
import Routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Stargazing",
      anoAtual: new Date().getFullYear(),
      home: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Titlebar></Titlebar>
        <Routes name={this.state.appName} />
      </div>
    );
  }
}
export default App;

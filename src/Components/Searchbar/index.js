import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  hanldeSubmit(e) {
    e.preventDefault();
    this.props.buscarIg(this.state.nome);
    this.setState({
      nome: "",
    });
  }

  render() {
    return (
      <div className="Searchbar active">
        <h3 className="titulo my-4 ml-4">Overview</h3>

        {/*  <form className="searchbar__form" onSubmit={this.hanldeSubmit}>
          <input
            type="text"
            placeholder="@"
            className="flex-1 w-100"
            onChange={this.onInputChange}
            name="name"
            value={this.state.nome}
          ></input>
          <button className="w-100" onClick={this.hanldeSubmit} type="button">
            Buscar
          </button>
        </form> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import Lupa from "../Icons/lupa";

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
        <form className="searchbar__form" onSubmit={this.hanldeSubmit}>
          <div className="input-wrapper">
            <Lupa />
            <input
              type="text"
              placeholder='Tente procurando por "Média de comentários recebidos"'
              onChange={this.onInputChange}
              name="name"
              value={this.state.nome}
            ></input>
          </div>
        </form>
        <button type="button" className="sm btn-transparente primary">
          Exportar
        </button>
      </div>
    );
  }
}

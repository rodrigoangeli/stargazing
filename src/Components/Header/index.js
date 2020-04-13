import React, { Component } from "react";
import FotoPerfil from "../../Assets/img/rodrigo_profile.png";

export default class Header extends Component {
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
      <div className="perfil__dados">
        <form className="perfil__searchbar" onSubmit={this.hanldeSubmit}>
          <input
            type="text"
            placeholder="Digite o perfil que você deseja consultar"
            className="flex-1"
            onChange={this.onInputChange}
            name="name"
            value={this.state.nome}
          ></input>
          <button onClick={this.hanldeSubmit} type="button">
            Buscar
          </button>
        </form>
        <div className=""></div>
        <div className="perfil__logado">
          <span>Rodrigo</span>
        </div>
      </div>
    );
  }
}

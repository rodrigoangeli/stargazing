import React, { Component } from "react";
import FotoPerfil from "../../Assets/img/rodrigo_profile.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="perfil__dados">
        <form className="perfil__searchbar" onSubmit={this.props.onClick}>
          <input
            type="text"
            placeholder="Digite o perfil que você deseja consultar"
            className="flex-1"
            onChange={this.props.onNameChange}
            name="name"
            value={this.props.name}
          ></input>
          <button onClick={this.props.onClick} type="button">
            Buscar
          </button>
        </form>
        <div className=""></div>
        <div className="perfil__logado">
          <img src={FotoPerfil}></img>
          <span>Rodrigo</span>
        </div>
      </div>
    );
  }
}

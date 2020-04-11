import React, { Component } from "react";

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
          <img src="https://via.placeholder.com/42x42"></img>
          <span>Rodrigo Angeli</span>
        </div>
      </div>
    );
  }
}

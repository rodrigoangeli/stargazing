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
          <Lupa />
          <input
            type="text"
            placeholder='Tente procurando por dados como "Média de comentários recebidos"'
            onChange={this.onInputChange}
            name="name"
            value={this.state.nome}
          ></input>
        </form>
        <div className="searchbar__perfil">
          <img
            src="https://instagram.fpoa7-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81910035_612878822909932_7390832095788007424_n.jpg?_nc_ht=instagram.fpoa7-2.fna.fbcdn.net&_nc_ohc=080mzQrrrU8AX-NVXzA&oh=aee3e27a382c1e2aa35551b5bff14bd3&oe=5ECAF8B2"
            alt=""
          />
          <div className="searchbar__perfil--dados">
            <div>Rodrigo Angeli</div>
            <div>@rodrigo_angeli</div>
          </div>
        </div>
      </div>
    );
  }
}

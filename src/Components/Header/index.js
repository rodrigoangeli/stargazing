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
        <div className=""></div>
        <div className="perfil__logado">
          <span>Rodrigo</span>
        </div>
      </div>
    );
  }
}

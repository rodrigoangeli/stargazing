import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAtivado: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({
      modalAtivado: !this.state.modalAtivado,
    });
  }

  render() {
    return (
      <div className={this.state.modalAtivado ? "Modal active" : "Modal"}>
        <div className="modal__overlay" onClick={this.toggleModal}></div>
        <div className="modal__wrapper">
          <div className="modal__fechar" onClick={this.toggleModal}>
            &times;
          </div>
          {this.props.titulo && (
            <div className="modal__titulo">{this.props.titulo}</div>
          )}
          <div className="modal__corpo">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

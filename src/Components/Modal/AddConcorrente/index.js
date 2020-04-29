import React, { Component } from "react";
import { PostData } from "../../../Utils/PostData";

export default class AddConcorrente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputModal: "",
      enviarConcorrente: "",
      conta: undefined,
      aviso: "",
      carregando: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.addConcorrente = this.addConcorrente.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputModal } = this.state;
    if (inputModal !== prevState.inputModal) {
      this.handleSubmit(inputModal);
    }
  }

  onInputChange = (event) => {
    event.preventDefault();
    let { value } = event.target;
    if (value.includes("@") && value.length >= 2) {
      value = value.replace("@", "");
    }
    this.setState({
      inputModal: event.target.value,
      carregando: true,
      conta: undefined,
      aviso: "",
    });
    const endpoint = `https://www.instagram.com/${value}/?__a=1`;

    if (value !== "") {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fetch(endpoint)
          .then((response) => {
            if (response.status === 404) {
              this.setState({
                aviso: "Esse perfil não existe",
                carregando: false,
              });
            } else {
              return response.json();
            }
          })
          .then((data) => {
            if (data !== undefined) {
              if (
                data.graphql.user.business_profile === false ||
                data.graphql.user.is_private
              ) {
                this.setState({
                  carregando: false,
                  aviso:
                    "Esse perfil não é de negócios ou se encontra em modo privado",
                });
              } else {
                this.setState({
                  carregando: false,
                  conta: data,
                });
              }
            }
          });
      }, 850);
    } else {
      this.setState({
        carregando: false,
      });
    }
  };

  handleSubmit(e) {
    this.setState({
      enviarConcorrente: e,
    });
  }

  addConcorrente(e) {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      user_id: data.userData.user_id,
      concorrente_user: this.state.conta.graphql.user.username,
      concorrente_nome: this.state.conta.graphql.user.full_name,
      concorrente_picture: this.state.conta.graphql.user.profile_pic_url,
    };
    this.setState({
      conta: undefined,
      carregando: true,
    });
    PostData("addConcorrente", postData).then((result) => {
      let responseJson = result;
      this.setState({
        aviso: "Perfil adicionado como concorrente",
        carregando: false,
      });
      //this.setState({ data: responseJson.feedData });
    });
  }

  render() {
    return (
      <div>
        <h3>Escreva o nome do perfil que você quer adicionar</h3>
        <input
          type="text"
          placeholder="Digite o perfil aqui"
          onChange={this.onInputChange}
          name="name"
          className="w-100 mt-3"
          value={this.state.inputModal}
        ></input>
        <div className="modal__concorrente">
          {this.state.carregando && <div>carregando</div>}
          {this.state.aviso}
          {this.state.conta !== undefined && (
            <div className="modal__perfil">
              <div className="modal__dados">
                <div className="modal__foto mr-2">
                  <img
                    src={this.state.conta.graphql.user.profile_pic_url}
                    alt="Perfil foto"
                  />
                </div>
                <div className="modal__info">
                  <h6>@{this.state.conta.graphql.user.username}</h6>
                  <p>{this.state.conta.graphql.user.biography}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => this.addConcorrente(e)}
                className="btn btn-primary w-100"
              >
                Adicionar esse perfil
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

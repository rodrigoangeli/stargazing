import React, { Component } from "react";
import { PostData } from "../../Utils/PostData";
import { Redirect, Link, Route } from "react-router-dom";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      redirectToReferrer: false,
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (
      this.state.username &&
      this.state.password &&
      this.state.email &&
      this.state.name
    ) {
      PostData("signup", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else alert(result.error);
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="container h-100-w-footer" id="sBody">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-5">
            <div className="main-card card">
              <div className="card-header text-center">
                <h4 className="w-100">Cadastro</h4>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="mb-2 form-control-lg form-control"
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Seu email"
                  className="mb-2 form-control-lg form-control"
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Usuário"
                  className="mb-2 form-control-lg form-control"
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="mb-2 form-control-lg form-control"
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  className="mb-2 mt-4 mr-2 btn btn-primary btn-lg btn-block"
                  value="Cadastrar"
                  onClick={this.signup}
                />

                <a
                  href="/login"
                  className="mb-2 mr-2 btn btn-link btn-lg btn-block"
                >
                  Já possui uma conta? Clique aqui
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cadastro;

/* eslint-disable */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../Utils/PostData";
import Logo from "../../Components/Icons/logo";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
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
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/Main/Dashboard"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/Main/Dashboard"} />;
    }
    const { username, password } = this.state;
    const isEnabled = username.length > 0 && password.length > 0;

    return (
      <div className="login w-100">
        <div className="painel">
          <div className="login__info">
            <Logo fill1="#0a1032" fill2="#f8d57e" />
            <h1>Bem-vindo à sua plataforma</h1>
          </div>
          <div className="login__form">
            <h2>Faça seu login</h2>
            <div className="input-float">
              <label>Usuário</label>
              <input
                placeholder="Digite seu usuário"
                type="text"
                name="username"
                className={!isEnabled ? "active" : ""}
                onChange={this.onChange}
              />
            </div>

            <div className="input-float">
              <label>Senha</label>
              <input
                placeholder="Digite sua senha"
                type="password"
                name="password"
                className="w-100"
                onChange={this.onChange}
              />
            </div>

            <input
              type="submit"
              className="mt-3 w-100 btn btn-primary btn-lg btn-block"
              value="Entrar"
              onClick={this.login}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

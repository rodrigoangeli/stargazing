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
      return <Redirect to={"/Main"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/Main"} />;
    }
    return (
      <div className="login w-100">
        <div className="login__box">
          <Logo fill1="#0a1032" fill2="#f8d57e" />
          <h2 className="titulo">Login</h2>
          <div className="login__form">
            <label>Usuário</label>
            <input
              placeholder="Digite seu usuário"
              type="text"
              name="username"
              className="mb-3 form-control-lg form-control w-100"
              onChange={this.onChange}
            />
            <label>Senha</label>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password"
              className="mb-3 form-control-lg form-control w-100"
              onChange={this.onChange}
            />
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

/* eslint-disable */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../Utils/PostData";

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
      return <Redirect to={"/home"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="login h-100 w-100">
        <div className="row justify-content-center align-items-center">
          <div className="box">
            <div className="box__titulo">
              <h2>Login</h2>
            </div>
            <div className="box__conteudo">
              <input
                placeholder="Usuário"
                type="text"
                name="username"
                className="mb-4 form-control-lg form-control w-100"
                onChange={this.onChange}
              />
              <input
                placeholder="Senha"
                type="password"
                name="password"
                className="mb-4 form-control-lg form-control w-100"
                onChange={this.onChange}
              />
              <input
                type="submit"
                className="mt-2 w-100 btn btn-primary btn-lg btn-block"
                value="Entrar"
                onClick={this.login}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

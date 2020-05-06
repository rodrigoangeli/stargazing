import React, { Component } from "react";
import Logo from "../Icons/logo";
import Logo2 from "../Icons/logo2";
import { Link } from "react-router-dom";
import { menuItems } from "../../Utils/nav";
import Sair from "../Icons/sair";
import Configuracoes from "../Icons/configuracoes";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: JSON.parse(localStorage.getItem("menuEscolhido")),
      menuMinimizado: false,
    };
    this.logout = this.logout.bind(this);
    this.escolherMenu = this.escolherMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  escolherMenu(i, e) {
    console.log(localStorage.getItem("menuEscolhido"));
    localStorage.setItem("menuEscolhido", i);
    this.setState({
      activeIndex: i,
    });
  }

  toggleMenu() {
    this.setState({
      menuMinimizado: !this.state.menuMinimizado,
    });
  }

  render() {
    return (
      <div className={this.state.menuMinimizado ? "Sidebar active" : "Sidebar"}>
        <div className="Sidebar__menu" onClick={this.toggleMenu}></div>

        <Link className="logo" to="/Main/Dashboard">
          <Logo2 fill="#f8d57e" />
        </Link>

        <div className="sidebar__wrapper sidebar__mainNav">
          <ul className="nav">
            {menuItems.map((menuItem, i) => {
              var IconeNav = menuItem.icon;
              if (menuItem.subMenus !== undefined) {
                return (
                  <li
                    key={i}
                    onClick={(e) => this.escolherMenu(i, e)}
                    className={this.state.activeIndex === i ? "active" : ""}
                  >
                    <Link className="nav__titulo" to={"/Main/" + menuItem.name}>
                      <IconeNav />
                      <span>{menuItem.name}</span>
                    </Link>
                    <ul key={i}>
                      {menuItem.subMenus.map((subMenu, i) => {
                        return (
                          <li key={i}>
                            <Link
                              to={"/Main/" + menuItem.name + "/" + subMenu.name}
                            >
                              {subMenu.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li
                    key={i}
                    onClick={(e) => this.setState({ activeIndex: i })}
                    className={this.state.activeIndex === i ? "active" : ""}
                  >
                    <Link className="nav__titulo" to={"/Main/" + menuItem.name}>
                      <IconeNav />
                      <span>{menuItem.name}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="sidebar__wrapper mt-auto">
          <ul className="nav">
            <li>
              <a className="nav__titulo" href="/Main/Conversa">
                <Configuracoes />
                <span>Configurações</span>
              </a>
            </li>
            <li>
              <a href="/login/" className="nav__titulo" onClick={this.logout}>
                <Sair />
                <span>Sair</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;

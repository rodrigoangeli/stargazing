import React, { Component } from "react";
import Dashboard from "../Icons/posts";
import Analytics from "../Icons/hashtags";
import Publicações from "../Icons/performance";
import Conversa from "../Icons/comparacao";
import Escutando from "../Icons/comparacao";
import Logo from "../Icons/logo";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    var menuItems = [
      {
        name: "Dashboard",
        icone: Dashboard,
      },
      {
        name: "Analytics",
        icone: Analytics,
        subMenus: [
          { name: "Geral" },
          { name: "Engajamento" },
          { name: "Público" },
          { name: "Alcance" },
          { name: "Stories" },
        ],
      },
      {
        name: "Publicações",
        icone: Publicações,
        subMenus: [{ name: "asd" }, { name: "das" }],
      },
      {
        name: "Conversa",
        icone: Conversa,
        subMenus: [{ name: "asd" }, { name: "das" }],
      },
      {
        name: "Escutando",
        icone: Escutando,
        subMenus: [{ name: "asd" }, { name: "das" }],
      },
    ];

    return (
      <div className="Sidebar">
        <Link to="/Main/Dashboard">
          <Logo class="logo" fill1="#0a1032" fill2="#f8d57e" />
        </Link>

        <div className="sidebar__wrapper">
          <ul className="nav">
            {menuItems.map((menuItem, i) => {
              if (menuItem.subMenus !== undefined) {
                return (
                  <li
                    key={i}
                    onClick={(e) => this.setState({ activeIndex: i })}
                    className={this.state.activeIndex === i ? "active" : ""}
                  >
                    <Link className="nav__titulo" to={"/Main/" + menuItem.name}>
                      {React.createElement(menuItem.icone, { key: i })}
                      <span>{menuItem.name}</span>
                    </Link>
                    <ul key={i}>
                      {menuItem.subMenus.map(function (subMenu, i) {
                        return (
                          <li key={i}>
                            <Link to="/">{subMenu.name}</Link>
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
                      {React.createElement(menuItem.icone, { key: i })}
                      <span>{menuItem.name}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>

          <button
            onClick={this.logout}
            className="border-0 ml-3 btn-transition btn btn-outline-danger"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;

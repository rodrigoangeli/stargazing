import React, { Component } from "react";
import DadosGerais from "../Icons/dadosGerais";
import Posts from "../Icons/posts";
import Hashtags from "../Icons/hashtags";
import Performance from "../Icons/performance";
import Comparacao from "../Icons/comparacao";
import Logo from "../Icons/logo";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Sidebar">
        <Logo class="logo" fill1="#0a1032" fill2="#f8d57e" />
        <div className="sidebar__wrapper">
          <ul>
            <li>
              <DadosGerais fill="white" />
              {/* <span>Dados</span> */}
            </li>
            <li className="active">
              <Posts fill="white" />
              {/*  <span>Posts</span> */}
            </li>
            <li>
              <Hashtags fill="white" />
              {/*  <span>Hashtags</span> */}
            </li>
            <li>
              <Performance fill="white" />
              {/* <span>Performance</span> */}
            </li>
            <li>
              <Comparacao fill="white" />
              {/* <span>Comparar</span> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;

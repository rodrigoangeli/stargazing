import React from "react";
import Likes from "../../Icons/likes";
import Comentarios from "../../Icons/comentarios";
import Engajamento from "../../Icons/engajamento";
import Play from "../../Icons/play";

const Posts1 = (props) => (
  <div className="post__box">
    <div
      className="post__foto"
      style={{ backgroundImage: "url(" + props.img + ")" }}
    ></div>
    <div className="post__info">
      {props.titulo && (
        <div className="post__nome">
          {props.titulo}
          <span>50 dias atrás</span>
        </div>
      )}
      {props.desc && <div className="post__descricao">{props.desc}</div>}
      <div className="post__dados">
        {props.playsPost > 0 && (
          <span>
            <Play fill="#6e6f77" />
            {props.playsPost}
          </span>
        )}
        <span>
          <Likes fill="#6e6f77" />
          {props.likesPost}
        </span>
        <span>
          <Comentarios fill="#6e6f77" />
          {props.comentariosPost}
        </span>
        <span>
          <Engajamento fill="#6e6f77" />
          {props.engajamentoPost}
        </span>
      </div>
    </div>
  </div>
);

export default Posts1;

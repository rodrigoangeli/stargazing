import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: this.props.dados,
    };
  }

  render() {
    let currentTodos = this.props.dados;

    let publicacoes = currentTodos.map((data, index) => (
      <tr key={index}>
        <td>
          <div
            className={
              data.shortcode_media.__typename === "GraphImage"
                ? "tag__post foto"
                : data.shortcode_media.__typename === "GraphVideo"
                ? "tag__post video"
                : "tag__post carrossel"
            }
          >
            {data.shortcode_media.__typename === "GraphImage"
              ? "Foto"
              : data.shortcode_media.__typename === "GraphVideo"
              ? "Video"
              : "Carrossel"}
          </div>
          <span className="tag__data">
            Postado em{" "}
            {new Date(
              data.shortcode_media.taken_at_timestamp * 1000
            ).toLocaleDateString()}{" "}
            (
            {new Date(
              data.shortcode_media.taken_at_timestamp * 1000
            ).toLocaleTimeString()}
            )
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={
              "https://www.instagram.com/p/" + data.shortcode_media.shortcode
            }
          ></a>
          <br />
          {data.shortcode_media.edge_media_to_caption.edges[0].node.text.substring(
            0,
            50
          ) + ".."}
        </td>
        <td>
          <div
            className="img__post"
            style={{
              backgroundImage: `url(` + data.shortcode_media.display_url + `)`,
            }}
          ></div>
        </td>

        {/* <td>
          {(
            ((data.shortcode_media.edge_media_preview_like.count +
              data.shortcode_media.edge_media_preview_comment.count) /
              200) *
            100
          ).toFixed(2) + "%"}
        </td> */}
        <td>{data.shortcode_media.edge_media_preview_like.count}</td>
        <td>{data.shortcode_media.edge_media_preview_comment.count}</td>
      </tr>
    ));
    return (
      <>
        <h1>Publicações</h1>
        <div className="box">
          <table id="tabelaPosts">
            <thead>
              <tr>
                <th>
                  Publicações
                  <span> ({this.props.dados.length} encontradas)</span>{" "}
                </th>
                <th>Thumb</th>
                {/* <th>Eng. %</th> */}
                <th>Likes</th>
                <th>Comentários</th>
              </tr>
            </thead>
            <tbody>{publicacoes}</tbody>
          </table>
        </div>
      </>
    );
  }
}

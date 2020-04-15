import React, { Component } from "react";
import { ascendente } from "../Functions/OrdenarColuna";
import { orderBy } from "lodash";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: this.props.resultado,
      sortAscending: true,
      sortParams: { direction: undefined },
    };
    this.ordenarColuna = this.ordenarColuna.bind(this);
  }

  ordenarColuna(sortKey) {
    const {
      sortParams: { direction },
    } = this.state;
    // Check, what direction now should be
    const sortDirection = direction === "desc" ? "asc" : "desc";
    // Sort dataAtual
    const sortedCollection = orderBy(
      this.props.resultado,
      [sortKey],
      [sortDirection]
    );
    //Update component state with new data
    this.props.setPosts(sortedCollection);
    this.setState({
      sortParams: {
        direction: sortDirection,
      },
    });
  }

  render() {
    let publicacoes = this.props.resultado.map((data, index) => (
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
          {data.shortcode_media.edge_media_to_caption.edges.length > 0
            ? data.shortcode_media.edge_media_to_caption.edges[0].node.text.substring(
                0,
                50
              ) + ".."
            : ""}
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
        <h2>Publicações</h2>
        <div className="box">
          <table id="tabelaPosts">
            <thead>
              <tr>
                <th
                  onClick={() =>
                    this.ordenarColuna("shortcode_media.taken_at_timestamp")
                  }
                >
                  Posts
                  <span> ({this.props.resultado.length} encontrados)</span>{" "}
                </th>
                <th>Thumb</th>
                {/* <th onClick={() => this.ordenarColuna("shortcode_media.taxaEngajamento")}>Eng. %</th> */}
                <th
                  onClick={() =>
                    this.ordenarColuna(
                      "shortcode_media.edge_media_preview_like.count"
                    )
                  }
                >
                  Likes
                </th>
                <th
                  onClick={() =>
                    this.ordenarColuna(
                      "shortcode_media.edge_media_preview_comment.count"
                    )
                  }
                >
                  Comentários
                </th>
              </tr>
            </thead>
            <tbody>{publicacoes}</tbody>
          </table>
          {this.props.resultado.length <= 0 && (
            <ul className="placeholder">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          )}
        </div>
      </>
    );
  }
}

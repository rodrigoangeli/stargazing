import React, { Component } from "react";
import Modal from "../../../Modal";
import AddConcorrente from "../../../Modal/AddConcorrente";
import Modelo1 from "../../../Boxes/modelo_1";
import Modelo2 from "../../../Boxes/modelo_2";
import Grafico1 from "../../../Boxes/grafico_1";
import Grafico2 from "../../../Boxes/grafico_2";
import GraficoBar1 from "../../../Boxes/graficoBar_1";
import Posts1 from "../../../Boxes/posts_1";
import Habitos1 from "../../../Boxes/habitos";
import Publicacoes from "../../../Icons/publicacoes";
import CaretDown from "../../../Icons/caretDown";
import Adicionar from "../../../Icons/adicionar";
import backgroundInfo from "../../../../Assets/img/background_info.png";
import { PostData } from "../../../../Utils/PostData";
import moment from "moment/min/moment-with-locales";
import { orderBy } from "lodash";
import { connect } from "react-redux";
import ordenarColuna from "../../../../Functions/ordenarColuna";

moment.locale("pt-br");
let dateArray = [];
const ordered = {};
class Competidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      con: null,
      dataEspaco: [],
      dataEscolhida: this.props.dataRedux,
      perfisCadastrados: ["verbojuridico"],
    };
    this.child = React.createRef();
  }

  modal = () => {
    this.child.current.toggleModal();
    /*     this.state.con.posts
      .map((a) => a.dataPostagem.data)
      .concat(this.state.dataEspaco)
      .forEach((i) => {
        count[i] = (count[i] || 0) + 1;
      });

    Object.keys(count)
      .sort()
      .forEach((key) => {
        ordered[key] = count[key];
      });
 */
  };

  calcMedia = (n, a) => {
    return (((n - a) / a) * 100).toFixed(2);
  };

  componentDidMount() {
    PostData("getConcorrente", this.state).then((result) => {
      let responseJson = result;
      let novasDatas = responseJson.posts.map((a) => {
        return a.dataPostagem === a.dataPostagem
          ? {
              ...a,
              dataPostagem: {
                dataOriginal: a.dataPostagem,
                data: moment.utc(a.dataPostagem).local().format("DD/MM"),
                hora: moment.utc(a.dataPostagem).local().format("HH:mm"),
                dia: moment.utc(a.dataPostagem).local().format("ddd"),
              },
            }
          : a.dataPostagem;
      });

      this.setState(
        {
          con: {
            ...responseJson,
            posts: novasDatas,
            postsSorteados: responseJson.posts,
          },
        },
        () => {
          this.getDates(
            this.state.con.posts[this.state.con.posts.length - 1].dataPostagem
              .dataOriginal,
            this.state.con.posts[0].dataPostagem.dataOriginal
          );
        }
      );
    });
  }

  getDates(startDate, stopDate) {
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment.utc(currentDate).local().format("DD/MM"));
      currentDate = moment(currentDate).add(1, "days");
    }
    this.setState({ dataEspaco: dateArray });
  }

  diferencaDias(a, b) {
    return moment.utc(a).local().from(moment.utc(b).local());
  }

  render() {
    const { con } = this.state;

    return (
      <main>
        {this.state.perfisCadastrados.length !== 0 ? (
          <>
            <div className="header__botoes">
              <button type="button" className="sm btn-primary">
                Exportar
              </button>
            </div>
            {this.state.dataEscolhida.map((a) => (
              <li key={a.id}>{a.data}</li>
            ))}
            <header>
              <ul className="concorrente__lista">
                {this.state.perfisCadastrados.map((e, i) => (
                  <li key={i} className={i === 0 ? "active" : ""}>
                    @{e}
                  </li>
                ))}
              </ul>
              <div className="concorrente__adicionar" onClick={this.modal}>
                Adicionar perfil <Adicionar />
              </div>
            </header>
          </>
        ) : (
          ""
        )}
        {this.state.perfisCadastrados.length > 0 ? (
          ""
        ) : (
          <div className="row justify-content-center mb-4">
            <div
              className="col-12 box__informacao py-4"
              style={{ backgroundImage: `url(${backgroundInfo})` }}
            >
              <div className="informacao__titulo mb-1">
                Parece que você ainda não adicionou nenhum concorrente
              </div>
              <p className="mb-0 mt-2">
                Assim que o perfil for adicionado iremos recolher os dados em
                torno de 30 minutos a 1 hora.
              </p>
              <button className="btn btn-secondary mt-4" onClick={this.modal}>
                Adicionar concorrente
              </button>
            </div>
          </div>
        )}
        {con ? (
          <>
            <div className="row">
              <div className="col-4">
                <Modelo1
                  fill="off1"
                  num={con.dados[0].publicacoes}
                  desc="Publicações"
                  porcentagem={this.calcMedia(
                    con.dados[0].publicacoes,
                    con.dados[con.dados.length - 1].publicacoes
                  )}
                  icone={<Publicacoes />}
                />
              </div>
              <div className="col-4">
                <Modelo1
                  fill="off2"
                  num={con.dados[0].followers}
                  desc="Seguidores"
                  porcentagem={this.calcMedia(
                    con.dados[0].followers,
                    con.dados[con.dados.length - 1].followers
                  )}
                  icone={<Publicacoes />}
                />
              </div>
              <div className="col-4">
                <Modelo1
                  fill="off3"
                  num={con.dados[0].following}
                  desc="Seguindo"
                  porcentagem={this.calcMedia(
                    con.dados[0].following,
                    con.dados[con.dados.length - 1].following
                  )}
                  icone={<Publicacoes />}
                />
              </div>
            </div>

            <section className="row">
              <div className="col-12">
                <Grafico1
                  gapNumero={40}
                  desc="Seguidores ganhos"
                  ultimos={this.diferencaDias(
                    con.dados[0].dataRecolhida,
                    con.dados[con.dados.length - 1].dataRecolhida
                  )}
                  num={
                    con.dados[0].followers -
                    con.dados[con.dados.length - 1].followers
                  }
                  dados={
                    [
                      54430,
                      54450,
                      54550,
                      54610,
                      54680,
                    ] /* con.dados.map((a) => a.followers) */
                  }
                  labels={
                    [
                      "30/04",
                      "01/05",
                      "02/05",
                      "03/05",
                      "04/05",
                    ] /* con.dados.map((a) =>
                    moment.utc(a.dataRecolhida).local().format("DD/MM" )
                  )*/
                  }
                />
              </div>
            </section>
            <section className="posts">
              <div className="post__titulo">
                <div className="p2"></div>
                Posts que geraram mais
                <span
                  onClick={() => {
                    this.setState((prevState) => ({
                      con: {
                        ...prevState.con,
                        postsSorteados: ordenarColuna(
                          "engage",
                          this.state.con.posts
                        ),
                      },
                    }));
                  }}
                >
                  Engajamento
                </span>
                <span
                  onClick={() => {
                    this.setState((prevState) => ({
                      con: {
                        ...prevState.con,
                        postsSorteados: ordenarColuna(
                          "likes",
                          this.state.con.posts
                        ),
                      },
                    }));
                  }}
                >
                  Likes
                </span>
                <span
                  onClick={() => {
                    this.setState((prevState) => ({
                      con: {
                        ...prevState.con,
                        postsSorteados: ordenarColuna(
                          "comments",
                          this.state.con.posts
                        ),
                      },
                    }));
                  }}
                >
                  Comentários
                </span>
                <span
                  onClick={() => {
                    this.setState((prevState) => ({
                      con: {
                        ...prevState.con,
                        postsSorteados: ordenarColuna(
                          "dataPostagem.dataOriginal",
                          this.state.con.postsSorteados
                        ),
                      },
                    }));
                  }}
                >
                  Data
                </span>
                <CaretDown />
              </div>
              <div className="row">
                <div className="col-4 destaque">
                  <Posts1
                    playsPost={con.postsSorteados[0].plays}
                    likesPost={con.postsSorteados[0].likes}
                    img={con.postsSorteados[0].urlImg}
                    comentariosPost={con.postsSorteados[0].comments}
                    engajamentoPost={con.postsSorteados[0].engage + "%"}
                  />
                </div>
                <div className="col-8">
                  <div className="row">
                    {con.postsSorteados.slice(1, 7).map((data, index) => (
                      <div className="col-4 mb-3" key={index}>
                        <Posts1
                          img={data.urlImg}
                          playsPost="0"
                          likesPost={data.likes}
                          comentariosPost={data.comments}
                          engajamentoPost={data.engage + "%"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="row">
              <div className="col-12">
                <Grafico2
                  gapNumero={2}
                  desc="Histórico de Posts"
                  ultimos={this.diferencaDias(
                    con.posts[0].dataPostagem.dataOriginal,
                    con.posts[con.posts.length - 1].dataPostagem.dataOriginal
                  )}
                  dados={[]}
                  labels={this.state.dataEspaco}
                />
              </div>
            </section>
            <section className="row">
              <div className="col-4">
                <Modelo2
                  fill="off2"
                  num={
                    con.posts.reduce((data, index) => data + index.likes, 0) /
                    con.posts.length
                  }
                  desc="Média de Likes"
                  porcentagem=""
                  icone={<Publicacoes />}
                />
              </div>
              <div className="col-4">
                <Modelo2
                  fill="off3"
                  num={
                    con.posts.reduce(
                      (data, index) => data + index.comments,
                      0
                    ) / con.posts.length
                  }
                  desc="Média de Comentários"
                  porcentagem=""
                  icone={<Publicacoes />}
                />
              </div>
              <div className="col-4">
                <Modelo2
                  fill="off1"
                  num={
                    con.posts.reduce((data, index) => data + index.engage, 0) /
                      con.posts.length +
                    "%"
                  }
                  desc="Média de Engajamento"
                  porcentagem=""
                  icone={<Publicacoes />}
                />
              </div>
            </section>

            <section className="row">
              <div className="col-12">
                <GraficoBar1
                  gapNumero={5}
                  desc="Densidade de Posts"
                  ultimos={this.diferencaDias(
                    con.posts[0].dataPostagem.dataOriginal,
                    con.posts[con.posts.length - 1].dataPostagem.dataOriginal
                  )}
                  dados={[]}
                  labels={[
                    "Domingo",
                    "Segunda",
                    "Terça",
                    "Quarta",
                    "Quinta",
                    "Sexta",
                    "Sábado",
                  ]}
                />
              </div>
            </section>
            <section className="row">
              <div className="col-12">
                <Habitos1
                  desc="Hábitos de postagem"
                  ultimos={this.diferencaDias(
                    con.posts[0].dataPostagem.dataOriginal,
                    con.posts[con.posts.length - 1].dataPostagem.dataOriginal
                  )}
                />
              </div>
            </section>
          </>
        ) : (
          "nao"
        )}
        <Modal ref={this.child}>
          <AddConcorrente />
        </Modal>
      </main>
    );
  }
}

export default connect((state) => ({ dataRedux: state }))(Competidores);

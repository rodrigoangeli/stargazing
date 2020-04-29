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
import backgroundInfo from "../../../../Assets/img/background_info.png";
import jsonTeste from "../../../../Utils/json/verbojuridico2.json";

export default class Competidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      con: jsonTeste,
    };
    this.child = React.createRef();
  }

  modal = () => {
    this.child.current.toggleModal();
  };

  calcMedia = (n, a) => {
    return (((n - a) / a) * 100).toFixed(2);
  };
  /* 
  componentDidMount(){
    PostData("signup", this.state).then((result) => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirectToReferrer: true });
      } else alert(result.error);
    });
  }
 */
  render() {
    return (
      <div className="componenteWrapper">
        <h3 className="titulo">Competidores</h3>
        <div className="row justify-content-center mb-4">
          <div
            className="col-12 box__informacao py-4"
            style={{ backgroundImage: `url(${backgroundInfo})` }}
          >
            <h4 className="mb-1">
              Parece que você ainda não adicionou nenhum concorrente
            </h4>
            <p className="mb-0 mt-2">
              Assim que o perfil for adicionado iremos recolher os dados em
              torno de 30 minutos a 1 hora.
            </p>
            <button className="btn btn-secondary mt-4" onClick={this.modal}>
              Adicionar concorrente
            </button>
          </div>
        </div>
        <section className="row">
          <div className="col-4">
            <Modelo1
              fill="off1"
              num={this.state.con.numberPosts}
              desc="Publicações"
              porcentagem={this.calcMedia(
                this.state.con.numberPosts,
                this.state.con.numberPostsPassado
              )}
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              fill="off2"
              num={this.state.con.numberFollowers}
              desc="Seguidores"
              porcentagem={this.calcMedia(
                this.state.con.numberFollowers,
                this.state.con.numberFollowersPassado
              )}
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              fill="off3"
              num={this.state.con.numberFollowing}
              desc="Seguindo"
              porcentagem={this.calcMedia(
                this.state.con.numberFollowing,
                this.state.con.numberFollowingPassado
              )}
              icone={<Publicacoes />}
            />
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <Grafico1
              gapNumero={15}
              desc="Seguidores ganhos"
              num={this.state.con.numberDifFollowers}
              dados={this.state.con.followersEvoluion.map((a) => a.followers)}
              labels={this.state.con.followersEvoluion.map((a) => a.data)}
            />
          </div>
        </section>
        <section className="posts">
          <div className="post__titulo">
            <h4>
              Posts que geraram mais <span>Engajamento</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-4">
              <Posts1
                titulo={"@" + this.state.con.alias}
                playsPost="1.2k"
                likesPost={this.state.con.posts[0].numberLikes}
                comentariosPost={this.state.con.posts[0].numberComments}
                engajamentoPost={
                  this.state.con.posts[0].numberEngagement.toFixed(2) + "%"
                }
                desc="Prova com data marcada e o inicio da sua preparação também! É dia 23/04 que inicia o seu curso 100% online de Delegado de Polícia Civil do Estado do Paraná."
              />
            </div>
            <div className="col-8">
              <div className="row">
                {this.state.con.posts.slice(1, 7).map((data, index) => (
                  <div className="col-4 mb-3" key={index}>
                    <Posts1
                      playsPost="0"
                      likesPost={data.numberLikes}
                      comentariosPost={data.numberComments}
                      engajamentoPost={data.numberEngagement.toFixed(2) + "%"}
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
              desc="Histórico de Posts (Últimos 30 dias)"
              dados={this.state.con.postsEvoluion.map((a) => a.posts)}
              labels={this.state.con.postsEvoluion.map((a) => a.data)}
            />
          </div>
        </section>
        <section className="row">
          <div className="col-4">
            <Modelo2
              fill="off2"
              num={
                this.state.con.posts.reduce(
                  (data, index) => data + index.numberLikes,
                  0
                ) / this.state.con.posts.length
              }
              desc="Média de Likes"
              porcentagem="+2%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo2
              fill="off3"
              num={
                this.state.con.posts.reduce(
                  (data, index) => data + index.numberComments,
                  0
                ) / this.state.con.posts.length
              }
              desc="Média de Comentários"
              porcentagem="+20%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo2
              fill="off1"
              num={
                (
                  this.state.con.posts.reduce(
                    (data, index) => data + index.numberEngagement,
                    0
                  ) / this.state.con.posts.length
                ).toFixed(2) + "%"
              }
              desc="Média de Engajamento"
              porcentagem="-5%"
              icone={<Publicacoes />}
            />
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <GraficoBar1
              desc="Densidade de Posts"
              dados={[65, 59, 80, 81, 56, 55, 40]}
              labels={[
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
                "Domingo",
              ]}
            />
          </div>
        </section>
        <section className="row">
          <div className="col-12">
            <Habitos1 desc="Hábitos de postagem (Últimos 30 dias)" />
          </div>
        </section>
        <Modal ref={this.child}>
          <AddConcorrente />
        </Modal>
      </div>
    );
  }
}

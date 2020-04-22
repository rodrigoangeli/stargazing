import React, { Component } from "react";
import Modal from "../../../Modal";
import AddConcorrente from "../../../Modal/AddConcorrente";
import Modelo1 from "../../../Boxes/modelo_1";
import Modelo2 from "../../../Boxes/modelo_2";
import Grafico1 from "../../../Boxes/grafico_1";
import Grafico2 from "../../../Boxes/grafico_2";
import GraficoBar1 from "../../../Boxes/graficoBar_1";
import Posts1 from "../../../Boxes/posts_1";
import Publicacoes from "../../../Icons/publicacoes";

export default class Competidores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.child = React.createRef();
  }

  modal = () => {
    this.child.current.toggleModal();
  };

  render() {
    return (
      <div className="componenteWrapper">
        <h3 className="titulo">Competidores</h3>
        <div className="row justify-content-center mb-4">
          <div className="col-6 box__informacao px-5 py-4">
            <h4 className="mb-1">
              Parece que você ainda não adicionou nenhum concorrente
            </h4>
            <p className="mb-0 mt-2">
              Assim que o perfil for adicionado iremos recolher os dados em
              torno de 30 minutos a 1 hora.
            </p>
            <button className="btn btn-primary mt-3" onClick={this.modal}>
              Adicionar concorrente
            </button>
          </div>
        </div>
        <section className="row">
          <div className="col-4">
            <Modelo1
              num="3,198"
              desc="Publicações"
              porcentagem="+2%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              num="53.7k"
              desc="Seguidores"
              porcentagem="+20%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo1
              num="1,131"
              desc="Seguindo"
              porcentagem="-5%"
              icone={<Publicacoes />}
            />
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <Grafico1 desc="Seguidores ganhos" num="1500" porcentagem="+20%" />
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
                titulo="@verbojuridico"
                playsPost="1.2k"
                likesPost="200"
                comentariosPost="320"
                engajamentoPost="15%"
                desc="Prova com data marcada e o inicio da sua preparação também! É dia 23/04 que inicia o seu curso 100% online de Delegado de Polícia Civil do Estado do Paraná."
              />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-4 mb-3">
                  <Posts1
                    playsPost="1.2k"
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
                <div className="col-4 mb-3">
                  <Posts1
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
                <div className="col-4 mb-3">
                  <Posts1
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
                <div className="col-4">
                  <Posts1
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
                <div className="col-4">
                  <Posts1
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
                <div className="col-4">
                  <Posts1
                    likesPost="200"
                    comentariosPost="320"
                    engajamentoPost="15%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-12">
            <Grafico2 desc="Histórico de Posts (Últimos 30 dias)" />
          </div>
        </section>

        <section className="row">
          <div className="col-4">
            <Modelo2
              num="3,198"
              desc="Média de Likes"
              porcentagem="+2%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo2
              num="53.7k"
              desc="Média de Comentários"
              porcentagem="+20%"
              icone={<Publicacoes />}
            />
          </div>
          <div className="col-4">
            <Modelo2
              num="3.5%"
              desc="Média de Engajamento"
              porcentagem="-5%"
              icone={<Publicacoes />}
            />
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <GraficoBar1 desc="Densidade de Posts (Últimos 30 dias)" />
          </div>
        </section>

        <Modal ref={this.child}>
          <AddConcorrente />
        </Modal>
      </div>
    );
  }
}

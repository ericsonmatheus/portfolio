import React from "react";
import "./Knowledge.css";

import knowledge from "../../assets/knowledge.png";

function Knowledge() {
  return (
    <section className="knowledge-session" id="knowledge">
      <div className="header-session">
        <h1>Conhecimentos</h1>
      </div>
      <div className="knowledges">
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-js"></i>
            <h3>Javascript</h3>
          </div>
          <div className="knowledge-text">
            <p>Comecei a estudar esta linguagem em meados de 2021 e me identifiquei, desde então tenho focado os estudos
              {/* nesta linguagem. Esta não foi a primeira linguagem que aprendi, porém tem sido a que mais utilizo. */}</p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-php"></i>
            <h3>PHP</h3>
          </div>
          <div className="knowledge-text">
            <p>Tenho conhecimentos nesta linguagem e já realizei projeto freelancer utilizando desta linguagem{/*juntamente com o framework Laravel.*/}
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-java"></i>
            <h3>Java</h3>
          </div>
          <div className="knowledge-text">
            <p>Comecei a estudar Java durante a faculdade, realizei diversas atividades utilizando desta linguagem{/* , e esta foi um dos pilares para eu ingressar e nesta área. */}
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
          </div>
          <div className="knowledge-text">
            <p>Atualmente tenho utilizando bastante desta ferramenta em meu local de trabalho{/*, com equipes maiores e projetos maiores tenho adquirido diversas habilidades, principalmente em versionamento de código. */}
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-react"></i>
            <h3>React</h3>
          </div>
          <div className="knowledge-text">
            <p>Comteporaneamente ao inicio dos meus estudos em javascript, comecei a utilizar deste framework{/*, onde tive a oportunidade de aprimorar minhas habilidades na criação de frontend. Assim como este portfólio.*/}
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fab fa-laravel"></i>
            <h3>Laravel</h3>
          </div>
          <div className="knowledge-text">
            <p>Desenvolvi alguns projetos utilizando deste framework, em especial o meu primeiro projeto freelancer. {/*Tenho conhecimento e facilidade na utilização deste.*/}
            </p>
          </div>
        </div>
        <div className="knowledge-img-wrapper">
          <img src={knowledge} alt="Conhecimentos"></img>
        </div>
      </div>
    </section>
  )
}

export default Knowledge;
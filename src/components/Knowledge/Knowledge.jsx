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
            <i className="fab fa-python"></i>
            <h3>Python</h3>
          </div>
          <div className="knowledge-text">
            <p>Ampla experiência na linguagem Python, com cerca de 2 anos de prática. Concentro-me no desenvolvimento e aprimoramento 
              de automações e pipelines existentes em ferramentas como Airflow ou Kedro.</p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i class="fas fa-database"></i>
            <h3>PostgreSQL</h3>
          </div>
          <div className="knowledge-text">
            <p>Conhecimentos aplicados diáriamente em SQL, especificamente com PostgreSQL. Realização de análise de dados consumidos via query no banco de dados.
              Além de criação de views com a utilização da ferramenta DBT.
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i class="fas fa-chart-pie"></i>
            <h3>Power BI</h3>
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
            <i class="fal fa-fan"></i>
            <h3>Airflow</h3>
          </div>
          <div className="knowledge-text">
            <p>Comteporaneamente ao inicio dos meus estudos em javascript, comecei a utilizar deste framework{/*, onde tive a oportunidade de aprimorar minhas habilidades na criação de frontend. Assim como este portfólio.*/}
            </p>
          </div>
        </div>
        <div className="knowledge">
          <div className="knowledge-header">
            <i className="fa-solid fa-diamond"></i>
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
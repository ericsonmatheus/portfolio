import React, { useState } from "react";
import "./index.css";
import conhecimento from "../assets/conhecimentos.png";
import projeto from "../assets/proj.jpg";
import netflix from "../assets/printNetflix.png";
import reserva from "../assets/printReserva.png";
import banner_img from "../assets/banner-img.jpg";

function Index() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (currentMenu) => {
    currentMenu ? setShowMenu(false) : setShowMenu(true)
  }

  const handleExternUrl = (url) => {
    window.open(url)
  }
  return (
    <div className={`container ${showMenu ? 'show-menu' : ''}`}>
      <div className="hamburguer" onClick={e => handleShowMenu(showMenu)}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
        <span>Fechar</span>
      </div>
      <header id="home">
        <div className="img-wrapper">
          <img src={banner_img} alt="Banner Principal"></img>
        </div>
        <div className="banner">
          <h1>Web Developer <br />Fullstack</h1>
          <p>Ericson Matheus</p>
          <p style={{fontSize: 24}}><strong>Sou desenvolvedor web fullstack e sou formado pela Estácio<br/>
          Sou apaixonado por resolver problemas e aprender. Sempre aberto<br/>
          a novos desafios e pronto para enfrentar mudanças.</strong></p>
        </div>
      </header>
      <aside className="sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item"><a href="#home" className="menu-link">Home</a></li>
            <li className="menu-item"><a href="#conhecimento" className="menu-link">Conhecimento</a></li>
            <li className="menu-item"><a href="#projeto" className="menu-link">Projetos</a></li>
            <li className="menu-item"><a href="#contato" className="menu-link">Contato</a></li>
         </ul>
        </nav>
        <div className="social-media">
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-github"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
        </div>
      </aside>
      <section className="sessao-conhecimentos" id="conhecimento">
        <div className="sessao-header">
          <h1>Conhecimentos</h1>
        </div>
        <div className="conhecimentos">
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-js"></i>
              <h3>Javascript</h3>
            </div>
            <div className="conhecimento-text">
              <p>Comecei a estudar esta linguagem em meados de 2021 e me identifiquei, desde então tenho focado os estudos 
                nesta linguagem. Esta não foi a primeira linguagem que aprendi, porém tem sido a que mais utilizo.</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-php"></i>
              <h3>PHP</h3>
            </div>
            <div className="conhecimento-text">
              <p>Tenho conhecimentos nesta linguagem e já realizei projeto freelancer utilizando desta linguagem juntamente
                com o framework Laravel.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-java"></i>
              <h3>Java</h3>
            </div>
            <div className="conhecimento-text">
              <p>Comecei a estudar Java durante a faculdade, realizei diversas atividades utilizando desta linguagem, e esta foi
                um dos pilares para eu ingressar e nesta área.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-github"></i>
              <h3>GitHub</h3>
            </div>
            <div className="conhecimento-text">
              <p>Atualmente tenho utilizando bastante desta ferramenta em meu local de trabalho, com equipes maiores e projetos maiores
                tenho adquirido diversas habilidades, principalmente em versionamento de código.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-react"></i>
              <h3>React</h3>
            </div>
            <div className="conhecimento-text">
              <p>Comteporaneamente ao inicio dos meus estudos em javascript, comecei a utilizar deste framework, onde tive a oportunidade
                de aprimorar minhas habilidades na criação de frontend. Assim como este portfólio.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-laravel"></i>
              <h3>Laravel</h3>
            </div>
            <div className="conhecimento-text">
              <p>Desenvolvi alguns projetos utilizando deste framework, em especial o meu primeiro projeto freelancer. Tenho conhecimento
                e facilidade na utilização deste.
              </p>
            </div>
          </div>
          <div className="conhecimento-img-wrapper">
            <img src={conhecimento} alt="imagem conhecimento"></img>
          </div>
        </div>
      </section>
      <section className="sessao-projetos" id="projeto">
        <div className="sessao-header">
          <h1>Projetos</h1>
        </div>
        <div className="projetos">
          <div className="card">
            <div className="card-img-wrapper"><img src={netflix} alt="Clone Netflix" /></div>
            <div className="card-info">
              <h2>Clone Netflix</h2>
              <h3>Javascript - React</h3>
              <p>Clone da netflix criado utilizando React Js</p>
              <button className="btn" onClick={e => handleExternUrl("https://clone-netflix-portfolio.netlify.app/")}>Acessar</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper"><img src={reserva} alt="Reservas" /></div>
            <div className="card-info">
              <h2>Reservas</h2>
              <h3>Javascript - React</h3>
              <p>Projeto freelancer de reserva de máquinas de lavar e secadoras. <br/>Em desenvolvimento</p>
              <button className="btn" onClick={e => handleExternUrl("https://sistema-reservas.netlify.app/")}>Acessar</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper"><img src={projeto} alt="Projeto" /></div>
            <div className="card-info">
              <h2>Casa Bela</h2>
              <h3>HTML</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. A ab vitae quasi nostrum
                exercitationem, esse laboriosam</p>
              <button className="btn">Acessar</button>
            </div>
          </div>
        </div>
      </section>
      <section class="sessao-contato" id="contato">
        <div class="contato-wrapper">
          <div class="contato-left"></div>
          <div class="contato-right">
            <h1>Contato</h1>
            <form>
              <div class="input-group">
                <input type="text" class="field" id="nome" />
                <label for="nome" class="field-label">Nome</label>
              </div>
              <div class="input-group">
                <input type="text" class="field" id="email" />
                <label for="email" class="field-label">E-mail</label>
              </div>
              <div class="input-group">
                <textarea class="field" id="mensagem"></textarea>
                <label for="mensagem" class="field-label">Mensagem</label>
              </div>
              <button class="btn btn-submit" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-content">
          <p>Copyright &copy; 2020, ETECIA DS - Todos Direitos reservados</p>
          <div class="social-list">
            <ul>
              <li><a href="/"><i class="fab fa-facebook"></i></a></li>
              <li><a href="/"><i class="fab fa-github"></i></a></li>
              <li><a href="/"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
      <a href="#home" id="link-topo">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default Index;
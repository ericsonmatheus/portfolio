import React, { useState } from "react";
import "./index.css";
import conhecimento from "../assets/conhecimentos.png";
import projeto from "../assets/proj.jpg";
import banner_img from "../assets/banner-img.jpg";

function Index() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (currentMenu) => {
    currentMenu ? setShowMenu(false) : setShowMenu(true)
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
          <button>Saiba mais</button>
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
              <i className="fab fa-html5"></i>
              <h3>HTML</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex veritatis quo esse non quae quidem.
                Labore quis maxime, tempore, porro adipisci nostrum tempora laborum, dolorem vero alias maiores enim!</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-css3-alt"></i>
              <h3>CSS</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex veritatis quo esse non quae quidem.
                Labore quis maxime, tempore, porro adipisci nostrum tempora laborum, dolorem vero alias maiores enim!</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fas fa-pencil-alt"></i>
              <h3>Design</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex veritatis quo esse non quae quidem</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-js"></i>
              <h3>Javascript</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex veritatis quo esse non quae enim!</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-bootstrap"></i>
              <h3>Bootstrap</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex veritatis quo esse non quae quidem.
                Labore quis maxime, tempore, porro adipisci nostrum tempora laborum, dolorem vero alias maiores enim!</p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-github"></i>
              <h3>Github</h3>
            </div>
            <div className="conhecimento-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiorum, dolorem vero alias maiores enim!</p>
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
            <div className="card-img-wrapper"><img src={projeto} alt="Projeto1" /></div>
            <div className="card-info">
              <h2>ToDo List</h2>
              <h3>Javascript</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. A ab vitae quasi nostrum
                exercitationem, esse laboriosam</p>
              <button className="btn">Saiba mais</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper"><img src={projeto} alt="Projeto1" /></div>
            <div className="card-info">
              <h2>Maratona</h2>
              <h3>HTML, CSS</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. A ab vitae quasi nostrum
                exercitationem, esse laboriosam</p>
              <button className="btn">Saiba mais</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper"><img src={projeto} alt="Projeto1" /></div>
            <div className="card-info">
              <h2>Casa Bela</h2>
              <h3>HTML</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. A ab vitae quasi nostrum
                exercitationem, esse laboriosam</p>
              <button className="btn">Saiba mais</button>
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
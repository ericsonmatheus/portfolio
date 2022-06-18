import React, { useState } from "react";
import "./index.css";

import Home from "./Home/Home"
import Knowledge from "./Knowledge/Knowledge";
import Project from "./Project/Project"
import Contact from "./Contact/Contact";

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

      < Home />

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

      < Knowledge />

      < Project />

      < Contact />

      <footer>
        <div class="footer-content">
          <p>Copyright &copy; 2020, ETECIA DS - Todos Direitos reservados</p>
          <div class="social-list">
            <ul>
              <li><a href="https://www.linkedin.com/in/ericson-matheus/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com/ericsonmatheus" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
              <li><a href="https://twitter.com/manosony21" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
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
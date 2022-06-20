import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
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
        <a href="https://www.linkedin.com/in/ericson-matheus/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ericsonmatheus"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/manosony21"><i className="fab fa-twitter"></i></a>
      </div>
    </aside>
  )
}

export default Sidebar;
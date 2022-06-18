import React from "react";
import "./Project.css";

import project from "../../assets/project.jpg";
import netflix from "../../assets/netflix.png";
import reserve from "../../assets/reserve.png";

function Project() {

  const handleExternUrl = (url) => {
    window.open(url)
  }

  return (
    <section className="project-session" id="project">
      <div className="header-session">
        <h1>Projetos</h1>
      </div>
      <div className="projects">
        <div className="card">
          <div className="card-img-wrapper"><img src={netflix} alt="Clone Netflix" /></div>
          <div className="card-info">
            <h2>Clone Netflix</h2>
            <h3>Javascript - React</h3>
            <p>Clone da netflix criado utilizando React Js</p>
            <button className="btn-project" onClick={e => handleExternUrl("https://clone-netflix-portfolio.netlify.app/")}>Acessar</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img-wrapper"><img src={reserve} alt="Reservas" /></div>
          <div className="card-info">
            <h2>Reservas</h2>
            <h3>Javascript - React</h3>
            <p>Projeto freelancer de reserva de máquinas de lavar e secadoras. <br />Em desenvolvimento</p>
            <button className="btn-project" onClick={e => handleExternUrl("https://sistema-reservas.netlify.app/")}>Acessar</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img-wrapper"><img src={project} alt="Projeto" /></div>
          <div className="card-info">
            <h2>Casa Bela</h2>
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. A ab vitae quasi nostrum
              exercitationem, esse laboriosam</p>
            <button className="btn-project">Acessar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
import React from "react";
import "./Home.css";
import banner from "../../assets/banner-img.jpg";

function Home() {
  return (
    <header id="home">
      <div className="img-wrapper">
        <img src={banner} alt="Banner Principal"></img>
      </div>
      <div className="banner">
        <h1>Data Analytics<br /><small>Data Engineer</small></h1>
        <p>Ericson Matheus</p>
        <p style={{ fontSize: 22 }}><strong>Analista de Dados com experiências em Engenharia de Dados.<br />
          Atualmente atuando como analista de dados na VLGI Investimentos,<br />
          aplicando melhorias com automações e criação de Dashboards para<br />
          apresentação de metas e resultados mensais.</strong></p>
      </div>
    </header>
  )
}


export default Home;
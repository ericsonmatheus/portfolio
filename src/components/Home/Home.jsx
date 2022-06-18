import React from "react";
import "./Home.css";
import banner_img from "../../assets/banner-img.jpg";

function Home() {
    return (
        <header id="home">
            <div className="img-wrapper">
                <img src={banner_img} alt="Banner Principal"></img>
            </div>
            <div className="banner">
                <h1>Web Developer <br />Fullstack</h1>
                <p>Ericson Matheus</p>
                <p style={{ fontSize: 24 }}><strong>Sou desenvolvedor web fullstack e sou formado pela Estácio<br />
                    Sou apaixonado por resolver problemas e aprender. Sempre aberto<br />
                    a novos desafios e pronto para enfrentar mudanças.</strong></p>
            </div>
        </header>
    )
}


export default Home;
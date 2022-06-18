import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
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
      <a href="#home" id="link-top">
        <i class="fas fa-arrow-up"></i>
      </a>
    </React.Fragment>
  )
}

export default Footer;
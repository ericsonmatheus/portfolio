import React from "react";
import "./Contact.css";

function Contact() {
  return (
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
  )
}

export default Contact;
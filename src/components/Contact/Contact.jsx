import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section class="contact-session" id="contact">
      <div class="contact-wrapper">
        <div class="contact-left"></div>
        <div class="contact-right">
          <h1>Contato</h1>
          <form>
            <div class="input-group">
              <input type="text" class="field" id="name" />
              <label for="name" class="field-label">Nome</label>
            </div>
            <div class="input-group">
              <input type="text" class="field" id="email" />
              <label for="email" class="field-label">E-mail</label>
            </div>
            <div class="input-group">
              <textarea class="field" id="message"></textarea>
              <label for="message" class="field-label">Mensagem</label>
            </div>
            <button class="btn-contact" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
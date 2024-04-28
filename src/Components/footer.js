import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Woman Space</h2>
          <p className="footer-description">
          Woman Space é uma plataforma digital que visa dar destaque à arte feminina, proporcionando um espaço para mulheres artistas exibirem, promoverem e discutirem suas obras. Nossa comunidade é um lugar de apoio mútuo, onde artistas podem compartilhar suas experiências, colaborar em projetos e inspirar umas às outras!
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Links Rápidos</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/loja">Loja</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/comunidade">Comunidade</a></li>
            <li><a href="/suporte">Suporte</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Redes Sociais</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Woman Space. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import './Chats.scss';
import jogaLogo from './assets_Chats/JOGA_LOGO.svg';

export const Chats = () => (
  <>
    <header>
      <div className="chats-titulo">
        <div className="text">Chats</div>
        <div className="barra-contactos">
          {/* <input type="text" name="buscacontacto" placeholder="Buscar Contacto"> */}
          <a href="#">
            <i className="bx bx-search-alt" />
          </a>
        </div>
      </div>
    </header>
    <div className="sidebargames">
      <div className="logocontainer">
        <div className="logocontainer">
          <a className="navbar-brand" href="#">
            <img src={jogaLogo} alt="Logo Joga" />
          </a>
        </div>
      </div>
      <ul className="nav_list">
        <li>
          <a href="#">
            <i className="bx bx-home-alt" />
            <span className="links-name">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-game" />
            <span className="links-name">Juegos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-group" />
            <span className="links-name">LFGs</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat" />
            <span className="links-name">Chats</span>
          </a>
        </li>
      </ul>
    </div>

    <div className="maindata">
      <div className="Archivados">
        <h4>Archivados</h4>
        {/* <img className="carpeta" src="assets/images/Chats/Archivados.svg"> */}
      </div>
      <div className="chats">
        <ul className="chat1">
          <div className="nickname">
            <h4>Thunderbolt</h4>
          </div>
          <div className="rectangle">
            <div className="Mensaje">
              <p>Te ha invitado a jugar ROCKET LEAGUE.</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf1.svg" alt="perfil1"> */}
        </ul>
        <ul className="chat2">
          <div className="nickname">
            <h4>Pigeoncatcher</h4>
          </div>
          <div className="rectangle2">
            <div className="Mensaje">
              <p>Hola! Qué tal todo?</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf2.svg" alt="perfil2"> */}
        </ul>
        <ul className="chat3">
          <div className="nickname">
            <h4>RadishRush_TAS</h4>
          </div>
          <div className="rectangle3">
            <div className="Mensaje">
              <p>Mira mi última puntuación en Battlefield!</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf3.svg" alt="perfil3"> */}
        </ul>
        <ul className="chat4">
          <div className="nickname">
            <h4>RumpleThump</h4>
          </div>
          <div className="rectangle4">
            <div className="Mensaje">
              <p>Ahora no puedo, me tengo que ir a trabajar.</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf4.svg" alt="perfil4"> */}
        </ul>
        <ul className="chat5">
          <div className="nickname">
            <h4>Explo$$sive</h4>
          </div>
          <div className="rectangle5">
            <div className="Mensaje">
              <p>Te conozco?</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf5.svg" alt="perfil5"> */}
        </ul>
        <ul className="chat6">
          <div className="nickname">
            <h4>Tech-Cluster</h4>
          </div>
          <div className="rectangle6">
            <div className="Mensaje">
              <p>Wow! Me encantó jugar contigo, nos vemos en la próxima.</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf6.svg" alt="perfil6"> */}
        </ul>
        <ul className="chat7">
          <div className="nickname">
            <h4>Hypophrenia015</h4>
          </div>
          <div className="rectangle7">
            <div className="Mensaje">
              <p>Envíame petición de amistad para jugar otra vez!</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf7.svg" alt="perfil7"> */}
        </ul>
        <ul className="chat8">
          <div className="nickname">
            <h4>XxAurilauxX</h4>
          </div>
          <div className="rectangle8">
            <div className="Mensaje">
              <p>Adiós!</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf8.svg" alt="perfil8"> */}
        </ul>
        <ul className="chat9">
          <div className="nickname">
            <h4>Regicide_76</h4>
          </div>
          <div className="rectangle9">
            <div className="Mensaje">
              <p>Por favor, no me envíes mas invitaciones.</p>
            </div>
          </div>
          {/* <img className="perfil" src="assets/images/Chats/Perf9.svg" alt="perfil9"> */}
        </ul>
      </div>
    </div>
  </>
);

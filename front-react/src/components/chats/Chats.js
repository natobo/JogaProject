import React, { Component } from 'react';
import './Chats.scss';
import './TitleChats.scss';
import perfil1 from './assets_Chats/Perf1.svg';
import perfil2 from './assets_Chats/Perf2.svg';
import perfil3 from './assets_Chats/Perf3.svg';
import perfil4 from './assets_Chats/Perf4.svg';
import perfil5 from './assets_Chats/Perf5.svg';
import perfil6 from './assets_Chats/Perf6.svg';
import perfil7 from './assets_Chats/Perf7.svg';
import perfil8 from './assets_Chats/Perf8.svg';
import perfil9 from './assets_Chats/Perf9.svg';
import archivados from './assets_Chats/Archivados.svg';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';

export const Chats = () => (
  <>
    <header>
      <div className="chats-titulo">
        <div className="text">Chats</div>
        <div className="barra-contactos">
          <input
            type="text"
            placeholder="Buscar Chats"
            className="textField"
            name="busqueda"
          />
        </div>
      </div>
    </header>
    <div>
      <Sidenavbar />
    </div>
    <section className="maindata">
      <div className="Archivados">
        <h4>Archivados</h4>
        <a className="carpeta" href="#">
          <img src={archivados} alt="carpeta" />
        </a>
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
          <a className="perfil" href="#">
            <img src={perfil1} alt="perfil1" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil2} alt="pefil2" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil3} alt="perfil3" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil4} alt="perfil4" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil5} alt="perfil5" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil6} alt="perfil6" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil7} alt="perfil7" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil8} alt="perfil8" />
          </a>
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
          <a className="perfil" href="#">
            <img src={perfil9} alt="perfil9" />
          </a>
        </ul>
      </div>
    </section>
    <section className="contenedor-footer">
      {' '}
      <Footer />
    </section>
  </>
);

import React from 'react';
import './Landing.scss';
import 'jquery';
import 'popper.js';
import jogaLogo from './assets/JOGA_LOGO.svg';
import dashboardImg from './assets/dashboard.svg';
import imgGamer from './assets/gamer.svg';
import imgLfg from './assets/imgLfgSvg.svg';
import imgParty from './assets/party.svg';
import imgGtaV from './assets/lfgs/GtaV.svg';
import imgMinecraft from './assets/lfgs/minecraft.svg';
import imgFortnite from './assets/lfgs/fornite.svg';
import imgMario from './assets/lfgs/Mario.svg';
import imgCallOfDuty from './assets/lfgs/CallOfDuty.svg';
import imgLol from './assets/lfgs/Lol.svg';
import imgGears from './assets/lfgs/gears.svg';
import imgForza from './assets/lfgs/forza.svg';
import imgUncharted from './assets/lfgs/uncharted.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ps5Controller from './assets/ps5_controller.svg';
import imgMarciano from './assets/marciano.svg';
import imgCorazon from './assets/corazon.svg';
import imgDiag from './assets/diag.svg';
import imgControl from './assets/control.svg';
import { Footer } from '../footer/Footer';

export const Landing = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light menu shadow fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={jogaLogo} alt="Logo Joga" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Juegos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LFGs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Sobre nosotros
                </a>
              </li>
              <button
                type="button"
                className="rounded-pill btn-rounded"
                data-toggle="modal"
                data-target="#videoModal"
              >
                Log in/Sing up
              </button>
              <button type="button" className="rounded-pill btn-rounded">
                <i className="fas fa-globe" />
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section id="home" className="intro-section">
        <div className="container-fluid container-intro">
          <div className="row align-items-center text-white">
            <div className="col-md-6 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">
                  ¡Conéctate con amigos y encuentra los mejores equipos!
                </span>
                <span className="display-2--description lh-base">
                  En una de las mejores comunidades gamer de latinoamérica
                </span>
              </h1>
              <button type="button" className="rounded-pill btn-rounded">
                ¡Crear una cuenta!
              </button>
            </div>
            <div className="col-md-6 intros text-end">
              <div className="video-box">
                <img
                  src={ps5Controller}
                  alt="control illustration"
                  className="img-fluid"
                  id="img-control"
                />
                <a
                  type="button"
                  role="button"
                  tabIndex={0}
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <span>
                    <i className="fas fa-play-circle" />
                  </span>
                  <span className="border-animation border-animation--border-1" />
                  <span className="border-animation border-animation--border-2" />
                </a>
              </div>
            </div>
            <div className="col-md-6 intros" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L40,96C80,96,160,96,240,80C320,64,400,32,480,48C560,64,640,128,720,128C800,128,880,64,960,74.7C1040,85,1120,171,1200,186.7C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </section>
      <section id="services" className="tab-services">
        <div className="container-fluid">
          <div className="row">
            <h2 className="text-center section-title-black">
              Nuestros servicios
            </h2>
            <ul
              className="nav nav-pills center-pills flexcolumn flex-sm-row"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-lfg-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-lfg"
                  type="button"
                  role="tab"
                  aria-controls="pills-lfg"
                  aria-selected="true"
                >
                  LFGs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-perfilG-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-perfilG"
                  type="button"
                  role="tab"
                  aria-controls="pills-perfilG"
                  aria-selected="false"
                >
                  Perfil Gamer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-dashboard-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-dashboard"
                  type="button"
                  role="tab"
                  aria-controls="pills-dashboard"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-chat-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-chat"
                  type="button"
                  role="tab"
                  aria-controls="pills-chat"
                  aria-selected="false"
                >
                  Chat por voz
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-lfg"
                role="tabpanel"
                aria-labelledby="pills-lfg-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="text-center">¿Qué es un LFG?</h3>
                      <p className="text-center">
                        LFG viene del acrónimo en inglés: “Looking For Group”,
                        son publicaciones que realizan jugadores para crear un
                        grupo y poder compartir una partida grupal.Las
                        publicaciones de LFG se crean seleccionando un juego,
                        una plataforma y múltiples preferencias relacionadas con
                        el juego.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        className="img-fluid"
                        src={imgLfg}
                        alt="Imagen puesto gamer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-perfilG"
                role="tabpanel"
                aria-labelledby="pills-perfilG-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="img-fluid"
                        src={imgGamer}
                        alt="Imagen chica gamer"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-center">Perfil Gamer</h3>
                      <p className="text-center">
                        Crea tu propio perfil personalizado para consolidar tu
                        identidad de juego online. Con una personalización
                        completa desde el color, el avatar, el fondo de
                        pantalla, la biografía y los juegos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-dashboard"
                role="tabpanel"
                aria-labelledby="pills-dashboard-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="text-center">Dashboard</h3>
                      <p className="text-center">
                        Ve a todos tus amigos y sus estados en línea. Mira quién
                        está pasando el rato y únete a su fiesta... ¡o crea tu
                        propia fiesta!
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        className="img-fluid"
                        src={dashboardImg}
                        alt="Imagen dashboard"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-chat"
                role="tabpanel"
                aria-labelledby="pills-chat-tab"
              >
                <div className="container" />
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src={imgParty}
                      alt="Imagen chica gamer"
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-center">
                      Chat de voz dentro de fiesta
                    </h3>
                    <p className="text-center">
                      Crea una fiesta para reunir a todos tus amigos en un chat
                      de voz y comunicarte mientras juegas. Selecciona un juego,
                      invita a tus amigos e incluso bloquea la fiesta. O deja tu
                      fiesta desbloqueada para que más amigos puedan unirse
                      rápidamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lfg" className="lfgs-section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 190">
          <path
            fill="#ffffffff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,117.3C384,85,480,43,576,42.7C672,43,768,85,864,85.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <div className="container-lfgs">
          <div className="row text-center mt-5">
            <h1 className="display-3 section-title-white fw-bold text-capitalize">
              LFGs activos en tu region
            </h1>
            <div className="heading-line" />
            <p className="lead display-2--description">
              ¡Observa los LFGs más activos de tú región!
            </p>
          </div>
          <div className="row mt-5 mb-4 g-3 text-center">
            <div className="col-md-12">
              <button className="btn btn-dark padding" type="button">
                All
              </button>
              <button className="btn btn-dark padding" type="button">
                websites
              </button>
              <button className="btn btn-dark padding" type="button">
                design
              </button>
              <button className="btn btn-dark padding" type="button">
                mockup
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgGtaV}
                  alt="portfolio 1"
                  title="portfolio 1 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Cracks de GTA V</h4>
                    <p>¡Bienvenido al grupo!, reuniones todos los viernes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgMinecraft}
                  alt="portfolio 2"
                  title="portfolio 2 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Minecraft</h4>
                    <p>
                      ¡Bienvenido al grupo!, reuniones todos los martes y
                      hardcore gameplay los viernes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgFortnite}
                  alt="portfolio 3"
                  title="portfolio 3 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Fortnite lovers</h4>
                    <p>Torneos todos los jueves por la tarde</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgMario}
                  alt="portfolio 4"
                  title="portfolio 4 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Mario Club</h4>
                    <p>Jugamos Mario party, Mario Karts, etc..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgCallOfDuty}
                  alt="portfolio 5"
                  title="portfolio 5 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Call of duty crew</h4>
                    <p>
                      Buscamos personas quieran conformar un team para e-sports
                      de call of duty
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgLol}
                  alt="portfolio 6"
                  title="portfolio 6 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">
                      La Grieta de los loleros
                    </h4>
                    <p>Ayudamos a subir de liga hasta diamante</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgGears}
                  alt="portfolio 7"
                  title="portfolio 7 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Gears club</h4>
                    <p>¡Contra los Locust!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgForza}
                  alt="portfolio 8"
                  title="portfolio 8 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Forza Team</h4>
                    <p>Torneos todos los sábados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img
                  src={imgUncharted}
                  alt="portfolio 9"
                  title="portfolio 9 picture"
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4 className="lfg-group-title">Nathan Drake´s company</h4>
                    <p>Jugamos todos los lunes a media noche</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,117.3C384,85,480,43,576,42.7C672,43,768,85,864,85.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </section>
      <section id="services" className="joga-section">
        <div className="container-fluid">
          <div className="row">
            <h2 className="text-center section-title-black">
              <img className="marcianito" alt="marcianito" src={imgMarciano} />
              ¿Qué es Joga?
              <img className="marcianito" alt="marcianito" src={imgMarciano} />
            </h2>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-center">
                    <br />
                    <br />
                    <p className="text-center joga-text">
                      ¡Hola!, este es un proyecto que busca facilitar la manera
                      en que los gamers buscan compañeros de partida para un
                      juego en específico, por medio de salas comunes llamadas
                      LFG (looking for group) 👾 buscamos ser los primeros en
                      implementar este tipo de ideas aquí en LATAM.
                    </p>
                  </p>
                </div>
                <div className="col-md-6">
                  <img className="corazon" src={imgCorazon} alt="" />
                  <img className="diag" src={imgDiag} alt="" />
                  <img className="diag" src={imgDiag} alt="" />
                  <img className="control" src={imgControl} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    <div
      className="modal fade"
      id="videoModal"
      tabIndex="-1"
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="videoModalLabel">
              ¿Qué es Joga?
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="250"
                className="embed-responsive-item modal__video-style"
                src="https://www.youtube.com/embed/QAz07vzN5Nk?html5=1"
                title="YouTube video player Joga"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

import React from 'react';
import './Landing.scss';
import GLightbox from 'glightbox';
import jogaLogo from './assets/JOGA_LOGO.svg';
import ps5Controller from './assets/ps5_controller.svg';

export const Landing = () => {
  const openVideo = () => {
    const lightbox = GLightbox({
      href: 'https://www.youtube.com/watch?v=QAz07vzN5Nk',
      type: 'video',
      source: 'youtube', // vimeo, youtube or local
      width: 900,
    });
    lightbox.open();
  };
  return (
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
                  <a className="nav-link" href="#">
                    Sobre nosotros
                  </a>
                </li>
                <button
                  type="button"
                  className="rounded-pill btn-rounded"
                  onClick="window.location.href='home.html'"
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
                  <a className="glightbox">
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
      </main>
    </>
  );
};

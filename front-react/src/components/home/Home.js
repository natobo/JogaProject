import React from 'react';
import './scss/_items.scss';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import { Card } from '../cards/simpleCard';

export const Home = () => (
  <>
    <div className="fondo" />
    <div>
      <Sidenavbar />
    </div>
    <section id="img" className="contenedor-home">
      <div className=" rectangulo ">
        <div className="row align-items-start text-white">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2 align-self-md-auto">
              <span className="display-2--intro user" id="USERNAME">
                USERNAME
              </span>
            </h1>
            <h3 className="display-2">
              <span className="display-2--description name" id="NAME">
                Nombre
              </span>
            </h3>
          </div>
          <div className="col-md-6 intros text-end">
            <div className="circulo">
              <img
                className="circulo"
                src="https://image.flaticon.com/icons/png/512/435/435010.png"
                alt="control illustration"
                id="IMG"
              />
            </div>
          </div>
          <div className="col-md-6 intros" />
        </div>
      </div>
    </section>
    <section id="bio" className="contenedor-bio ">
      <div className="container-fluid container-intro">
        <div className="row align-items-center text-white">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2 align-self-md-auto">
              <span className="display-2--intro">Bio</span>
            </h1>
            <h3 className="display-2">
              <span className="display-2--description" id="BIO">
                Sed urna massa adipiscing egestas accumsan aliquet mauris
                egestas turpis. Vitae pulvinar lobortis vel ut at. Sed facilisis
                vestibulum, sed bibendum. Vitae, tristique suspendisse
                condimentum pulvinar rutrum dui sed tincid...
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section id="games" className="contenedor-juegos">
      <div className="container-fluid container-intro">
        <div className="row align-items-center text-white">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2 align-self-md-auto">
              <span className="display-2--intro">juegos Recientes</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section id="lfgs" className="contenedor-lfgs">
      <div className="container-fluid container-intro">
        <div className="row align-items-center text-white">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2 align-self-md-auto">
              <span className="display-2--intro">LFGs Activos</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <Card
            name="Fans de Mario"
            image="https://cdn0.iconfinder.com/data/icons/video-games-8/24/video_game_play_toad_mushroom_mario-512.png"
            description="Jugamos los martes Mario Party"
            key={1}
          />
          <Card
            name="Playstation Club"
            image="https://cdn.iconscout.com/icon/free/png-256/playstation-3628985-3030210.png"
            description="Play fans en un solo lugar"
            key={2}
          />
          <Card
            name="Poker Game Club"
            image="https://icon-library.com/images/cards-icon/cards-icon-13.jpg"
            description="¡Todo tipo de juegos de azar!"
            key={3}
          />
        </div>
      </div>
    </section>
    <section id="div" className="contenedor-div">
      <div className="container-fluid container-intro">
        <div className="row align-items-center text-white">
          <h1 className="display-2 align-self-md-auto">
            <span className="display-2--intro">Amigos</span>
          </h1>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
            integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
            crossOrigin="anonymous"
          />
          <div className="container mt-3 mb-4 amigos ">
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                    <table className="table manage-candidates-top mb-0">
                      <thead>
                        <tr>
                          <th>Usuario</th>
                          <th className="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">Brooke Kelly</a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              Jugando
                            </span>
                          </td>
                          <td />
                        </tr>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">Ronald Bradley</a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option" />
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              Inactivo
                            </span>
                          </td>
                          <td />
                        </tr>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">Rafael Briggs</a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option" />
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              Jugando
                            </span>
                          </td>
                          <td />
                        </tr>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src="http://cemokalab.com/wp-content/uploads/2015/07/avatar-369-456321.png"
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">Vickie Meyer</a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option" />
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              Jugando
                            </span>
                          </td>
                          <td />
                        </tr>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s5z4ojtNwl2jXifp1jiboZ2T0plskgirZXxHaE_UW2jdj9PI-8Ig05DPcMBUUAvWNCQ&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">Nichole Haynes</a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option" />
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              Jugando
                            </span>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

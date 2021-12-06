import React, { useState, useEffect } from 'react';
import './scss/_items.scss';
import PropTypes from 'prop-types';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import { Card } from '../cards/simpleCard';
import { Footer } from '../footer/Footer';
import Carrusel from '../juegos/games_section/carrusel_juegos/Carrusel';
import { FilaAmigo } from './Amigos';

export const Home = (props) => {
  const { name, username, img, bio, friends } = props;
  const [amigos, setAmigos] = useState([]);

  const fetchFriend = async (urlBackUser) => {
    try {
      const dataUser = await fetch(urlBackUser, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const dataUserJsonResp = await dataUser.json();
      const dataUserJson = dataUserJsonResp.data;
      return dataUserJson;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getFriends = async () => {
      if (friends) {
        const listPromises = friends?.map((e) => {
          // Traemos la info
          const urlBackUser = `${process.env.REACT_APP_URL_BACK}/api/user/${e}`;
          const friend = fetchFriend(urlBackUser);
          return friend;
        });
        const list = await Promise.all(listPromises);
        setAmigos(list);
      }
    };
    getFriends();
  }, [friends]);

  return (
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
                  {username}
                </span>
              </h1>
              <h3 className="display-2">
                <span className="display-2--description name" id="NAME">
                  {name}
                </span>
              </h3>
            </div>
            <div className="col-md-6 intros text-end">
              <div className="">
                <img
                  className="circulo"
                  src={img}
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
                <span className="display-2--description bio" id="BIO">
                  {bio}
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
        <Carrusel
          title=""
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
          tag="none"
        />
      </section>
      <section id="lfgs" className="contenedor-lfgs">
        <div className="row align-items-center text-white">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2 align-self-md-auto">
              <span className="display-2--intro">LFGs Activos</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Card
              name="Fans de Mario"
              image="https://cdn0.iconfinder.com/data/icons/video-games-8/24/video_game_play_toad_mushroom_mario-512.png"
              description="Jugamos los martes Mario Party"
            />
            <Card
              name="Playstation Club"
              image="https://cdn.iconscout.com/icon/free/png-256/playstation-3628985-3030210.png"
              description="Play fans en un solo lugar"
            />
            <Card
              name="Poker Game Club"
              image="https://icon-library.com/images/cards-icon/cards-icon-13.jpg"
              description="¡Todo tipo de juegos de azar!"
            />
          </div>
        </div>
      </section>
      <section id="div" className="contenedor-div amigos">
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
            <div className="container mt-3 mb-4 ">
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
                          {amigos?.map((e, i) => (
                            <FilaAmigo
                              key={i}
                              name={e.name}
                              username={e.username}
                              img={e.avatarUrl}
                            />
                          ))}
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
      <section id="footer" className="contenedorFooter">
        <Footer />
      </section>
    </>
  );
};

Home.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
  bio: PropTypes.string,
  friends: PropTypes.arrayOf(PropTypes.string),
};

import React from 'react';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import Carrusel from './games_section/carrusel_juegos/Carrusel';
import { TitleSearch } from './title/TitleSearch';

const urlBackGames = `${process.env.REACT_APP_URL_BACK}/api/game`;

export const Juegos = () => (
  <>
    <div>
      <Sidenavbar />
      <TitleSearch />
      <div className="juegos-carruseles">
        <Carrusel
          title="Recientes"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
        />
        <Carrusel
          title="Populares"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
        />
        <Carrusel
          title="Competitivos"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
        />
        <Carrusel
          title="Casuales"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
        />
      </div>
      <div className="footer-juegos">
        <Footer />
      </div>
    </div>
  </>
);

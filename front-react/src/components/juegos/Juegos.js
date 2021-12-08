import React from 'react';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import Carrusel from './games_section/carrusel_juegos/Carrusel';
import TitleSearch from './title/TitleSearch';

export const Juegos = () => (
  <>
    <div>
      <TitleSearch />
      <div className="juegos-carruseles">
        <Carrusel
          title="Recientes"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          tag="none"
        />
        <Carrusel
          title="Populares"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          tag="Popular"
        />
        <Carrusel
          title="Competitivos"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          tag="Competitivo"
        />
        <Carrusel
          title="Casuales"
          url={`${process.env.REACT_APP_URL_BACK}/api/game`}
          buttonText="Encontrar grupo"
          tag="Casual"
        />
        <div className="footer-juegos">
          <Footer />
        </div>
      </div>
    </div>
  </>
);

import React from 'react';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import Carrusel from './games_section/carrusel_juegos/Carrusel';
import TitleSearch from './title/TitleSearch';

const urlBackGames = 'http://localhost:8080/api/game';

export const Juegos = () => (
  <>
    <div>
      <Sidenavbar />
      <TitleSearch />
      <div className="juegos-carruseles">
        <Carrusel
          title="Recientes"
          url="http://localhost:8080/api/game"
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
          tag="none"
        />
        <Carrusel
          title="Populares"
          url="http://localhost:8080/api/game"
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
          tag="pop"
        />
        <Carrusel
          title="Competitivos"
          url="http://localhost:8080/api/game"
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
          tag="com"
        />
        <Carrusel
          title="Casuales"
          url="http://localhost:8080/api/game"
          buttonText="Encontrar grupo"
          buttonPath="/lfgs"
          tag="cas"
        />
      </div>
      <div className="footer-juegos">
        <Footer />
      </div>
    </div>
  </>
);

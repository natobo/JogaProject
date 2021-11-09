import React, { useState, useEffect } from 'react';
import { CarouselJoga } from '../carousel/CarouselJoga';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import { Gallery } from './gallery/Gallery';
import { Footer } from '../footer/Footer';
import './Lfgs.scss';

export const Lfgs = () => {
  const data = [
    {
      id: 1,
      name: 'Crash Bandicoot',
      description: 'Hacemos torneos cada viernes',
      image:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/07/crash-bandicoot-n-sane-trilogy.png',
    },
    {
      id: 2,
      name: 'Jett revive me please',
      description:
        'Se busca team para rankeds plata+ se aceptan Sage duelistas',
      image:
        'https://cdn-3.expansion.mx/e8/e4/a8aa098b43d8a4b184ee00fec346/valorant.jpg',
    },
    {
      id: 3,
      name: 'Cocinaditas GOD',
      description:
        'Somos un equipo de mancos que busca cocineros para pasar los niveles ocultos, si tiras un plato lo pagas',
      image:
        'https://cdn2.unrealengine.com/egs-overcooked2-ghosttowngamesandteam17digitalltd-s3-2560x1440-846624591.jpg?h=480&resize=1&w=854',
    },
  ];
  const [lfgs, setLFGs] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchLFGs();
  }, []);

  const fetchLFGs = async () => {
    // const data = await resp.json();

    const gifSimple = data?.map((resp) => ({
      id: resp.id,
      image: resp.image,
      name: resp.name,
      description: resp.description,
    }));
    setLFGs(gifSimple);
  };

  return (
    <>
      <div className="main">
        <div className="backg" />
        <div>
          <Sidenavbar />
        </div>
        <div className="content">
          <div className="title">
            <div className="text">LFGs</div>
          </div>
          <div className="recent">
            <h1>Recientes</h1>
            <div className="Car">
              <CarouselJoga items={data} />
            </div>
          </div>
          <div className="todos">
            <h1>Todos</h1>
            <div>
              <Gallery items={data} />
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Carousel } from '../carousel/Carousel';
import './Lfgs.scss';

export const Lfgs = () => {
  const data = [
    {
      id: 1,
      name: 'Abadango Cluster Princess',
      description: 'Alive for now',
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    },
    {
      id: 2,
      name: 'Prueba 2',
      description: 'asereje aja eje dejebe ti vejebe sebi alv es dificil',
      image: 'http://www.irational.org/APD/cyber/600x400.gif',
    },
    {
      id: 3,
      name: 'PErsonaje 5',
      description: 'No se cualquier wea random que me invente',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    },
  ];
  const [images, setGifts] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchGifts();
  }, []);

  const fetchGifts = async () => {
    // const data = await resp.json();

    const gifSimple = data?.map((resp) => ({
      id: resp.id,
      image: resp.image,
      name: resp.name,
      description: resp.description,
    }));
    setGifts(gifSimple);
  };

  return (
    <div className="main">
      <h1>Lfgs titulo</h1>
      <Carousel items={data} />
    </div>
  );
};

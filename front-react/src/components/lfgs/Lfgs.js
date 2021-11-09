import React from 'react';
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
      description: 'asereje aja eje dejebe ti vejebe sebi la puta es dificil',
      image: 'http://www.irational.org/APD/cyber/600x400.gif',
    },
    {
      id: 3,
      name: 'PErsonaje 5',
      description: 'No se cualquier wea random que me invente',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    },
  ];

  return (
    <div className="main">
      <h1>Lfgs titulo</h1>
      <Carousel items={data} />
    </div>
  );
};

import React from 'react';
import './Gallery.scss';
import { Card } from '../../cards/simpleCard';

export const Gallery = (props) => {
  const { items } = props;
  return (
    <div className="gallery-container">
      {items?.map((d) => (
        <Card
          id="tarjeta"
          key={d.id}
          name={d.name}
          image={d.image}
          description={d.description}
        />
      ))}
    </div>
  );
};

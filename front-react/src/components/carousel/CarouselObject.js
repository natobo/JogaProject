import React from 'react';

export const CarouselObject = ({ item }) => (
  <div className="carousel-item">
    <img
      src={item.image}
      className="d-block w-100"
      alt={String(item.name).concat(' image')}
      height="auto"
      width="600px"
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>{item.name}</h5>
      <p>{item.description}</p>
    </div>
  </div>
);

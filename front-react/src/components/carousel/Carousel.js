import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../cards/simpleCard';
import './Carousel.scss';

export const Carousel = ({ items }) => {
  const first = items.shift();
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <p>Si llega</p> {console.log(items)}
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div key={first.id} className="carousel-item active">
          <img
            src={first?.image}
            className="d-block w-100"
            alt={String(first.name).concat(' image')}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{first.name}</h5>
            <p>{first.description}</p>
          </div>
        </div>
        {/* eslint-disable-next-line array-callback-return */}
        {items?.map((item, i) => {
          <div key={item.id} className="carousel-item">
            <Card
              name={item.name}
              image={item.image}
              description={item.description}
            />
          </div>;
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array,
};

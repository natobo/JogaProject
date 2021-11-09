import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import './CarouselJoga.scss';

export const CarouselJoga = ({ items }) => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h3>React Bootstrap Carousel</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Carousel className="carousel-joga">
            {items?.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

Carousel.propTypes = {
  items: PropTypes.array,
};

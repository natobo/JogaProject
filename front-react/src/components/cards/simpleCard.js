import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const { name, image, description } = props;
  return (
    <>
      <div className="card">
        <img
          className="card-image img-fluid"
          src={image}
          alt={name}
          x="50%"
          y="50%"
        />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

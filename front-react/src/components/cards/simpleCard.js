import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const { name, image, description } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card shadow">
          <img className="img-fluid" src={image} alt={name} />
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

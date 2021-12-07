import React from 'react';
import './scss/Home.scss';
import PropTypes from 'prop-types';

export const FilaAmigo = (props) => {
  const { name, username, img } = props;
  return (
    <tr className="candidates-list">
      <td className="title">
        <div className="thumb">
          <img className="img-fluid" src={img} alt={name} />
        </div>
        <div className="candidate-list-details">
          <div className="candidate-list-info">
            <div className="candidate-list-title">
              <h5 className="mb-0">
                <a>{username}</a>
              </h5>
            </div>
            <div className="candidate-list-option">
              <ul className="list-unstyled" />
            </div>
          </div>
        </div>
      </td>
      <td className="candidate-list-favourite-time text-center">
        <span className="candidate-list-time order-1">Jugando</span>
      </td>
      <td />
    </tr>
  );
};

FilaAmigo.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
};

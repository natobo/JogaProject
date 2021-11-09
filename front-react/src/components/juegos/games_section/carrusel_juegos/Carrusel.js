import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Carrusel.scss';
import { Link } from 'react-router-dom';

function Carrusel({ title, url, buttonText, buttonPath, tag }) {
  const [cards, setCards] = useState([]);
  const ref = useRef(null);
  const URL = url;
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setCards(shuffle(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="titulo-carrusel">
      <div className="contenedor-titulo-controles">
        <h3>{title}</h3>
        <div className="indicadores">
          <button aria-label="a" type="button" />
          <button aria-label="b" type="button" />
        </div>
      </div>
      <div className="contenedor-principal">
        <button
          id={`flecha-izquierda-${title}`}
          className="flecha-izquierda"
          type="button"
          onClick={() => scroll(-ref.current.offsetWidth)}
        >
          <i className="fas fa-chevron-left" />
        </button>

        <div
          id={`contenedor-carousel-${title}`}
          className="contenedor-carousel"
          ref={ref}
        >
          <div className="carousel">
            {cards
              .filter(function (card) {
                return card.tags.includes(tag);
              })
              .map((card) => (
                <div className="card-container">
                  <img
                    src={card.linkPortada}
                    className="card-img-top"
                    alt={card.name}
                  />
                  <div className="card-body game-description">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.description}</p>
                    <Link to={buttonPath} className="btn btn-primary ">
                      {buttonText}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          id={`flecha-derecha-${title}`}
          className="flecha-derecha"
          type="button"
          onClick={() => scroll(ref.current.offsetWidth)}
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Carrusel;

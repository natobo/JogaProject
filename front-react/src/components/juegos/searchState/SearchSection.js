import React, { useState, useEffect, useRef } from 'react';
import './SearchSection.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchSection({ url, buttonText, buttonPath }) {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const URL = url;
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
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
    <div>
      <div className="input-busqueda-div">
        <form className="d-flex form-busqueda">
          <input
            className="form-control me-2 input-busqueda"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
      </div>
      <div className="juegos-busqueda">
        <div className="contenedor-principal">
          <div
            id="contenedor-carousel-busqueda"
            className="contenedor-carousel-busqueda"
          >
            <div className="carousel">
              {cards
                .filter((card) => {
                  if (
                    searchTerm === '' ||
                    card.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    card.tags.includes(searchTerm)
                  ) {
                    return card;
                  }
                  return null;
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
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

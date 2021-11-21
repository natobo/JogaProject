import React, { useState, useEffect, useRef, useReducer } from 'react';
import './SearchSection.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchSection({ url, buttonPath }) {
  const [cards, setCards] = useState([]);
  const [tags, setTags] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
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
  function getTags(cardArray) {
    const allTags = {};
    cardArray.forEach((card) => {
      card.tags.forEach((tag) => {
        console.log(tag);
        if (!(tag in allTags)) {
          allTags[tag] = 1;
        } else {
          allTags[tag] += 1;
        }
      });
    });
    return allTags;
  }

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCards(shuffle(res.data.data));
        setTags(getTags(cards));
      })
      .catch((err) => {
        console.log(err);
      });
    ref.current.focus();
    ref.current.select();
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
            ref={ref}
          />
        </form>
        <div className="filtros-juegos">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtrar
            </button>

            <ul className="dropdown-menu" aria-labelledby="Filtrar">
              {Object.entries(tags)
                .filter((tag) => {
                  if (tag[0] !== 'none') {
                    console.log(tag[0]);
                    return tag;
                  }
                  return null;
                })
                .map((tag) => (
                  <li>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {tag[0]}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        </div>
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
                    <Link to={buttonPath}>
                      <img
                        src={card.linkPortada}
                        className="card-img-top"
                        alt={card.name}
                      />
                      <div className="card-body game-description">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">{card.description}</p>
                      </div>
                    </Link>
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

import React, { useState, useEffect, useRef, useReducer } from 'react';
import './SearchSection.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function SearchSection({ url, buttonPath }) {
  const [cards, setCards] = useState([]);
  const [checked, setChecked] = useState(false);
  const [tags, setTags] = useState({});
  const [activeTags, setActiveTags] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const URL = url;

  const anyFilterActive = () => {
    if (
      Object.keys(activeTags).length === 0 &&
      activeTags.constructor === Object
    ) {
      return false;
    }
    const elements = Object.entries(activeTags);
    let found = false;
    for (let i = 0; i < elements.length && !found; i += 1) {
      if (elements[i][1]) {
        found = true;
      }
    }
    return found;
  };

  const checkIfFilter = (t) => {
    const cardTags = t;
    let matches = false;
    for (let i = 0; i < cardTags.length && !matches; i += 1) {
      if (activeTags[cardTags[i]]) {
        matches = true;
      }
    }
    return matches;
  };

  const handleFilter = (filter, isChecked) => {
    const tagsState = activeTags;
    tagsState[filter] = isChecked;
    setActiveTags(tagsState);
    setChecked(!checked);
  };

  function getTags(cardArray) {
    const allTags = {};
    cardArray.forEach((card) => {
      card.tags.forEach((tag) => {
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
    async function fetchData() {
      await axios
        .get(URL)
        .then((res) => {
          setCards(res.data.data);
          setTags(getTags(cards));

          setLoading(false);
        })

        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
    console.log('useEffect', activeTags);
  }, [loading, checked]);
  if (loading) {
    return <div>loading</div>;
  }

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
              <FormattedMessage id="filter" />
            </button>

            <ul className="dropdown-menu" aria-labelledby="Filtrar">
              {Object.entries(tags)
                .filter((tag) => {
                  if (tag[0] !== 'none') {
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
                      onChange={(event) => {
                        handleFilter(tag[0], event.target.checked);
                      }}
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
                  if (!anyFilterActive()) {
                    return card;
                  }
                  if (checkIfFilter(card.tags)) {
                    return card;
                  }
                  return null;
                })
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
                    <Link to={`/juegos/buscar/${card._id}`}>
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

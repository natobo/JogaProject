import React from 'react';
import { Link } from 'react-router-dom';
import './TitleSearch.scss';

function TitleSearch() {
  return (
    <div className="juegos-titulo">
      <div className="text">Juegos</div>
      <Link to="/juegos/agregar">
        <i className="fas fa-plus-square agregar" />
      </Link>
      <Link to="/juegos/buscar">
        <i className="fas fa-search busqueda" />
      </Link>
    </div>
  );
}

export default TitleSearch;

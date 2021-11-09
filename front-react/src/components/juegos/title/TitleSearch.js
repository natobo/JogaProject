import React, { useState } from 'react';
import './TitleSearch.scss';

function TitleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="juegos-titulo">
      <div className="text">Juegos</div>
      <input
        className="busqueda"
        type="text"
        placeholder="Buscar..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
}

export default TitleSearch;

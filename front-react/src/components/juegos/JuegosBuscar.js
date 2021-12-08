import React from 'react';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import SearchSection from './searchState/SearchSection';

export const JuegosBuscar = () => (
  <div>
    <SearchSection
      url="http://localhost:8080/api/game"
      buttonText="Encuentra un grupo"
      buttonPath="/lfgs"
    />
  </div>
);

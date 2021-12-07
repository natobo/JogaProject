import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import { BarChart } from './chart/BarChart';
import './Stats.scss';

export const Stats = () => {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState('rating');
  const URL = `${process.env.REACT_APP_URL_BACK}/api/game/`;
  const handleClick = () => {
    setChart('numberOfReviews');
  };
  useEffect(() => {
    console.log('fetching');
    async function fetchData() {
      await axios
        .get(URL)
        .then((res) => {
          setGames(res.data.data);
          console.log(games);
          setLoading(false);
        })

        .catch((err) => {
          console.log('error fetching');
          console.log(err);
        });
    }
    fetchData();
  }, [loading]);
  console.log('in stats');
  if (loading) {
    return (
      <div>
        <Sidenavbar />
        <div className="stats-title">Estadisticas</div>
        <div className="stats-main-section" />
      </div>
    );
  }
  return (
    <div>
      <Sidenavbar />
      <div className="stats-title">Estadisticas</div>
      <div className="stats-main-section">
        <div className="chart-title">Juegos Mejor Calificados</div>
        <div className="chart-wrapper">
          <BarChart data={games} filterBy={chart} />
        </div>
      </div>
    </div>
  );
};

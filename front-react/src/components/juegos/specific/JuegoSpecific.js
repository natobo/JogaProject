import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sidenavbar } from '../../sidenavbar/Sidenavbar';
import './JuegoSpecific.scss';

export const JuegoSpecific = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const URL = `${process.env.REACT_APP_URL_BACK}/api/game/${params.id}`;
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(URL)
        .then((res) => {
          setGame(res.data.data);
          setLoading(false);
        })

        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <Sidenavbar />
      <div className="vista-juego">
        <div className="game-title">{game.name}</div>
      </div>
    </div>
  );
};

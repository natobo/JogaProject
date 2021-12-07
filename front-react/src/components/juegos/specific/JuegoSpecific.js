import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Footer } from '../../footer/Footer';
import { Sidenavbar } from '../../sidenavbar/Sidenavbar';
import './JuegoSpecific.scss';

export const JuegoSpecific = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const currentRating = `Calificacion promedio: ${Math.round(game.rating)}/100`;
  const linkto = `/lfgs?${game._id}`;
  const handleRating = (rate) => {
    setRating(rate);
    const preRating = game.rating;
    const newRating =
      (preRating * game.numberOfReviews + rate) / (game.numberOfReviews + 1);
    const newNofR = game.numberOfReviews + 1;
    console.log(newRating);
    console.log(`${process.env.REACT_APP_URL_BACK}/api/game/${game._id}`);
    console.log(
      axios.put(`${process.env.REACT_APP_URL_BACK}/api/game/${game._id}`, {
        rating: newRating,
        numberOfReviews: newNofR,
      })
    );
  };
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
  }, [rating]);

  if (loading) {
    return (
      <div>
        <Sidenavbar />
        <div className="vista-juego" />
      </div>
    );
  }

  return (
    <div>
      <Sidenavbar />
      <div className="vista-juego">
        <div className="game-specific-title">{game.name}</div>
        <div className="game-specific-imgbg-wrapper">
          <img
            src={game.linkPortada}
            className="game-specific-imgbg"
            aria-label={game.name}
          />
        </div>
        <div className="game-specific-main-img-wrapper">
          <img
            src={game.linkPortada}
            className="game-specific-main-img"
            aria-label={game.name}
          />
        </div>
        <Link to={linkto}>
          <div className="game-specific-encontrar-lfg">Encontrar grupo</div>
        </Link>

        <div className="game-rating-wrapper">
          <p className="game-rating-title">Califica el juego:</p>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            fillColor="#d122e3"
            emptyColor="#dddddd"
            size="50"
            allowHalfIcon="true"
            transition="true"
            showTooltip="true"
            tooltipDefaultText={currentRating}
            tooltipArray={[
              'Tu calificacion: 10/100',
              'Tu calificacion: 20/100',
              'Tu calificacion: 30/100',
              'Tu calificacion: 40/100',
              'Tu calificacion: 50/100',
              'Tu calificacion: 60/100',
              'Tu calificacion: 70/100',
              'Tu calificacion: 80/100',
              'Tu calificacion: 90/100',
              'Tu calificacion: 100/100',
            ]}
          />
        </div>
        <div className="game-specific-description">{game.description}</div>
      </div>
      <div className="footer-juegos-specific">
        <Footer />
      </div>
    </div>
  );
};

import { getCardTemplate } from './templates.js';

// console.log(getCardTemplate);
const urlBackLogin = 'http://localhost:3000/api/user/login';
const urlBackGames = 'http://localhost:3000/api/game';

const filaRec = document.getElementById('contenedor-carousel-rec');
const filaPop = document.getElementById('contenedor-carousel-pop');
const filaCom = document.getElementById('contenedor-carousel-com');
const filaCas = document.getElementById('contenedor-carousel-cas');
// const juegos = document.querySelector('.game');

const flechaIzquierdaRec = document.getElementById(
  'flecha-izquierda-recientes'
);
const flechaDerechaRec = document.getElementById('flecha-derecha-recientes');
const flechaIzquierdaPop = document.getElementById(
  'flecha-izquierda-populares'
);
const flechaDerechaPop = document.getElementById('flecha-derecha-populares');
const flechaIzquierdaCom = document.getElementById(
  'flecha-izquierda-competitivos'
);
const flechaDerechaCom = document.getElementById('flecha-derecha-competitivos');
const flechaIzquierdaCas = document.getElementById('flecha-izquierda-casuales');
const flechaDerechaCas = document.getElementById('flecha-derecha-casuales');

flechaDerechaRec.addEventListener('click', () => {
  filaRec.scrollLeft += filaRec.offsetWidth;
});
flechaIzquierdaRec.addEventListener('click', () => {
  filaRec.scrollLeft -= filaRec.offsetWidth;
});
flechaDerechaPop.addEventListener('click', () => {
  filaPop.scrollLeft += filaPop.offsetWidth;
});
flechaIzquierdaPop.addEventListener('click', () => {
  filaPop.scrollLeft -= filaPop.offsetWidth;
});
flechaDerechaCom.addEventListener('click', () => {
  filaCom.scrollLeft += filaCom.offsetWidth;
});
flechaIzquierdaCom.addEventListener('click', () => {
  filaCom.scrollLeft -= filaCom.offsetWidth;
});
flechaDerechaCas.addEventListener('click', () => {
  filaCas.scrollLeft += filaCas.offsetWidth;
});
flechaIzquierdaCas.addEventListener('click', () => {
  filaCas.scrollLeft -= filaCas.offsetWidth;
});

// zona dinamica
const carruselesJuegos = document.querySelectorAll('.carousel');
let htmlCarruseles = `
`;

async function apiCall() {
  try {
    const resp = await fetch(urlBackLogin, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'noreply.joga@gmail.com',
        password: 'admin123',
      }),
    });
    console.log(resp);
    const respJson = await resp.json();
    localStorage.setItem('jwt', respJson.token);
  } catch (error) {
    console.log(error);
  }

  try {
    const dataGames = await fetch(urlBackGames, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(dataGames);
    const dataGamesJson = await dataGames.json();
    const games = dataGamesJson.data;

    for (let i = 0; i < games.length; i += 1) {
      const game = games[i];
      htmlCarruseles += getCardTemplate(game);
      console.log(game.linkPortada);
    }
    carruselesJuegos.forEach((p) => {
      p.innerHTML = htmlCarruseles;
    });
  } catch (error) {
    console.log(error);
  }
}

console.log(carruselesJuegos);
apiCall();

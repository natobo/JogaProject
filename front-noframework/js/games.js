// import {getCardTemplate} from "./templates";
// console.log(getCardTemplate);
const urlBackLogin = 'http://localhost:3000/api/user/login';
const urlBackGames = 'http://localhost:3000/api/game';

const filaRec = document.getElementById('contenedor-carousel-rec');
const filaPop = document.getElementById('contenedor-carousel-pop');
const filaCom = document.getElementById('contenedor-carousel-com');
const filaCas = document.getElementById('contenedor-carousel-cas');
const juegos = document.querySelector('.game');

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
const htmlCarruseles = `
                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/bf2042.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Battlefield 2042</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>
                        
                         
                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/league.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">League of Legends</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/maincra.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Minecraft</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/nw.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">New World</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/oc2.jpeg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Overcooked 2</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/overwacho.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Overwatch</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/rl.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Rocket League</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/stardew valley.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Stardew Valley</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/ultimate chicken horse.jpg" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Ultimate Chicken Horse</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

                        <div class="card game" style="width: 18rem;">
                            <img src="assets/images/test-images/valheim.png" class="card-img-top" alt="...">
                            <div class="card-body game-description">
                              <h5 class="card-title">Valheim</h5>
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ipsum lectus. Proin at lobortis ex.</p>
                              <a href="#" class="btn btn-primary ">Encontrar grupo</a>
                            </div>
                        </div>

`;

carruselesJuegos.forEach((p) => {
  p.innerHTML = htmlCarruseles;
});

async function apiCall() {
  await fetch(urlBackLogin, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'noreply.joga@gmail.com',
      password: 'admin123',
    }),
  })
    .then((p) => console.log(p.json()))
    .catch((e) => console.log(e));

  await fetch(urlBackGames)
    .then((resp) => console.log(resp))
    .then((data) => {
      console.log('data', data);
    })
    .catch((e) => console.log(e));
}
console.log(carruselesJuegos);
apiCall();

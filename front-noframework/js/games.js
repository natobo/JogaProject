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

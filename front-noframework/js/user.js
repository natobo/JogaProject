const filaRec = document.getElementById('contenedor-carousel-rec');
const flechaIzquierdaRec = document.getElementById(
  'flecha-izquierda-recientes'
);
const flechaDerechaRec = document.getElementById('flecha-derecha-recientes');

flechaDerechaRec.addEventListener('click', () => {
  filaRec.scrollLeft += filaRec.offsetWidth;
});

flechaIzquierdaRec.addEventListener('click', () => {
  filaRec.scrollLeft -= filaRec.offsetWidth;
});

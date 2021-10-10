const urlBackLogin = 'http://localhost:3000/api/user/login';
// GET mock user
const urlBackUser = 'http://localhost:3000/api/user/61620b765b7e08245285f2bf';

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

// Llamada del API
async function apiCall() {
  try {
    // Hace login
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
    const respJson = await resp.json();
    localStorage.setItem('jwt', respJson.token);
  } catch (error) {
    console.log(error);
  }

  try {
    // Traemos la info
    const dataUser = await fetch(urlBackUser, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const dataUserJsonResp = await dataUser.json();
    const dataUserJson = dataUserJsonResp.data;
    console.log(dataUserJson);
    // Renderizar la informacion
    const h1Username = document.querySelector('#USERNAME');
    const h1Name = document.querySelector('#NAME');
    const img = document.querySelector('#IMG');
    const bio = document.querySelector('#BIO');
    h1Username.innerHTML = dataUserJson.username;
    h1Name.innerHTML = dataUserJson.name;
    img.innerHTML = dataUserJson.avatarURL;
    bio.innerHTML = dataUserJson.bio;
  } catch (error) {
    console.log(error);
  }
}

apiCall();

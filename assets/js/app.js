const baseEndpoint = 'https://api.github.com'; 
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se agrego un .
const $b = document.querySelector('.blog'); //Se sustituyo #S con un .
const $l = document.querySelector('.location');

async function displayUser(username) { //falta la plabra  async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  data = await response.json();  //Faltaba esta línea, que sirve para usar la response
  console.log(data);
  $n.textContent = `${data.name}`; 
  $b.textContent = `${data.blog}`;   //En las lineas 12,13 y 14 se le agrego  ``
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
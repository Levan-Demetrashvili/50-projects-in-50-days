const jokeEL = document.querySelector('.joke');
const btn = document.querySelector('button');

const config = { headers: { Accept: 'application/json' } };

//* Using async/await

async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  jokeEL.textContent = data.joke;
}

generateJoke();
btn.addEventListener('click', generateJoke);

//* Using then()
// function generateJoke() {
//   fetch('https://icanhazdadjoke.com/', config).then(response =>
//     response.json().then(data => {
//       jokeEL.textContent = data.joke;
//     })
//   );
// }

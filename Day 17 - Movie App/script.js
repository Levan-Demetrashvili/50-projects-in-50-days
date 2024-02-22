'use strict';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=5cd3ff2ee71e22e92792d59c0e1b65ef&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5cd3ff2ee71e22e92792d59c0e1b65ef&query="';

const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const moviesCont = document.querySelector('.main');

//* Get initial movies
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  addMovies(data.results);
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

async function addMovies(movies) {
  console.log(movies);

  moviesCont.innerHTML = '';
  movies.forEach(movie => {
    const movieHTML = `<div class="movie">
    <img src="${IMG_PATH + movie.poster_path}" alt="movie" />
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class="${getClassByRate(movie.vote_average)}"> ${movie.vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${movie.overview}
    </div>
  </div>
`;
    moviesCont.insertAdjacentHTML('beforeend', movieHTML);
  });
}

getMovies(API_URL);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let word = searchInput.value;
  if (word) {
    getMovies(SEARCH_API + word);
    word = '';
  } else {
    console.log(window.location.reload());
  }
});

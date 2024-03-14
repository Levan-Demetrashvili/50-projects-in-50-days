'use strict';

const container = document.querySelector('.container');
const pokemon_count = 150;
// prettier-ignore
const colors = {fire: '#FDDFDF',grass: '#DEFDE0',electric: '#FCF7DE',water: '#DEF3FD',ground: '#f4e7da',rock: '#d5d5d4',fairy: '#fceaff',poison: '#98d7a5',bug: '#f8d5a3',dragon: '#97b3e6',psychic: '#eaeda1',flying: '#F5F5F5',fighting: '#E6E0D4',normal: '#F5F5F5'
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  createPokemonCard(data);
}

function createPokemonCard(pokemon) {
  console.log(pokemon);
  // prettier-ignore
  const {id, name, types: [{type : {name : type}}], sprites : {other : {'official-artwork' : artwork }}} = pokemon
  console.log(type);
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  pokemonEl.style.backgroundColor = colors[type];
  pokemonEl.innerHTML = `
  <div class="img-container">
    <img src="${artwork.front_shiny}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">#${String(id).padStart(3, 0)}</span>
    <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>`;
  container.appendChild(pokemonEl);
}

fetchPokemons();

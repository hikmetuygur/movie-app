const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_bt=popularity.desc&api_key=e42c65f8eee285a6df05e02124d53d80&page=1';

const SEARCH_URL =
  'https://api.themoviedb.org/3/discover/movie?&api_key=e42c65f8eee285a6df05e02124d53d80&query="';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById('form');

//Get initial movies

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

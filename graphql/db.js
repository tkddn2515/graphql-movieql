export let movies = [
  {
    id:1,
    name: "Nicolas",
    score: 1
  },
  {
    id:2,
    name: "Han",
    score: 99
  },
];

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}

export const delegeMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const id = movies[movies.length - 1].id + 1;
  const newMovie = {
    id,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
}
// /src/redux/selectors.js

// Selector för att hämta favoriter
export const selectFavorites = (state) => state.favorites.favorites;

// Selector för att hämta filmer
export const selectMovies = (state) => state.movies.movies;

// Selector för status (laddning, klar, etc.)
export const selectMoviesStatus = (state) => state.movies.status;

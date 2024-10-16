

// Jag definierar en selector för att hämta favoriter från Redux store
export const selectFavorites = (state) => state.favorites.favorites;

// Jag definierar en selector för att hämta filmer från Redux store
export const selectMovies = (state) => state.movies.movies;

// Jag definierar en selector för att hämta status (t.ex. laddning eller lyckad) från movies slice
export const selectMoviesStatus = (state) => state.movies.status;

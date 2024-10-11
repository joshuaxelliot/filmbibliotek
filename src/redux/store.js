// /src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';
import moviesReducer from './slices/moviesSlice'; // Om du har en slice för filmer

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer, // Om du har en slice för filmer
  },
});

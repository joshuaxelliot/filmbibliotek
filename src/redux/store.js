// /src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';
import moviesReducer from './slices/moviesSlice'; // Importera moviesSlice

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer, // Lägg till movies reducer
  },
});

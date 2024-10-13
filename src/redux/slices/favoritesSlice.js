// /src/redux/slices/favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Hämta favoriter från localStorage 
const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [], // Ladda favoriter från localStorage
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.some((fav) => fav.id === movie.id);
      if (!exists) {
        state.favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Spara till localStorage
      }
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Uppdatera localStorage
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

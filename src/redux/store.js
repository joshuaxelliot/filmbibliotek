

import { configureStore } from '@reduxjs/toolkit'; 
import favoritesReducer from './slices/favoritesSlice'; 
import moviesReducer from './slices/moviesSlice'; 

// Jag skapar och exporterar min Redux store
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // Jag lägger till favoriter reducer som hanterar användarens favoriter
    movies: moviesReducer, // Jag lägger till movies reducer som hanterar filmdatainformation
  },
});

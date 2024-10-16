
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'abe333f06bf4f625c9f2d82d4962a58b'; // Din TMDB API-nyckel
const BASE_URL = 'https://api.themoviedb.org/3';

// Thunk för att hämta populära filmer
export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results; // Returnera resultatet
  }
);

// Thunk för att hämta filmer baserat på sökterm
export const fetchMoviesBySearchTerm = createAsyncThunk(
  'movies/fetchMoviesBySearchTerm',
  async (searchTerm) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`);
    return response.data.results; // Returnera resultatet
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading'; // Sätt status till laddar
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Sätt status till lyckad
        state.movies = action.payload; // Spara filmerna
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed'; // Sätt status till misslyckad
        state.error = action.error.message; // Spara felmeddelande
      })
      .addCase(fetchMoviesBySearchTerm.pending, (state) => {
        state.status = 'loading'; // Sätt status till laddar
      })
      .addCase(fetchMoviesBySearchTerm.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Sätt status till lyckad
        state.movies = action.payload; // Spara filmerna baserat på sökterm
      })
      .addCase(fetchMoviesBySearchTerm.rejected, (state, action) => {
        state.status = 'failed'; // Sätt status till misslyckad
        state.error = action.error.message; // Spara felmeddelande
      });
  },
});

export default moviesSlice.reducer;

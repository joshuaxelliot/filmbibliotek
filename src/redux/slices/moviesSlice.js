// /src/redux/slices/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'abe333f06bf4f625c9f2d82d4962a58b'; // Ersätt med din TMDB API-nyckel
const BASE_URL = 'https://api.themoviedb.org/3';

// Thunk för att hämta populära filmer
export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;

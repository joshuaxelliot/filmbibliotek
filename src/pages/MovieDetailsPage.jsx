import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { selectFavorites } from '../redux/selectors';
import axios from 'axios';

const API_KEY = 'abe333f06bf4f625c9f2d82d4962a58b'; // Ersätt med din TMDB API-nyckel
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  // Kontrollera om filmen redan är i favoriter
  const isFavorite = favorites.some((fav) => fav.id === movie?.id);

  // Funktion för att lägga till filmen i favoriter
  const handleAddToFavorites = () => {
    if (movie) {
      dispatch(addFavorite(movie));
    }
  };

  // Funktion för att ta bort filmen från favoriter
  const handleRemoveFromFavorites = () => {
    dispatch(removeFavorite(movie.id));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-8">
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <p className="text-gray-400 mb-2">Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
          <p className="text-gray-400 mb-2">Release Date: {movie.release_date}</p>
          <p className="text-gray-400 mb-2">Runtime: {movie.runtime} minutes</p>
          <p className="text-gray-400 mb-2">Rating: {movie.vote_average}/10</p>
          <p className="text-gray-400 mb-2">Language: {movie.original_language.toUpperCase()}</p>

          {isFavorite ? (
            <button
              onClick={handleRemoveFromFavorites}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove from My List
            </button>
          ) : (
            <button
              onClick={handleAddToFavorites}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Add to My List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;

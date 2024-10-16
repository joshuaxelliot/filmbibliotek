import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { selectFavorites } from "../redux/selectors";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";

const API_KEY = "abe333f06bf4f625c9f2d82d4962a58b"; 
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
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
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="p-5 bg-gray-900 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-5 text-white">
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 shadow-lg"
          />
          <div className="md:ml-8 flex-1 text-white">
            <p className="text-lg mb-4">{movie.overview}</p>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-sm text-gray-400">
                Genres:{" "}
                <span className="text-white">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Release Date:{" "}
                <span className="text-white">{movie.release_date}</span>
              </p>
              <p className="text-sm text-gray-400">
                Runtime:{" "}
                <span className="text-white">{movie.runtime} minutes</span>
              </p>
              <p className="text-sm text-gray-400">
                Rating:{" "}
                <span className="text-white">{movie.vote_average}/10</span>
              </p>
              <p className="text-sm text-gray-400">
                Language:{" "}
                <span className="text-white">
                  {movie.original_language.toUpperCase()}
                </span>
              </p>
            </div>

            {/* Favoritknapp */}
            <div className="mt-6 flex items-center space-x-4">
              {isFavorite ? (
                <button
                  onClick={handleRemoveFromFavorites}
                  className="flex items-center bg-transparent text-white m-0 p-0"
                >
                  <FaHeart className="text-4xl" />
                </button>
              ) : (
                <button
                  onClick={handleAddToFavorites}
                  className="flex items-center bg-transparent text-white m-0 p-0 "
                >
                  <FaRegHeart className="text-4xl " />cypress
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;

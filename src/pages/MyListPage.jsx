import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../redux/slices/favoritesSlice';
import { selectFavorites } from '../redux/selectors';
import { FaTrash } from "react-icons/fa";

function MyListPage() {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-white">My List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-0 rounded-lg shadow-lg">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[450px] object-cover rounded-md rounded-b-none"
                />
                <h2 className="text-lg text-center py-1 font-semibold text-white">{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                {/* <p className="text-sm text-gray-400">{movie.release_date}</p> */}
              </Link>
              <button
                onClick={() => handleRemove(movie.id)}
                className="bg-red-500 text-white px-4 py-1 rounded w-full"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">List is empty...</p>
        )}
      </div>
    </div>
  );
}

export default MyListPage;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchMoviesBySearchTerm } from "../redux/slices/moviesSlice"; // Importerar thunks
import { Link } from "react-router-dom";

function Home({ searchTerm }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchPopularMovies()); // Hämtar populära filmer om status är idle
    }
  }, [movieStatus, dispatch]);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchMoviesBySearchTerm(searchTerm)); // Hämtar filmer baserat på sökterm
    }
  }, [searchTerm, dispatch]);

  let content;

  if (movieStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (movieStatus === 'succeeded') {
    content = movies.map((movie) => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="bg-gray-800 p-0 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[450px] object-cover rounded-md rounded-b-none"
          />
          <h2 className="text-lg text-center py-1 font-semibold text-white">{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
        </div>
      </Link>
    ));
  } else if (movieStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-white">Explore Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content}
      </div>
    </div>
  );
}

export default Home;

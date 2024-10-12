import React, { useEffect, useState } from "react";
import { fetchMovies } from "./../data/api";
import { Link } from "react-router-dom";

function Home({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchMovies(searchTerm); // Hämta filmer baserat på sökterm
        setMovies(data);
      } catch (err) {
        setError('Could not fetch movies');
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm]); // Kör om sökterm ändras

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-white">Explore Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
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
        ))}
      </div>
    </div>
  );
}

export default Home;

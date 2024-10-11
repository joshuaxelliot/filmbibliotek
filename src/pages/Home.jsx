import React, { useEffect, useState } from "react";
import { fetchMovies } from "./../data/api";
import Header from "../components/Header";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="p-5">
      <Header onSearchChange={handleSearchChange} />
      <h1 className="text-3xl font-bold mb-5">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 p-3 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[300px] object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
            <p className="text-sm text-gray-400">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyListPage from "./pages/MyListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Footer from "./components/Footer"; // Importera Footer
import { Helmet } from 'react-helmet'; // Importerar Helmet

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Helmet>
        <title>JJ Streaming</title>
        <meta name="description" content="Discover the most popular movies and search for your favorites."/>
        <meta name="keywords" content="movies, popular movies, movie library,"/>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-900">{" "} {/* Flexbox layout */}
        <Header onSearchChange={handleSearchChange} />
        <main className="flex-grow">{" "}{/* Innehållet växer för att fylla utrymmet */}
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />{" "}
      </div>
    </Router>
  );
}

export default App;

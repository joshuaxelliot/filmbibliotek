import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyListPage from "./pages/MyListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Footer from "./components/Footer"; // Importera Footer
import { Helmet } from 'react-helmet'; // Importerar Helmet
import ReactGA from "react-ga4"; // Importera Google Analytics

const TRACKING_ID = "G-YF2XHQB511"; // Ditt Google Analytics mät-ID

function App() {
  const location = useLocation();

  // Initiera Google Analytics
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Initiera GA
    ReactGA.send("pageview"); // Spåra sidvisning
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Spåra sidvisningar vid navigering
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900"> {/* Flexbox layout */}
      <Helmet>
        <title>JJ Streaming</title>
        <meta name="description" content="Discover the most popular movies and search for your favorites."/>
        <meta name="keywords" content="movies, popular movies, movie library,"/>
      </Helmet>
      <Header onSearchChange={handleSearchChange} />
      <main className="flex-grow"> {/* Innehållet växer för att fylla utrymmet */}
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;

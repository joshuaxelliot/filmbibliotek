import React, { useEffect, useState } from "react"; 
import { Routes, Route, useLocation } from "react-router-dom"; 
import Header from "./components/Header"; 
import Home from "./pages/Home"; 
import MyListPage from "./pages/MyListPage"; 
import MovieDetailsPage from "./pages/MovieDetailsPage"; 
import Footer from "./components/Footer"; 
import { Helmet } from 'react-helmet'; 
import ReactGA from "react-ga4"; 

const TRACKING_ID = "G-YF2XHQB511"; // Jag anger mitt Google Analytics mät-ID

function App() {
  const location = useLocation(); // Jag hämtar den aktuella platsen för routing

  // Initiera Google Analytics
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Jag initierar Google Analytics
    ReactGA.send("pageview"); // Jag spårar sidvisningar
  }, []);

  const [searchTerm, setSearchTerm] = useState(""); // Jag definierar state för söktermen

  const handleSearchChange = (term) => {
    setSearchTerm(term); // Jag uppdaterar söktermen
  };

  // Spåra sidvisningar vid navigering
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", // Jag definierar typ av händelse som sidvisning
      page: location.pathname + location.search, // Jag skickar nuvarande URL
    });
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900"> {/* Jag använder Flexbox för layout */}
      <Helmet>
        <title>JJ Streaming</title> {/* Jag sätter sidans titel */}
        <meta name="description" content="Discover the most popular movies and search for your favorites."/> {/* Jag lägger till meta-beskrivning */}
        <meta name="keywords" content="movies, popular movies, movie library,"/> {/* Jag lägger till meta-nyckelord */}
      </Helmet>
      <Header onSearchChange={handleSearchChange} /> {/* Jag lägger till Header-komponenten */}
      <main className="flex-grow"> {/* Jag låter main växa för att fylla utrymmet */}
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} /> {/* Jag definierar routing för hem-sidan */}
          <Route path="/my-list" element={<MyListPage />} /> {/* Jag definierar routing för "My List"-sidan */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} /> {/* Jag definierar routing för filmens detaljer */}
        </Routes>
      </main>
      <Footer className="mt-auto" /> {/* Jag lägger till footern */}
    </div>
  );
}

export default App; // Jag exporterar App-komponenten

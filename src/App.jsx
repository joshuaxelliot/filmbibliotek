import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyListPage from './pages/MyListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Footer from './components/Footer'; // Importera Footer

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term); // Uppdatera söktermen
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900"> {/* Flexbox layout */}
        <Header onSearchChange={handleSearchChange} />
        <main className="flex-grow"> {/* Innehållet växer för att fylla utrymmet */}
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </main>
        <Footer className="mt-auto" /> {/* Se till att footern alltid ligger i botten */}
      </div>
    </Router>
  );
}

export default App;

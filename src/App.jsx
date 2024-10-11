import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyListPage from './pages/MyListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

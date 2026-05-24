import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import ScrollToHash from './components/ScrollToHash';

// Import Pages
import Home from './pages/Home';
import RecipesPage from './pages/RecipesPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <div className="App">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;

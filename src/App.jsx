import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import ScrollToHash from './components/ScrollToHash';

// Import Pages
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Videos from './pages/Videos';
import RecipesPage from './pages/RecipesPage';
import BlogsPage from './pages/BlogsPage';

function App() {
  return (
    <div className="App">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;

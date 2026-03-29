import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import BMICalculator from './components/BMICalculator';
import Recipes from './components/Recipes';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <About />
      <HowItWorks />
      <Pricing />
      <Recipes />
      <BMICalculator />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;

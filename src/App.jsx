import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { NavProvider } from './components/Navbar/NavContext';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <NavProvider>
      <Navbar />
      <HeroSection />
      <Footer />
    </NavProvider>
  );
}

export default App;

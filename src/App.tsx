import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Programs from './components/Programs';
import CountdownTimer from './components/CountdownTimer';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-['Poppins',sans-serif]">
      <Header />
      <CountdownTimer />
      <Hero />
      <Benefits />
      <Programs />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
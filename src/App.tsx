import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import News from './components/News';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <News />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
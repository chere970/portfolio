import React from 'react';
import AboutSection from '../components/AboutSection';

function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to My Portfolio</h1>
      <p className="text-lg mb-4">
        Hi, I'm [Your Name], a web developer passionate about creating 
        user-friendly and engaging web experiences.
      </p>
      <AboutSection />
    </div>
  );
}

export default Home;
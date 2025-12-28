import React from 'react';
import profile from '../assets/bass.png';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants'; // Correctly import fadeIn

const fadeInUp = fadeIn('up', 0.5);

function AboutSection() {
  return (
    <section className="bg-gray-5 py-16 flex flex-col items-center relative">
      {/* Main Heading */}
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        animate="show" 
        className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello, I am</h1>
        <h2 className="text-5xl font-extrabold text-blue-600 mb-4">Kaleab Wasihun</h2>
        <p className="text-xl text-blue-500 font-medium">
          
        </p>
      </motion.div>

      {/* Illustration Section */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Image Section */}
        <div className="order-1 md:order-2 flex-1 max-w-sm p-6 mb-8 md:mb-0">
          <img
            src={profile}
            alt="Illustration"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 md:order-1 flex-1 max-w-lg text-gray-700 text-lg px-4">
          <p>
          I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences.
           I have a solid foundation in HTML, CSS, JavaScript, and React. 
                   I am always eager to learn new technologies and improve my skills.
        </p>
        </div>
      </div>
    
    </section>
  );
}

export default AboutSection;
import React from 'react';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';
import TestimonialCard from '../components/TestimonialCard';
import img from '../assets/apa.jpg';
function Home() {
  return (
    < >
    <div className="container mx-auto p-8">
        
        {/* <h1 className="text-3xl text-black font-bold mb-8">Welcome </h1> */}
        {/* <h1 className="text-3xl text-black font-bold mb-8">Welcome </h1> */}
      {/* <p className="text-lg mb-4">
        Hi, I'm Cherinet Kebede, a web developer passionate about creating 
        user-friendly and engaging web experiences.
        </p> */}
      <AboutSection />
    </div>
    <h2 className="text-3xl text-black font-bold mb-8">Skills</h2>
    {/* <h1 className='text-black '>Skills</h1> */}
   
    <div className="container bg-gray-300 w-full flex flex-col mx-auto p-8 m-5 space-y-6 rounded-lg shadow-md">
        <SkillCard skill="HTML" proficiency={90} />
        <SkillCard skill="CSS" proficiency={70} />
        <SkillCard skill="JavaScript" proficiency={70} />
        <SkillCard skill="React" proficiency={60} />
    </div>
          <h2 className="text-3xl text-black font-bold mb-8">Testimonials</h2>
    <div className="m-5 bg-gray-300 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-6">
            <TestimonialCard
              name="Bizuneh"
              quote="Using Rental System  has been a game-changer for me. The platform is incredibly user-friendly and intuitive, making it easy to browse, book, and manage rentals all in one place. I recently rented a camera for a weekend trip, and the entire process was seamless—from finding the perfect item to arranging pickup and payment. I highly recommend  Rental System  to anyone"
              image={img} 
            />
            <TestimonialCard
              name="Tamirat"
              quote="Using Rental System  has been a game-changer for me. The platform is incredibly user-friendly and intuitive, making it easy to browse, book, and manage rentals all in one place. I recently rented a camera for a weekend trip, and the entire process was seamless—from finding the perfect item to arranging pickup and payment. I highly recommend  Rental System  to anyone"
              image={img}
            />
          </div>
        </div>
    </>
  );
}

export default Home;
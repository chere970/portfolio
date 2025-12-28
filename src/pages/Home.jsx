import React, { useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import img from '../assets/apa.jpg';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';


function Home() {
  const testimonials = [
    {
      name: 'Dagm',
      quote:
        'Using Rental System has been a game-changer for me. The platform is incredibly user-friendly and intuitive.',
      image: img,
    },
    {
      name: 'Cherinet',
      quote:
        'Rental System is the perfect platform for managing rentals. The seamless process makes it stand out.',
      image: img,
    },
    {
      name: 'Hasset',
      quote:
        'Fantastic experience! The UI is intuitive, and the process of finding and renting equipment was quick and easy.',
      image: img,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <div className="container mx-auto p-8">
        
     
      <AboutSection />
      <h2 className="text-3xl text-black font-bold mb-8">Skills</h2>
      <div className="container bg-gray-300 w-full flex flex-col mx-auto p-8 m-5 space-y-6 rounded-lg shadow-md">
        <SkillCard skill="HTML" proficiency={90} />
        <SkillCard skill="CSS" proficiency={70} />
        <SkillCard skill="JavaScript" proficiency={70} />
        <SkillCard skill="React" proficiency={60} />
    </div>
    </div>
    <div className="relative">
    <h2 className="text-3xl text-black font-bold mb-8">Testimonials</h2>
      <div className="m-5 bg-gray-300 px-8 h-96 rounded-lg shadow-md">
        {/* Carousel Container */}
        <div className="flex justify-center items-center relative overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                className={`flex-shrink-0 mx-4`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.8,
                  zIndex: isActive ? 10 : 5,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  width: isActive ? '300px' : '250px',
                  position: isActive ? 'relative' : 'static',
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Dotted Pagination Bar */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                activeIndex === index
                  ? 'bg-gray-700'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;








// import React from 'react';

// import TestimonialCard from '../components/TestimonialCard';
// import img from '../assets/apa.jpg';
// import { motion} from 'framer-motion';
//  import {fadeIn} from '../components/Variants';

// function Home() {
//   return (
//     < >
    
    
//     {/* <h1 className='text-black '>Skills</h1> */}
   
   
//           
//     <div className="m-5 bg-gray-300 p-8 rounded-lg shadow-md">
//           <div className="grid grid-cols-1 gap-6">
//             <TestimonialCard
//               name="Bizuneh"
//               quote="Using Rental System  has been a game-changer for me. The platform is incredibly user-friendly and intuitive, making it easy to browse, book, and manage rentals all in one place. I recently rented a camera for a weekend trip, and the entire process was seamless—from finding the perfect item to arranging pickup and payment. I highly recommend  Rental System  to anyone"
//               image={img} 
//             />
//             <TestimonialCard
//               name="Tamirat"
//               quote="Using Rental System  has been a game-changer for me. The platform is incredibly user-friendly and intuitive, making it easy to browse, book, and manage rentals all in one place. I recently rented a camera for a weekend trip, and the entire process was seamless—from finding the perfect item to arranging pickup and payment. I highly recommend  Rental System  to anyone"
//               image={img}
//             />
//           </div>
//         </div>
//     </>
//   );
// }

// export default Home;
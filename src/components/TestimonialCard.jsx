import React from 'react';

function TestimonialCard({ name, quote, image }) {
  return (
    <div className="bg-blue-100 border-black mx-10 mb-10 shadow-md rounded-lg p-4 transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
      <img src={image} alt={name} className="rounded-full w-16 h-16 mx-auto mb-4 opacity-0 animate-fade-in" />
      <p className="text-gray-600 opacity-0 animate-fade-in">{quote}</p>
      <p className="text-center text-black text-sm mt-2 opacity-0 animate-fade-in">{name}</p>
    
    </div>
  );
}

export default TestimonialCard;

// Add the following CSS to your App.css or a relevant CSS file
/*


.animate-fade-in {
  animation: fade-in 1s forwards;
}
*/
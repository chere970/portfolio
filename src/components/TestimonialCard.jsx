import React from 'react';

function TestimonialCard({ name, quote, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={name} className="rounded-full w-16 h-16 mx-auto mb-4" />
      <p className="text-gray-600">{quote}</p>
      <p className="text-center text-sm mt-2">{name}</p>
    </div>
  );
}

export default TestimonialCard;
import React, { useState } from 'react';

function ProjectCard({ title, description, link, image }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center mt-4">
          <button 
            onClick={handleLike} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Like ({likes})
          </button>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
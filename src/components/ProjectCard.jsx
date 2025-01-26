import React, { useState } from 'react';
import  placeholder  from '../assets/apa.jpg';

function ProjectCard({ title, description, link, image, category }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the liked state
    setLikes(isLiked ? likes - 1 : likes + 1); // Increment or decrement likes
  };
//   const handleLike = () => {
//     setLikes(likes + 1);
//   };
  

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 max-w-sm mx-auto overflow-hidden p-5 transform transition-transform duration-200 hover:scale-105 hover:shadow-2x1">
      {/* Image Section */}
      <div className="relative  shadow-lg rounded-lg overflow-hidden">
        <img 
        src={image || placeholderImage}
        alt={title} className="w-full h-48 object-cover" />
        {/* Category Badge */}
        {category && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div
            onClick={handleLike}
            className={`flex items-center cursor-pointer space-x-1 transition-colors duration-200 ${
              isLiked ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            <i className={isLiked ? 'bx bxs-heart text-2xl' : 'bx bx-heart text-2xl'}></i>
            <span className="text-gray-800">{likes}</span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;





// import React, { useState } from 'react';

// function ProjectCard({ title, description, link, image }) {
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src="apa.jpg" alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//         <div className="flex items-center mt-4">
//           <button 
//             onClick={handleLike} 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Like ({likes})
//           </button>
//           <a 
//             href={link} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="ml-4 text-blue-500 hover:underline"
//           >
//             View Project
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;
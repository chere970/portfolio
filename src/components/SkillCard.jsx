import React from 'react';

function SkillCard({ skill, proficiency }) {
  return (
    <div className=" shadow-md rounded-lg p-4 w-full mb-4">
      <h3 className="text-lg text-black font-bold mb-2">{skill}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-blue-500 h-2 rounded-full`} 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
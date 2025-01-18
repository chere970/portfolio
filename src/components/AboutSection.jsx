import React from 'react';

function AboutSection() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-600">
        I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences. I have a solid foundation in HTML, CSS, JavaScript, and React. 
        I am always eager to learn new technologies and improve my skills.
      </p>
      {/* Add your profile picture */}
      <img 
        src="your-profile-image.jpg" 
        alt="Your Profile" 
        className="rounded-full w-24 h-24 mx-auto mt-4" 
      />
    </section>
  );
}

export default AboutSection;
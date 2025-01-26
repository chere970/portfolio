

import React from 'react';
import apa from '../assets/pp.jpg';

function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 flex flex-col items-center relative">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello, I am</h1>
        <h2 className="text-5xl font-extrabold text-blue-600 mb-4">Cherinet</h2>
        <p className="text-xl text-blue-500 font-medium">
          
        </p>
      </div>

      {/* Illustration Section */}
      <div className="flex justify-center items-center">
        {/* Text Section */}
        <div className="flex-1 max-w-lg text-gray-700 text-lg px-4">
          <p>
          I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences.
           I have a solid foundation in HTML, CSS, JavaScript, and React. 
                   I am always eager to learn new technologies and improve my skills.
        </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-w-sm p-6">
          <img
            src={apa}
            alt="Illustration"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;






// import React from 'react';
// import apa from '../assets/apa.jpg';

// function AboutSection() {
//   return (
//     <section className="bg-gray-100 p-8 rounded-lg shadow-md flex items-center">
//       {/* Text Section */}
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold mb-4">About Me</h2>
//         <p className="text-gray-600">
//           I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences. I have a solid foundation in HTML, CSS, JavaScript, and React. 
//           I am always eager to learn new technologies and improve my skills.
//         </p>
//       </div>
//       {/* Image Section */}
//       <div className="ml-8 bg-white p-4 rounded-lg shadow-md">
//         <img 
//           src={apa} 
//           alt="Your Profile" 
//           className="rounded-lg w-48 h-48 object-cover"
//         />
//       </div>
//     </section>
//   );
// }

// export default AboutSection;



// // import React from 'react';
// // import apa from '../assets/apa.jpg';
// // function AboutSection() {
// //   return (
// //     <section className="bg-gray-100 p-8 rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-4">About Me</h2>
// //       <p className="text-gray-600">
// //         I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences. I have a solid foundation in HTML, CSS, JavaScript, and React. 
// //         I am always eager to learn new technologies and improve my skills.
// //       </p>
// //       {/* Add your profile picture */}
// //       <img 
// //         src={apa} 
// //         alt="Your Profile" 
// //         className="rounded-full w-24 h-24 mx-auto mt-4" 
// //       />
// //     </section>
// //   );
// // }

// // export default AboutSection;
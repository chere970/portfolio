import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

const projectsData = [
  {
    id: 1,
    title: 'Rental System',
    description: 'Online rental system for managing rental properties.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '../src/assets/apa.jpg',
    link: 'https://github.com/chere970/rental-system-c-',
  },
  {
    id: 2,
    title: 'Kimas Payment',
    description: 'Simple payment system for a small business.',
    technologies: ['JavaScript', 'Canvas'],
     image: '../src/assets/download.jpg',
    link: 'https://www.pinterest.com/pin/845410161271249284/',
  },
  {
    id: 3,
    title: 'Hallel Player',
    description: 'Music player for listening to your favorite songs.',
    technologies: ['React', 'Node.js', 'Python', 'AI'],
    image: '../src/assets/music.jpg',
    link: 'https://your-t-shirt-designer-link.com',
  },
  // Add more projects here
];

function Projects() {
    const [projects, setProjects] = useState(projectsData);
    const [filter, setFilter] = useState('');
  
    const handleFilterChange = (event) => {
      const newFilter = event.target.value.toLowerCase();
      setFilter(newFilter);
  
      const filteredProjects = projectsData.filter((project) =>
        project.title.toLowerCase().includes(newFilter) ||
        project.description.toLowerCase().includes(newFilter)
      );
      setProjects(filteredProjects);
    };
  
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-black font-bold mb-8">Projects</h1>
        <div className="mb-4 border rounded-lg border-black">
          <input
            type="text"
            placeholder="Search projects..."
            value={filter}
            onChange={handleFilterChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 overflow-hidden">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
                   
      </div>
    );
  }
  
  
export default Projects;
























// import React from 'react';
// import AboutSection from '../components/AboutSection';

// function Home() {
//   return (
//     <div className="container mx-auto p-8">
//       {/* <h1 className="text-3xl font-bold mb-8">Welcome to My Portfolio</h1> */}
//       <p className="text-lg mb-4">
//         Hi, I'm [Your Name], a web developer passionate about creating 
//         user-friendly and engaging web experiences.
//       </p>
//       {/* <AboutSection /> */}
//     </div>
//   );
// }

// export default Home;
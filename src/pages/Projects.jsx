
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
    title: 'Shoot',
    description: 'A simple 2D shootem up game built with JavaScript and Canvas.',
    technologies: ['JavaScript', 'Canvas'],
     image: '../src/assets/apa.jpg',
    link: 'https://your-shoot-em-up-link.com',
  },
  {
    id: 3,
    title: 'AI 3D T-Shirt Designer',
    description: 'An AI-powered tool for designing custom 3D t-shirts.',
    technologies: ['React', 'Node.js', 'Python', 'AI'],
    image: 't-shirt-designer.jpg',
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
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={filter}
            onChange={handleFilterChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
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
            <h3 className='w-full mt-5 mb-5'>----------------------------------------------------------------------------------------------------</h3>
        <div className="m-5 bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl text-black font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Jane Doe"
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
          </div>
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
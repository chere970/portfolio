import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Aside() {
  return (
    <aside className="fixed top-1/2 transform -translate-y-1/2 left-0 p-4 bg-gray-800 text-white rounded-r-lg shadow-lg">
      <div className="container mx-auto flex flex-col space-y-4">
        <a
          href="https://www.linkedin.com/in/cherinet-kebede970"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram text-2xl"></i>
        </a>
        <a
          href="https://t.me/Chere970"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-telegram text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cherinet-kebede970"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin text-2xl"></i>
        </a>
        <a
          href="https://github.com/dashboard"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github text-2xl"></i>
        </a>
      </div>
    </aside>
  );
}

export default Aside;

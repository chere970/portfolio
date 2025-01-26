import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-7  ">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} cherinetkebede</p>
        </div>
        <div className="flex space-x-4 mr-20">
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
      </div>
    </footer>
  );
}

export default Footer;
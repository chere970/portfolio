import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-7  ">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} Kaleab Wasihun</p>
        </div>
        <div className="flex space-x-4 mr-20">
        <a
            href="https://www.liom/in/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </a>
          <a
             href="https://t.me/HubHub10"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram text-2xl"></i>
          </a>
          <a
            href="https://www..com/in/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
          </a>
          <a
          href="https://b.com/"
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
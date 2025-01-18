import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} Your Name</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
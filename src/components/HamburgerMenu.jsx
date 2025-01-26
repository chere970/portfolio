// src/components/HamburgerMenu.jsx

import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center p-4 bg-gray-800 text-white">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-gray-800 p-4 rounded-md shadow-md">
          <ul>
            <li>
              <a href="/" className="block py-2 px-4 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="block py-2 px-4 hover:bg-gray-700">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-4 hover:bg-gray-700">
                Contact
              </a>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
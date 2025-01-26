import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/useTheme';
import { Sun, Moon } from 'lucide-react';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} text-${theme === 'dark' ? 'white' : 'gray-800'} p-4 fixed top-0 left-0 w-full z-50 bg-opacity-20 shadow-md`}
    >
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          CHK
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:shadow-md transition-transform transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:shadow-md transition-transform transform hover:scale-110"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/projects" className="block hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="block hover:text-blue-500">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:shadow-md transition-transform transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/useTheme';
import { Sun, Moon } from 'lucide-react';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} text-${theme === 'dark' ? 'white' : 'gray-800'} p-4 fixed top-0 left-0 w-full z-50`}
    >
      <nav className="flex justify-between items-between">
        <Link to="/" className="text-xl font-bold">
          CHK
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
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
      </nav>
    </header>
  );
}

export default Header;

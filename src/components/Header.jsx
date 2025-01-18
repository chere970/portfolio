import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/useTheme';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`bg-${theme === 'light' ? 'white' : 'gray-800'} p-4`}>
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          My Portfolio
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
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
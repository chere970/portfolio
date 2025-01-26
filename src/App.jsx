import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './utils/useTheme';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Router>
          <Header />
          <main className="flex-grow mt-20 mx-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
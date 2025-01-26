import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './utils/useTheme';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Aside from './components/Aside';
import './App.css';
import bg from './assets/bg.jpg';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div
        className="text-gray-900 mt-5 dark:text-white min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Router>
          <Header />
          <div className="hidden lg:block">
            <Aside />
          </div>
          <main className="flex-grow mt-5 mx-3 lg:mx-20 main-background">
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
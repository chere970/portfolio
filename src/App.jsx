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

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white  text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Router>
          <Header />
          <main className="flex-grow mt-20 mx-20 main-background">
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


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider,ThemeContext } from './utils/useTheme'; 

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';



// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
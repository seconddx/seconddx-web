// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NotFound from './pages/NotFound/NotFound';
import Home from './pages/home/home';
import About from './pages/about/about';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

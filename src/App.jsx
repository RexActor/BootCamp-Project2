import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      {/* Wraps Route elements in a Routes component */}
      <Routes>
        {/* Routes using the Route component to render different page components at different paths */}
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="/" element={<Home />} /> {/* Route that will render the Home component */}
        {/* Route that will have descendant routes */}
        <Route path="jobs/*" element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

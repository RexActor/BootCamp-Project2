import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import Navbar from './components/Navbar';
//import Header from './components/Header';
//import About from './pages/About';
import Team from './pages/Team';
import Home from './pages/Home';
//import Jobs from './pages/Jobs';
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
  {/* <Navbar /> */}
  {/* <Header /> */}
     {/* Wraps Route elements in a Routes component */}
    <Routes>
      {/* Routes using the Route component to render different page components at different paths */}
     {/* <Route path="about" element={<About />} /> */}
     <Route path="Team" element={<Team />} />
     <Route path="/" element={<Home />} />  {/* Route that will render the Home component */}
        {/* Route that will have descendant routes */}
      {/* <Route path="jobs/*" element={<Jobs />} /> */}
    </Routes>
   {/*<Footer />*/}
  </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
//import Header from './components/Header';
import About from './pages/About';
import Team from "./pages/Team";
import Home from "./pages/Home";
import Jobs from './pages/Jobs';
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult.jsx";

function App() {
  return (
    <Router>
      {<Navbar />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="jobs/*" element={<Jobs />} />
      </Routes>
      {/* <SearchResult /> */}
      <Footer />
    </Router>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
// import components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './views/Home';
import OurTeam from "./views/OurTeam";
import Booking from './views/Booking';
import Menus from "./views/Menus";
import Hero from "./components/Hero"

const App = () => {
  return (
      <Router>
        <Hero/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/booking"  element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
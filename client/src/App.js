import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Donate from "./pages/Donate";

import "./styles/main.css";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Layout components
import HeroSection from "./components/HeroSection";
import Home from "./components/Home";
import HomeButton from "./components/HomeButton";
import Footer from "./components/Footer";

// Page components
import About from "./components/About";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import AimAndObjective from "./pages/AimAndObjective";
import Event from "./pages/Event";
import DirectorMessage from "./pages/DirectorMessage";
import AcademicProgram from "./pages/AcademicProgram";

function App() {
  return (
    <>
      {/* Persistent top hero/header section */}
      <HeroSection />

      {/* Route-based page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/aim-and-objective" element={<AimAndObjective />} />
        <Route path="/events" element={<Event />} />
        <Route path="/director-message" element={<DirectorMessage />} />
        <Route path="/academic-program/:programId" element={<AcademicProgram />} />
      </Routes>

      {/* Persistent scroll-to-top button */}
      <HomeButton />

      {/* Persistent footer */}
      <Footer />
    </>
  );
}

export default App;

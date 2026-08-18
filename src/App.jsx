import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Components/Navbar";
import NoticeBoard from "./Components/NoticeBord";
import TopBar from "./Components/TopBar";
import Login from "./Components/Login";
import Gallery from './Components/Gallery';
import About from "./Components/About";
import Facilities from "./Components/Facilities";
import Academics from "./Components/Academics"; // 1. Academics import add kiya

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroBanner />
      <NoticeBoard />
      <Gallery />
      <ContactSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} /> {/* 2. Route add kiya */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="w-12 h-12 rounded-full border-2 border-yellow-400 bg-white object-contain" 
          />
          <div>
            <h1 className="text-base md:text-lg font-bold tracking-wide leading-tight text-white">
              स्व० सीताराम सिंह सेवा शिक्षण संस्थान
            </h1>
            <p className="text-xs text-yellow-300 font-medium">
              त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.)
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-semibold text-sm">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
          
          {/* Academics Link Updated Here */}
          <Link to="/academics" className="hover:text-yellow-400 transition">Academics</Link>
          
          {/* Facilities Link */}
          <Link to="/facilities" className="hover:text-yellow-400 transition">Facilities</Link>
          
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <Link 
            to="/contact" 
            className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg transition shadow"
          >
            Apply Now
          </Link>

          <Link 
            to="/login" 
            className="bg-white text-blue-900 hover:bg-yellow-400 font-bold px-3 py-1.5 rounded-lg text-xs transition border border-yellow-400 flex items-center"
          >
            <i className="fa-solid fa-lock mr-1.5"></i> Login
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu State Toggle */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 px-4 pt-2 pb-4 space-y-2 border-t border-blue-800">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-yellow-400 py-1 font-semibold text-sm"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-yellow-400 py-1 font-semibold text-sm"
          >
            About Us
          </Link>
          
          {/* Academics Mobile Link Updated Here */}
          <Link 
            to="/academics" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-yellow-400 py-1 font-semibold text-sm"
          >
            Academics
          </Link>

          {/* Facilities Mobile Link */}
          <Link 
            to="/facilities" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-yellow-400 py-1 font-semibold text-sm"
          >
            Facilities
          </Link>

          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-yellow-400 py-1 font-semibold text-sm"
          >
            Contact Us
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-lg text-sm mt-2"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
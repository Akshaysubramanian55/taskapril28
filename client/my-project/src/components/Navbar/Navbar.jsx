import React, { useState } from "react";
import logoo from './images/logoo.svg';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md bg-gradient-to-r from-white via-blue-600 to-black">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo - always visible */}
        <div className="flex items-center">
          <img src={logoo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">About Us</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Plans</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Testimonials</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Privacy Policy</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">More</a>
        </div>

        {/* Desktop Button - hidden on mobile */}
        <div className="hidden md:block">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu - conditionally rendered based on menuOpen state */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 flex flex-col">
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">About Us</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">Plans</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">Testimonials</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">Privacy Policy</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium py-2 border-b border-blue-500">More</a>
          
          {/* Get Started button in mobile menu */}
          <button className="bg-white text-blue-600 px-6 py-2 mt-2 rounded-md font-medium hover:bg-blue-50 transition-colors self-start">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
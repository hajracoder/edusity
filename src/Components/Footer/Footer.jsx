// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Your Logo</h2>
            <p className="text-gray-400 mt-2">
              Providing quality services since 2023. Your satisfaction is our priority.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              About Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Services
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          © 2023 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


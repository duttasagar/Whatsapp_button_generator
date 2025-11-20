

import React, { useState } from "react";
import logo3 from "../assets/logo3.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white shadow-md font-inter">
      <div className="flex items-center">
        <img
          src={logo3}
          alt="Logo"
          className="h-16 w-16 rounded-full border-2 border-white"
        />
      </div>

      <nav className="hidden md:flex space-x-12 text-black font-medium text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:text-green-500 transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:text-green-500 transition-colors"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:text-green-500 transition-colors"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:text-green-500 transition-colors"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:text-green-500 transition-colors"
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="hidden md:flex gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          Signup
        </button>
      </div>

      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-sm shadow-md flex flex-col items-center py-4 space-y-4 md:hidden text-gray-900">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">
            Services
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">
            Portfolio
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">
            Contact
          </NavLink>

          <div className="flex flex-col gap-2 w-full px-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full">
              Login
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full">
              Signup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

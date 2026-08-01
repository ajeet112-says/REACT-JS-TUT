import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-black text-2xl h-16 text-white flex items-center px-6">
      
        <h1>Coding champ</h1>
      

      <div className="flex items-center gap-8 ml-auto ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          Product
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
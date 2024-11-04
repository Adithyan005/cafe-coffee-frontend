import React, { useState } from "react";
import logo from "../../assets/imgs/2.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container mx-auto py-2 px-4">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <a
              href="#"
              className="font-medium text-2xl sm:text-3xl flex items-center gap-3 font-cursive tracking-wider"
            >
              <img src={logo} alt="logo" className="w-9 sm:w-11" />
              Coffee Cafe
            </a>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Navbar Links */}
          <div className={`md:flex justify-center gap-4 md:items-center ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
            <ul className={`flex flex-col items-center gap-3 md:flex-row md:gap-4`}>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white duration-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white duration-100"
                >
                  BestSeller
                </a>
              </li>
              <li>
                <a
                  href="#banner"
                  className="text-white/70 hover:text-white duration-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white duration-100"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Centered Order Button */}
            <div className="flex justify-center mt-4 md:mt-0 w-full">
              <button className="rounded-full bg-primary/80 px-4 py-2 hover:scale-110 duration-200 flex items-center gap-3">
                Order <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

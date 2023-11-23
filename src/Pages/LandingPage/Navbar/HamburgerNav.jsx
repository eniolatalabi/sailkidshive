// Importing the required modules
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function HamburgerNav() {
  // State to manage the navigation menu's open/close state
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between ">
       <nav>
        {/* Mobile Navigation Menu */}
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
            >
            {/* Hamburger Icon */}
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
          </div>

            {/* Mobile Menu Content */} 
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

             {/* Close button Function */}
            <div
              className="absolute top-0 right-0 cursor-pointer px-8 py-8"
              onClick={() => setIsNavOpen(false)}
              >
              {/* Close Menu Icon */}
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

              {/* Mobile Menu Links */}
            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
              <Link to="homeLink" smooth={true} duration={1500}>
                <li className="border-b border-gray-400 my-8 cursor-pointer uppercase">
                  <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                    Home
                  </ul>
                </li>
              </Link>
              <Link to="aboutUsLink" smooth={true} duration={1500}>
                <li className="border-b border-gray-400 my-8 cursor-pointer  uppercase">
                  <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                    About us
                  </ul>
                </li>
              </Link>
              <Link to="contactUsLink" smooth={true} duration={1500}>
                <li className="border-b border-gray-400 my-8 cursor-pointer uppercase">
                  <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
                    Contact us
                  </ul>
                </li>
              </Link>
              <NavLink
                to="/login"
                className="border-[0.5px] border-gray-400 rounded-lg py-1 px-3 mb-[2rem] flex items-center"
              >
                <button
                  type="submit"
                  className=" text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
                >
                  Sign In
                </button>
              </NavLink>
              <NavLink
                to="/signup"
                className="border-[0.5px] border-gray-400 rounded-lg py-1 px-3 mb-[2rem] flex items-center"
              >
                <button
                  type="submit"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
                >
                  Register
                </button>
              </NavLink>
            </ul>
          </div>
        </section>

         {/* Desktop Menu */}
        <li className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <Link to="homeLink" smooth={true} duration={1500}>
            <ul className=" cursor-pointer transition-all duration-400 hover:scale-110">
              Home
            </ul>
          </Link>
          <Link to="aboutUsLink" smooth={true} duration={1500}>
            <ul className=" cursor-pointer transition-all duration-400 hover:scale-110">
              About us
            </ul>
          </Link>
          <Link to="contactUsLink" smooth={true} duration={1500}>
            <ul className=" cursor-pointer transition-all duration-400 hover:scale-110">
              Contact us
            </ul>
          </Link>
          <NavLink to="/login">
            <button className=" border-[0.5px] border-none text-[#9B5DE6] transition-all duration-400 hover:scale-110 bg-white rounded-lg py-1 px-3 flex items-center">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="border-[0.5px] border-white rounded-lg py-1 px-3 transition-all duration-400 hover:scale-110 hover:text-white flex items-center">
              Register
            </button>
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

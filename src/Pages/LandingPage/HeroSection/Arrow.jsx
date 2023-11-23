// Importing required dependencies and components
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ArrowImage from "../../../Assets/Images/arrow.svg";

// Define a functional component called Arrow
const Arrow = () => {
  return (
    <div>
    {/* Adding framer-motion animation to the div */}
      <motion.div
        className="rounded-full cursor-pointer"
        href="#aboutUsId"
        whileHover={{
          scale: "1.1",
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(0,0,255)",
        }}
      >
      {/* Creating a smooth scroll link using react-scroll */}
        <Link to="aboutUsLink" smooth={true} duration={1500}>
          <img src={ArrowImage} alt="Arrow" />
        </Link>
      </motion.div>
    </div>
  );
};

// Exporting the Arrow component to be used in other files
export default Arrow; 

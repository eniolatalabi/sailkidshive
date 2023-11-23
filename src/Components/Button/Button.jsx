/* eslint-disable default-case */
// Import the necessary modules and components
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Define a functional component called Button, which takes props as input
const Button = ({ type, text, onClick }) => {
  // Switch statement to handle different button types
  switch (type.toLowerCase()) {
    // If the type is "purple"
    case "purple":
      return (
        // Render a navigation link wrapper that opens a new tab when clicked
        <NavLink to="" target="_blank">
          {/* Use Framer Motion to create an animated button */}
          <motion.button
            // Define the button's CSS classes with tailwindcss utility classes
            className="flex gap-[1rem] items-center bg-[#9B5DE6] px-[0.6rem] py-[0.3rem]  mb-[1rem] font-[poppins-regular] text-[#FFFFFF] text-[0.7rem] rounded-lg"
            // Attach the onClick event handler passed as a prop
            onClick={onClick}
            // Define animation properties for when the button is hovered
            whileHover={{
              scale: "1.1",  
              textShadow: "0px 0px 8px rgb(255,255,255)", 
              boxShadow: "0px 0px 8px rgb(0,0,255)",  
            }}
          >
            {/* Display the text content of the button */}
            {text}
          </motion.button>
        </NavLink>
      );
      break;  

    case "default":
      break;
  }
};

// Export the Button component for use in other parts of the application
export default Button;

// Importing the required modules and components
import React from "react";
import "../../../index.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import LandingPageText from "./HeroSectionText";
import Arrow from "./Arrow";

// Defining a functional component called HeroSection
const HeroSection = () => {
  return (
    // Framer Motion animation for the entire HeroSection
    <motion.div
      className="h-[100svh] w-[100%] herobg pt-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 3 }}
    >

      <div>
        <Navbar /> {/* Displaying the Navbar component */}
      </div>
      <div className="h-[50%] flex flex-col justify-center ">
        <LandingPageText /> {/* Displaying the LandingPageText component */}
      </div>
      <motion.div
        className=" flex justify-center"
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
      <Arrow /> {/* Displaying the Arrow component */}
      </motion.div>
    </motion.div>
  );
};

 // Exporting the HeroSection component for use in other files
export default HeroSection;
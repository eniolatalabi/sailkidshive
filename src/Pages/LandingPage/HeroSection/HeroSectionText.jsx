// Importing the necessary module
import React from "react";

// Defining a functional component called HeroSectionText
const HeroSectionText = () => {
  return (
    <div className="flex flex-col text-center text-4xl md:text-6xl font-[caveat-regular]">
      <h1>
        Empowering Young Minds, <br /> 
        {/* Adding a gradient-colored span for a stylish text effect */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
          One Click at a Time!
        </span>
      </h1>
    </div>
  );
};

// Exporting the HeroSectionText component for use in other files
export default HeroSectionText; 
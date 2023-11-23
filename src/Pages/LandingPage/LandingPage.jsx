// Importing necessary modules and components
import React from "react";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import HeroSection from "./HeroSection/HeroSection";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";


// Defining the LandingPage functional component
const LandingPage = () => {
  // Setting up a state to manage loading state
  const [isLoading, setIsLoading] = useState(true);


   // Using useEffect to simulate a loading delay and then stop loading
   useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // After a delay, set isLoading to false
    }, 500);
  }, []); // Empty dependency array ensures this effect runs only once

  
  // Conditional rendering based on isLoading state
  return isLoading ? (
    // If page is loading, display a loading spinner in the center
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (

    // If page is done loading, display the main content of the landing page
    <div className="bg-[#FFFEFC]">
      <HeroSection />  
      <AboutUs />     
      <ContactUs />   
    </div>
  );
};

// Exporting the LandingPage component for use in other files
export default LandingPage; 









//import neccesary dependencies and components
import React from "react";
import { Progress } from "antd";
import { NavLink } from "react-router-dom";
import htmlImg from "../../Assets/Images/html-img.svg";
import cssImg from "../../Assets/Images/css-img.svg";
import jsImg from "../../Assets/Images/js-img.svg";

// Array of progress cards data
const cards = [
  {
    image: htmlImg,
    topic: "HTML",
    teacher: "Godslove Udo",
    bgcolor: "#FCEDDA",
    color: "#EB7D0C",
    shadow:
      "0 10px 15px -3px rgba(252, 237, 218, 0.80), 0 4px 6px -4px rgba(252, 237, 218, 0.80)",
    progress: 30,
    link: "/htmlCourse",
  },
  {
    image: cssImg,
    topic: "CSS",
    teacher: "David Ajitena",
    bgcolor: "rgba(155, 93, 230, 0.30)",
    color: "#9B5DE6",
    shadow:
      "0px 10px 15px -3px rgba(155, 93, 230, 0.30), 0px 4px 6px -4px rgba(155, 93, 230, 0.30)",
    progress: 30,
    link: "/cssCourse",
  },
  {
    image: jsImg,
    topic: "Javascript",
    teacher: "Abiola Sodiq",
    bgcolor: "rgba(20, 174, 136, 0.30)",
    color: "#1DA684",
    shadow:
      "0 10px 15px -3px rgba(20, 174, 136, 0.30), 0 4px 6px -4px rgba(20, 174, 136, 0.30)",
    progress: 79,
    link:"/jsCourse",
  },
];

// Define the ProgressCards component
const ProgressCards = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col flex-wrap items-center justify-around gap-y-[1rem] md:flex-row">
          {/* Map over the cards array and render each progress card */}
        {cards.map((card, index) => (
          
          <NavLink
            to={card.link}
            key={index}
            style={{
              boxShadow: `${card.shadow}`
            }}
            className="flex flex-col justify-around items-center w-full md:w-[30%] h-[30svh] rounded-lg bg-white"
          >
           
              <div className="flex justify-around items-center">
                <img src={card.image} alt="Cardimage" className="h-20 w-15 " />
                <div className="flex flex-col justify-around items-center ml-[0.3rem]">
                  <p className="font-[caveat-regular] text-[1.2rem] md:text-[1.4rem] ">
                    {card.topic}
                  </p>
                  <div
                    className="font-[poppins-regular] text-[0.7rem] rounded-lg bg-[] px-[0.5rem]"
                    style={{
                      backgroundColor: `${card.bgcolor}`,
                      color: `${card.color}`,
                    }}
                  >
                    {card.teacher}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center align-center h-[auto] w-[70%]">
                 {/* Render the Progress component with the course progress */}
                <Progress
                  percent={card.progress}
                  className="font-[poppins-regular] items-center"
                />
              </div>
             
          </NavLink>
          
        ))}
      </div>
    </React.Fragment>
  );
};

// Export the ProgressCards component for use in other parts of the application
export default ProgressCards;

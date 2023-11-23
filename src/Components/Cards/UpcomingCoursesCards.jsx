//import neccesary dependencies and components
import React from "react";
import advHtml from "../../Assets/Images/advHtml.svg";
import advCss from "../../Assets/Images/advCss.svg";
import advJs from "../../Assets/Images/advJs.svg";

// Array of upcoming course cards data
const cards = [
  {
    image: advHtml,
    topic: "Advanced HTML",
    teacher: "Godslove Udo",
    bgcolor: "#E3E3E3",
    color: "#B5B5B5",
    shadow:
      "",
    progress: 50,
    link: "/htmlCourse",
  },
  {
    image: advCss,
    topic: "Advanced CSS",
    teacher: "David Ajitena",
    bgcolor: "#E3E3E3",
    color: "#B5B5B5",
    shadow:
      "",
    progress: 30,
    link: "/cssCourse",
  },
  {
    image: advJs,
    topic: "Advanced Javascript",
    teacher: "Abiola Sodiq",
    bgcolor: "#E3E3E3",
    color: "#B5B5B5",
    shadow:
      "",
    progress: 100,
    link: "/jsCourse",
  },
];

// Define the UpcomingCoursesCards component
const UpcomingCoursesCards = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col flex-wrap items-center justify-around gap-y-[1rem] md:flex-row">
       {/* Map over the cards array and render each upcoming course card */}
        {cards.map((card, index) => (
          
          <div
            to={card.link}
            key={index}
            style={{
              boxShadow: `${card.shadow}`
            }}
            className="flex flex-col justify-around items-center md:cursor-pointer w-full md:w-[25%] h-[20svh] rounded-lg bg-[#E3E3E3]"
          >
           
              <div className="flex justify-around items-center w-[30%] h-full">
                <img src={card.image} alt="Cardimage" className="h-20 w-10 " />
                <div className="flex flex-col justify-around items-center ml-[0.3rem]">
                  <p className="font-[caveat-regular] text-[1.1rem] text-[#B5B5B5] md:text-[#B5B5B5] md:text-[1.3rem] ">
                    {card.topic}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center align-center h-[auto] w-[80%]">
                {/* Placeholder div */}
                <div className=""></div>
              </div>
             
          </div>
          
        ))}
      </div>
    </React.Fragment>
  );
};

// Export the UpcomingCoursesCards component for use in other parts of the application
export default UpcomingCoursesCards;
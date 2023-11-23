import React from "react";
import Calendar from "react-calendar";

// Define the CustomCalendar component
const CustomCalendar = () => {

  return (
    <div>
      {/* Render the react-calendar component */}
      <Calendar
        // Apply CSS classes and styles to the calendar
        className="font-[atom-regular] font-bold text-center align-center h-[auto] w-[auto] text-gray text-[0.8rem] px-[1rem] pt-[1rem]"
      />
    </div>
  );
};

// Export the CustomCalendar component for use in other parts of the application
export default CustomCalendar;


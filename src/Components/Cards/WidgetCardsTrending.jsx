//import neccesary dependencies and components
import React, { useState } from "react";
import LogoutModal from "../Modal/LogoutModal";
import { NavLink, useNavigate } from "react-router-dom";
import dashboardIcon from "../../Assets/Images/DashboardInactive.svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingActive.svg";
import clipboardIcon from "../../Assets/Images/ClipboardListOutline.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";
import { motion } from "framer-motion";

const WidgetCardsTrending = () => {
  // State to manage visibility of the logout modal
  const [modalVisible, setModalVisible] = useState(false);

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Perform logout action
  const handleLogout = () => {
    console.log("Logout action triggered");
    setModalVisible(false);
    navigate("/");
  };

  
  // Function to handle logout icon click
  const handleLogoutClick = () => {
    setModalVisible(true);
  };

  // Function to close the logout modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Array of image data for each widget card
  const images = [
    {
      name: dashboardIcon,
      style: "max-w-[80%] mb-[1.5rem] mt-[5rem]",
      link: "/dashboard",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "My dashboard",
    },
    {
      name: smileyIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/profile",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "About Me",
    },
    {
      name: trendingIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/trending",
      title: "Exciting Lessons",
    },
    {
      name: clipboardIcon,
      style: "max-w-[80%] mb-[15rem]",
      link: "/courses",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Lessons",
    },
    {
      name: settingsIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/settings",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Settings",
    },
    {
      name: logoutIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Logout",
      onClick: handleLogoutClick,
    },
  ];

  return (
    <div>
      {/* Map over the images array and render each widget card */}
      {images.map((image, index) => (
        <div
          className=""
          key={index}
          title={image.title}
          onClick={image.onClick}
        >
          {/* NavLink to the specified widget link */}
          <NavLink to={image.link} activeClassName="">
             {/* Animate the image with framer-motion while hovering */}
            <motion.img
              src={image.name}
              whileHover={image.whileHover}
              alt="Icon"
              className={`${image.style} transition duration-300 ease-in-out fill-current text-orange-500`}
            />
          </NavLink>
        </div>
      ))}
       {/* Render the LogoutModal component */}
      <LogoutModal
        visible={modalVisible}
        handleLogout={handleLogout}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

// Export the WidgetCardsTrending component for use in other parts of the application
export default WidgetCardsTrending;

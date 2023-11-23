// Import necessary dependencies
import React from "react";
import { useState, useEffect } from "react";
import { Layout, Spin, notification } from "antd";
import { motion } from "framer-motion";
import CustomCalendar from "../../Components/Calendar/CustomCalendar";
import Button from "../../Components/Button/Button";
import ProgressCards from "../../Components/Cards/ProgressCards";
import WidgetCards from "../../Components/Cards/WidgetCards";
import bellIcon from "../../Assets/Images/bell.svg";
import taskGirlIcon from "../../Assets/Images/task-girl.svg";
import taskBoyIcon from "../../Assets/Images/task-boy.svg";
import { useLocation, useNavigate, Link } from "react-router-dom";


const { Header, Content, Sider } = Layout;

// Define the Dashboard component
const Dashboard = () => {
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);

  // Get the username from local storage; if not available, use "User" as default
  const storedUsername = localStorage.getItem("username") || "User";

  useEffect(() => {
    // Simulate loading delay and then set isLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  // Notification setup
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: (
        // Framer Motion animation for the notification message
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1 }}
        >
          <p className="font-[poppins-regular] font-medium">Notification</p>
        </motion.div>
      ),
      description: "", // Empty description for now
      duration: 0, // Stay open until manually closed
    });
  };

  return (
    <React.Fragment>
      {isLoading ? (
        // Display loading indicator while page is loading
        <div className="flex items-center justify-center w-full min-h-screen">
          <Spin size="large" />
        </div>
      ) : (
        // Display content when page is loaded completely
        <div className="w-full">
          <Layout className="h-screen">
            {/* First Sidebar */}
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              width="7%"
              style={{
                backgroundColor: "white",
                height: "100svh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* Component in the first sidebar */}
              <WidgetCards />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                }}
              />
              <Content className="bg-[#FFFBF6] w-full h-[60rem] sm:h-screen">
                <section className="px-[10%] py-[5%] md:px-[7%] lg:px-[10%]">
                  <div className="flex items-center font-[poppins-regular] justify-between">
                    {/* Greeting message */}
                    <p className="font-[poppins-regular] text-[0.7rem] mr-[0.5rem] sm:mr-[0.5rem] md:text-[1.1rem]">
                      Hi {storedUsername}
                    </p>
                    <div className="flex font-[poppins-regular] justify-between">
                      {contextHolder}
                      <motion.div
                        className="bg-white rounded-full font-[poppins-regular] ml-[0.5rem] shadow-md flex items-center justify-center cursor-pointer w-10 h-8"
                        onClick={openNotification}
                        whileHover={{
                          scale: "1.1",
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(0,0,255)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <img
                          src={bellIcon}
                          alt="bell Icon"
                          className="w-6 h-6"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="flex justify-around w-full h-[20svh] bg-white md:h-[20svh] shadow-md mt-[2rem] rounded-lg "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                  >
                    <div className="flex flex-col h-[20svh] w-[50%] justify-around pl-[1rem] md:pl[0] ">
                      <p className="font-[caveat-regular] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
                        Welcome
                      </p>
                      <p className="font-[poppins-regular] text-[0.7rem] md:text-[0.9rem]">
                        check out available lessons
                      </p>
                      {/* Link to the "courses" page */}
                      <Link to="/courses">
                        <Button type="purple" text="See lessons" />
                      </Link>
                    </div>
                    <div className="flex w-[auto]">
                      <img
                        src={taskGirlIcon}
                        alt="taskgirl"
                        className="w-[50%] bg-white md:w-full"
                      />
                      <img
                        src={taskBoyIcon}
                        alt="taskboy"
                        className="w-[50%] md:w-full"
                      />
                    </div>
                  </motion.div>

                  <div className="px-[6%] py-[5%] md:px-[7%]">
                    <motion.p
                      className="flex flex-col font-[caveat-regular] text-[1.2rem] sm:flex-row sm:text-[1.4rem] sm:pl-[0.5rem] md:text-[1.6rem]"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 3,
                      }}
                    >
                      Let's Learn
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0.4, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    {/* Render the progress cards */}
                    <ProgressCards />
                  </motion.div>
                </section>
              </Content>

              {/* Second Sidebar */}
              <Sider
                breakpoint="md"
                collapsedWidth="0"
                width="30%"
                style={{
                  backgroundColor: "white",
                  height: "100svh",
                }}
              >
                <div className="flex flex-col w-full h-[100svh] justify-around items-center">
                  <motion.div
                    className="h-[30vh] justify-between align-center border-2 border-slate-500 rounded-lg bg-[#FCEDDA] w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                  >
                    {/* Render the custom calendar */}
                    <CustomCalendar />
                  </motion.div>

                  <motion.div
                    className="h-[50vh] border-2 border-slate-500 rounded-lg bg-[#FCEDDA] px-[4%] w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                  >
                    <p className="font-[poppins-regular] font-semibold text-[0.9rem] text-center pt-[2rem]">
                      Upcoming Courses
                    </p>

                    {/* Upcoming course details */}
                    <div className="border-l-4 px-[0.5rem] border-[#1DA684] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mt-[2rem] mb-[1rem]">
                      <p>Advanced HTML</p>
                      <p className="text-[#00000066]">Sep 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#9B5DE6] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mb-[1rem]">
                      <p>Advanced CSS</p>
                      <p className="text-[#00000066]">Oct 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#EB7D0C] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mb-[1rem]">
                      <p>Advanced Javascript</p>
                      <p className="text-[#00000066]">Jan 2024</p>
                    </div>
                  </motion.div>
                </div>
              </Sider>
            </Layout>
          </Layout>
        </div>
      )}
    </React.Fragment>
  );
};

// Export the Dashboard component for use in other parts of the application
export default Dashboard;

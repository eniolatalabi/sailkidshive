// Import necessary dependencies
import React from "react";
import { useState, useEffect } from "react";
import { Layout, Spin, notification } from "antd";
import { motion } from "framer-motion";
import CustomCalendar from "../../Components/Calendar/CustomCalendar";
import ActiveCoursesCards from "../../Components/Cards/ActiveCoursesCards";
import UpcomingCoursesCards from "../../Components/Cards/UpcomingCoursesCards";
import WidgetCardsClipboard from "../../Components/Cards/WidgetCardsClipboard";
import bellIcon from "../../Assets/Images/bell.svg";

// Destructure components from antd Layout
const { Header, Content, Sider } = Layout;

// Define the Courses component
const Courses = () => {
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    // Open a custom notification when clicked
    api.open({
      message: (
        <motion.div
          className="font-[caveat-brush]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1 }}
        >
          <p className="font-[poppins-regular] font-medium">Notification </p>
        </motion.div>
      ),
      description: "", // Empty description for now
      duration: 0, // Stay open until manually closed
    });
  };

  return (
    <React.Fragment>
      {isLoading ? (
        // Display loading spinner while loading
        <div className="flex justify-center items-center min-h-screen w-full">
          <Spin size="large" />
        </div>
      ) : (
        // Display main content once loading is done
        <div className="w-full">
          <Layout className="h-screen">
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
              <WidgetCardsClipboard />
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
                    <p className="font-[poppins-regular] text-[0.7rem] mr-[0.5rem] sm:mr-[0.5rem] md:text-[1.1rem]">
                      Lessons
                    </p>
                    <div className="flex font-[poppins-regular] justify-between">
                      {contextHolder}
                      <motion.div
                        className="bg-white rounded-full font-[poppins-regular] ml-[0.5rem] flex items-center justify-center cursor-pointer w-10 h-8"
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

                  {/* Section: Available Lessons */}
                  <div className="px-[6%] py-[5%] md:px-[7%]">
                    <motion.p
                      className="flex flex-col font-[caveat-regular] text-[1.2rem] border-b-2 sm:border-b-2 sm:flex-row sm:text-[1.4rem] sm:pl-[0.5rem] md:border-b-2 md:text-[1.6rem]"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 3,
                      }}
                    >
                      Available Lessons
                    </motion.p>
                  </div>
                  {/* Active lessons cards */}
                  <motion.div
                    initial={{ opacity: 0.4, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <ActiveCoursesCards />
                  </motion.div>
                  {/* Section: Upcoming Lessons */}
                  <div className="px-[6%] py-[5%] md:px-[7%]">
                    <motion.p
                      className="flex flex-col font-[caveat-regular] text-[1.2rem] border-b-2 sm:border-b-2 sm:flex-row sm:text-[1.4rem] sm:pl-[0.5rem] md:border-b-2 md:text-[1.6rem]"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 3,
                      }}
                    >
                      Upcoming Lessons
                    </motion.p>
                  </div>

                  {/* Upcoming lessons cards */}
                  <motion.div
                    initial={{ opacity: 0.4, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <UpcomingCoursesCards />
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
                  {/* Calendar */}
                  <motion.div
                    className="h-[30vh] justify-between align-center border-2 border-slate-500 rounded-lg bg-[#FCEDDA] w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                  >
                    <CustomCalendar />
                  </motion.div>

                  {/* Upcoming Courses */}
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

// Export the Courses component for use in other parts of the application
export default Courses;

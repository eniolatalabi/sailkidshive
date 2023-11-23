// Import Neccesary Dependencies and Components
import React from "react";
import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { motion } from "framer-motion";
import WidgetCardsSmiley from "../../Components/Cards/WidgetCardsSmiley";

const { Content, Sider } = Layout;

// Retrieve stored user profile data from localStorage
const storedUsername = localStorage.getItem("username") || "User";
const storedGender = localStorage.getItem("gender") || "";
const storedAge = localStorage.getItem("age") || "";
const storedFullName = localStorage.getItem("fullName") || "";
const storedEmail = localStorage.getItem("email") || "";
const storedParentFullName = localStorage.getItem("parentFullName") || "";

//Define Profile Component
const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay using useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return isLoading ? (
    // Loading spinner while data is loading
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <Layout className=" h-screen">
        {/* Sidebar */}
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
          <WidgetCardsSmiley />
        </Sider>

            {/* Main Content */}
        <Content className="h-full grid bg-[#FFFBF6] p-10 ">
          <motion.div
            className="border h-[150px] rounded shadow-md bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6 font-[caveat-regular] text-[1.1rem]">Login information</h1>
            </div>

            <div className="pl-5 pt-5 font-[poppins-regular] text-[0.8rem]">
              <h1> 🔑 Username : {storedUsername}</h1>
              <h1> 🔒 password : ********</h1>
            </div>
          </motion.div>
          <motion.div
            className="border h-[150px] rounded shadow-md bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6 font-[caveat-regular] text-[1.1rem]">Personal information</h1>
            </div>
            <div className="pl-5 pt-5 font-[poppins-regular] text-[0.8rem]">
              <h1> 🧑 Full Name : {storedFullName}</h1>
              <h1> 🎂 Age : {storedAge} </h1>
              <h1> 👨‍🦱 Gender:{storedGender} </h1>
            </div>
          </motion.div>
          <motion.div
            className="border h-[150px] rounded shadow-md bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6 font-[caveat-regular] text-[1.1rem]">Parent/ Guardian information</h1>
            </div>
            <div className="pl-5 pt-5 font-[poppins-regular] text-[0.8rem]">
              <h1> 🧑 Parent/Guardian Full Name : {storedParentFullName}</h1>
              <h1> 🎂 Email :<span>{storedEmail}</span></h1>
            </div>
          </motion.div>
        </Content>
      </Layout>
    </div>
  );
};

// Export the Profile component
export default Profile;

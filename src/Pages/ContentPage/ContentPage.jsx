import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Spin } from "antd";
import BackIcon from "../../Assets/Images/bx-arrow-back.svg";
import { motion } from "framer-motion";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("HTML BASICS", "sub1", <AppstoreOutlined />, [
    getItem("Lesson 1: Introduction to HTML", "1"),
    getItem("Lesson 2: HTML page structure", "2"),
    getItem("Lesson 3: H1 element", "3"),
    getItem("Lesson 4: Paragraph", "4"),
    getItem("Lesson 5: Image tag ", "5"),
    getItem("Lesson 6: Image height and width", "6"),
    getItem("Lesson 7: Linking Images", "7"),
    getItem("Lesson 8: Div container", "8"),
  ]),
];
const videoId = [
  {
    id1: "BpgAzeU0w-s",
    id2: "MskilKYVKOs",
    id3: "P6CUDf-bu5A",
    id4: "LIj5w7gAmXc",
    id5: "2KGR6tQ5B0U",
    id6: "LmoMDpEncEE",
    id7: "vq_QwWhlHhc",
    id8: "ed7iFE7VavI",
  },
];

const videoSources = [
  {
    name: "1",
    path: `https://www.youtube.com/embed/${videoId[0].id1}`,
    text: "WELCOME TO THE WORLD OF HTML",
    author: "Godslove Udo",
  },
  {
    name: "2",
    path: `https://www.youtube.com/embed/${videoId[0].id2}`,
    text: "OUR PAGE STRUCTURE ",
    author: "Godslove Udo",
  },
  {
    name: "3",
    path: `https://www.youtube.com/embed/${videoId[0].id3}`,
    text: "MEET THE H1 ELEMENT",
    author: "David Ajitena",
  },
  {
    name: "4",
    path: `https://www.youtube.com/embed/${videoId[0].id4}`,
    text: "THE PARAGRAPH TAG",
    author: "Godslove Udo",
  },
  {
    name: "5",
    path: `https://www.youtube.com/embed/${videoId[0].id5}`,
    text: "THE IMAGE TAG",
    author: "Abiola Sodiq",
  },
  {
    name: "6",
    path: `https://www.youtube.com/embed/${videoId[0].id6}`,
    text: "IMAGE HEIGHT AND WIDTH",
    author: "David Ajitena",
  },
  {
    name: "7",
    path: `https://www.youtube.com/embed/${videoId[0].id7}`,
    text: "A, THE ANCHOR TELEPORTER",
    author: "Godslove Udo",
  },
  {
    name: "8",
    path: `https://www.youtube.com/embed/${videoId[0].id8}`,
    text: "DIV CONTAINER, OUR HANDY BOX",
    author: "Godslove Udo",
  },
];
const ContentPage = () => {
  const [mode, setMode] = useState("inline");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Initialize with the first video link
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeVideo = (index) => {
    setSelectedVideoIndex(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <Layout className=" h-screen bg-[#FFFBF6]">
        <motion.div
          className=" flex justify-center"
          initial={{ y: 0 }}
          animate={{
            x: [-10, 10, -10],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          <Link to="/dashboard" className=" h-[2rem] bg-[#FFFBF6]">
            <motion.img
              src={BackIcon}
              alt="previous"
              title="previous"
              whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
              className="p-[1rem] "
            />
          </Link>
        </motion.div>
        {/*bg-[rgba(155, 93, 230, 0.30)]*/}
        <Content className="h-full grid p-10 ">
          <motion.div className="w-full h-[75svh]">
            <iframe
              width="100%"
              height="50%"
              src={videoSources[selectedVideoIndex].path}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-[100%] h-full object-cover rounded-xl"
              allowFullScreen
            ></iframe>

            <p className="font-[caveat-regular] p-[1rem]">
              Uploaded by{" "}
              <span className="font-bold">
                {videoSources[selectedVideoIndex].author}
              </span>
            </p>
            <p className="font-[caveat-regular] px-[1rem] font-bold text-[2rem] border-b-2">
              {videoSources[selectedVideoIndex].text}
            </p>
          </motion.div>
        </Content>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width="25%"
          style={{
            backgroundColor: "#fafafa",
            height: "100svh",
          }}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode={mode}
            items={items}
            className="font-[caveat-regular]"
            onClick={(e) => {
              const selectedIndex = videoSources.findIndex(
                (video) => video.name === e.key
              );
              if (selectedIndex !== -1) {
                changeVideo(selectedIndex);
              }
            }}
          >
            {videoSources.map((video, index) => (
              <Menu.Item key={index}>{video.name}</Menu.Item>
            ))}
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default ContentPage;

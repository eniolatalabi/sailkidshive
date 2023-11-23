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
  getItem("CSS BASICS", "sub1", <AppstoreOutlined />, [
    getItem("Lesson 1: Introduction to CSS", "1"),
    getItem("Lesson 2: CSS Style and Attributes", "2"),
    getItem("Lesson 3: Styling Text", "3"),
    getItem("Lesson 4: Font Family", "4"),
    getItem("Lesson 5: Text Styling Riddles", "5"),
    getItem("Lesson 6: Line Height", "6"),
    getItem("Lesson 7: Background Color", "7"),
    getItem("Lesson 8: Background Image", "8"),
  ]),
];
const videoId = [
  {
    id1: "-EaGdGwh0WY",
    id2: "G3OPj_SExpg",
    id3: "QQQktgrSoBg",
    id4: "tDmZ4LJkHYM",
    id5: "G9sDWEBynGU",
    id6: "DjLYyYZVbIw",
    id7: "SGA0qNcFmes",
    id8: "KM0-jZrIaqw",
    id9: "loN2pesNT6s",
  },
];

const videoSources = [
  {
    name: "1",
    path: `https://www.youtube.com/embed/${videoId[0].id1}`,
    text: "WHAT IS CSS?",
    author: "David Ajitena",
  },
  {
    name: "2",
    path: `https://www.youtube.com/embed/${videoId[0].id2}`,
    text: "CSS STYLE AND ATTRIBUTES",
    author: "David Ajitena",
  },
  {
    name: "3",
    path: `https://www.youtube.com/embed/${videoId[0].id3}`,
    text: "LETS COLOR THE TEXT",
    author: "Abiola Sodiq",
  },
  {
    name: "4",
    path: `https://www.youtube.com/embed/${videoId[0].id4}`,
    text: "FIND THE FONT !",
    author: "Godslove Udo",
  },
  {
    name: "5",
    path: `https://www.youtube.com/embed/${videoId[0].id5}`,
    text: "STYLING RIDDLES",
    author: "Abiola Sodiq",
  },
  {
    name: "6",
    path: `https://www.youtube.com/embed/${videoId[0].id6}`,
    text: "LINE HEIGHT'S TO THE RESCUE !",
    author: "David Ajitena",
  },
  {
    name: "7",
    path: `https://www.youtube.com/embed/${videoId[0].id7}`,
    text: "PAINTING WITH BACKGROUND COLOR",
    author: "Godslove Udo",
  },
  {
    name: "8",
    path: `https://www.youtube.com/embed/${videoId[0].id8}`,
    text: "THE PERFECT BACKGROUND",
    author: "David Ajitena",
  },
];
const ContentPageCss = () => {
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

export default ContentPageCss;

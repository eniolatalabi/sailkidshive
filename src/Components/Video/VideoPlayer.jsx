import React from "react";

const VideoPlayer = () => {
  return (
   
      <iframe
        width="100%"
        height="50%"
        src="https://www.youtube.com/embed/BpgAzeU0w-s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-[100%] h-full object-cover rounded-xl"
        allowFullScreen
      ></iframe>

  );
};

export default VideoPlayer;

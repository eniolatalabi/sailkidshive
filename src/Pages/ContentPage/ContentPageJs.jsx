import React from "react";
import { useState, useEffect } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result, Spin } from "antd";
import { Link } from "react-router-dom";
const ContentPageJs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <Result
      icon={<SmileOutlined />}
      title="Coming Soon !"
      extra={
        <Link to="/dashboard">
          {" "}
          <Button
            type="primary"
            className="font-[poppins-regular] bg-[#9B5DE6]"
          >
            Dashboard
          </Button>{" "}
        </Link>
      }
      className="bg-[#FFFBF6] font-[poppins-regular] min-h-screen"
    />
  );
};
export default ContentPageJs;

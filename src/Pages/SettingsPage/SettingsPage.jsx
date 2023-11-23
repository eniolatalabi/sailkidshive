import React from "react";
import { Button, Result, Spin } from "antd";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const SettingsPage = () => {
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
    status="warning"
    title="We are still fixing this page, try again later."
    extra={
      <Link to="/dashboard">
        {" "}
        <Button
          type="primary"
          key="Dashboard"
          className="font-[poppins-regular] bg-[#9B5DE6]"
        >
          Dashboard
        </Button>
      </Link>
    }
    className="font-[poppins-regular] bg-[#FFFBF6] min-h-screen"
  />
)};
export default SettingsPage;

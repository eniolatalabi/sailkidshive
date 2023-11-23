// Import Neccesary Dependencies and Components
import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

// Define SuccessPage Component
const SuccessPage = () => (
  <React.Fragment>
    <div className="bg-[#FFFBF6] min-h-screen w-full">
      <Result
        status="success"
        title="Welcome to KidsHive, let's learn"
        subTitle=""
        className="font-[poppins-regular]"

        // Button to continue to login page
        extra={[
          <Link to="/login">
            {" "}
            <Button
              type="primary"
              key="console"
              className="bg-[#9B5DE6] font-[poppins-regular]"
            >
              Continue
            </Button>
          </Link>,
        ]}
      />
    </div>
  </React.Fragment>
);

// Export the SuccessPage component to be used in other parts of the application
export default SuccessPage;

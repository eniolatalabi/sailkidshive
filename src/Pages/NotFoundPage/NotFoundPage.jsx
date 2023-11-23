// Import Neccesary Dependencies
import React from "react";
import { motion } from "framer-motion";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <motion.div
        className="bg-[#FFFBF6] min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {/* Result Component for 404 */}
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          className="font-[poppins-regular]"
          extra={
            // Link back to home page
            <Link to="/">
              <Button
                type="primary"
                className="font-[poppins-regular] bg-[#9B5DE6]"
              >
                Back Home
              </Button>
            </Link>
          }
        />
      </motion.div>
    </React.Fragment>
  );
};

// Export the NotFoundPage component
export default NotFoundPage;

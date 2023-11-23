// Import necessary dependencies and components
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import AboutUsimage from "../../../Assets/Images/AboutUsImage.svg";

// Define the AboutUs component
const AboutUs = () => {
  return (
    // Use the "Element" component from react-scroll for smooth scrolling
    <Element name="aboutUsLink">
      <div className=" m-auto w-[90%] md:w-[70%] font-[caveat-regular] pt-[5rem] md:h-screen">
        <header className="flex flex-col justify-center items-center">
        {/* Heading with Framer Motion animation */}
          <motion.h1
            className="text-2xl md:text-5xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About us
          </motion.h1>
          {/* Subheading with Framer Motion animation */}
          <motion.h3
            className="text-xl md:text-3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            What Sets Us Apart !!!
          </motion.h3>
        </header>
        <section className="pt-4 flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Image with Framer Motion animation */}
          <motion.img
            src={AboutUsimage}
            alt="AboutUsimage"
            className="h-[15rem] md:h-[20rem] lg:h-[30rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 3 }}
          />

          {/* Text content with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 4 }}
          >
            <div>
             {/* Content explaining the unique features of the curriculum */}
              <p className="text-lg md:text-2xl text-justify">
                We recognize that young minds learn best when they're having
                fun. Our curriculum is designed with age-appropriate content,
                interactive activities, and colorful visuals that captivate
                children's attention and keep them excited about learning. Our
                lessons are tailored to suit the children's cognitive
                development. We present complex concepts in a simple,
                understandable manner, allowing kids to grasp the foundations of
                coding effortlessly. We invite parents,guardians and educators
                to embark on this exicting coding adventure with us.
                 Together, we can empower young minds.
              </p>
              <p className="text-lg md:text-2xl text-justify">
                Thank you for choosing
                Kid's Hive, where coding is child's play.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </Element>
  );
};

// Export the AboutUs component for use in other parts of the application
export default AboutUs;

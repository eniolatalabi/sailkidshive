// Import necessary dependencies and components
import ContactUsimage from "../../../Assets/Images/ContactUsImage.svg";
import { Element } from "react-scroll";
import ContactUsForm from "./ContactUsForm";

// Define the ContactUs component
const ContactUs = () => {
  return (
    // Use the "Element" component from react-scroll for smooth scrolling
    <Element name="contactUsLink">
      <div className="flex items-center justify-center h-screen w-full bg-[#FFFDFC]">
        <div className=" mt-6 m-auto w-[90%] md:w-[85%]  font-[caveat-regular] shadow-lg lg:shadow-none ">
          <header className=" flex flex-col justify-center items-center">
          {/* Main heading */}
            <h1 className=" text-3xl md:text-6xl">Contact us</h1>
            {/* Subheading */}
            <h3 className=" text-xl md:text-3xl">Where can you find us</h3>
          </header>

          <section className=" mt-5 flex flex-col sm:w-[auto] sm:h-[auto] lg:flex-row-reverse lg:h-[auto] lg:w-[auto] justify-around items-center gap-10 lg:justify-between lg:shadow-lg lg:rounded-md">
          {/* using imported ContactUsimage */}  
          <img
              src={ContactUsimage}
              alt="ContactUsimage"
              className=" h-[12rem] md:h-[15rem] sm:w-[auto] lg:h-[auto] lg:rounded-e-md "
            />

            {/* using imported ContactUsForm */}
            <ContactUsForm />
          </section>
        </div>
      </div>
    </Element>
  );
};

// Export the ContactUs component for use in other parts of the application
export default ContactUs;

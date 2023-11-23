// Import the parent component to pass props to its child components
import ContactInput from "./ContactInput";

// Define the ContactUsForm component
const ContactUsForm = () => {
  return (
    <div className="flex flex-col gap-4 pl-8">
      <div className="flex flex-col gap-4 lg:flex-row">
      {/* ContactInput component for first name */}
        <ContactInput
        label={"First name"}
        ariaLabel={"Firstname"} // Accessibility label for screen readers
        id={"name"} // HTML id attribute
        name={"name"} // HTML name attribute
        type={"text"} // Input type
        required // Input is required
        />

        {/* ContactInput component for last name */}
        <ContactInput
          label={"Last name"}
          arialLabel={"Lastname"}
          id={"name"}
          name={"name"}
          type={"text"}
          required
        />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
      {/* ContactInput component for email */}
        <ContactInput
          label={"Email"}
          arialLabel={"Email"}
          id={"email"}
          name={"email"}
          type={"email"}
          required
        
        />

        {/* ContactInput component for phone number */}
        <ContactInput
          label={"Phone number"}
          arialLabel={"Phonenumber"}
          id={"phonenumber"}
          name={"phonenumber"}
          type={"text"}
          required
          className={` `}
        />
      </div>

      {/* Textarea for the message */}
      <textarea
      className=" resize-none  block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-gray-900 border-0 border-b-2 bg-inherit border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#9B5DE6] peer"
        id="message"
        rows="4"
        placeholder="Write your message..."
      ></textarea>

      <div className=" rounded-md py-1 my-4 flex items-center justify-center bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
      {/* Send message button */}  
      <button type="submit" className="text-white ">
          Send Message
        </button>
      </div>
    </div>
  );
};

// Export the ContactUsForm component for use in other parts of the application
export default ContactUsForm;

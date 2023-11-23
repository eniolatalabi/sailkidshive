// Disabling the eslint rule for prop types since they are not being used explicitly in this component

/* eslint-disable react/prop-types */
const ContactInput = (props) => {
  // Component to render a styled input field with label animation
    return (
      <div className="relative ">
      {/* Input field */}
        <input
          type={props.type}
          className={` block rounded-t-lg px-8 md:px-16 pb-2.5 pt-5 w-full text-lg text-gray-900 border-0 border-b-2 bg-inherit border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#9B5DE6] peer ${props.className} `}
          name={props.name}
          id={props.id}
          required={props.required}
          disabled={props.disabled}
          onClick={props.onClick}
          // eslint-disable-next-line react/no-unknown-property
          arial-label={props.arialLabel}
        />

      {/* Label for the input field */}
        <label className=" absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#9B5DE6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
          {props.label}
        </label>
      </div>
    );
  };
  
  // Export theContactInput component for use in other parts of the application
  export default ContactInput;
  
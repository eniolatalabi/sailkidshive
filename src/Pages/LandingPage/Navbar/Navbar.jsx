// Importing the required components
import logo from "../../../Assets/Images/bumbleebee-img.svg";
import HamburgerNavBar from "./HamburgerNav";

//Define the Navbar components
const Navbar = () => {
  return (
    <div
      className=" flex justify-between items-center shadow-lg p-4 w-[80%] h-[60px] bg-[#9B5DE6] rounded-lg mx-auto text-white text-lg font-[caveat-regular]"
    >
      <div className=" flex justify-center items-center gap-3 cursor-pointer">
        <img src={logo} alt="logo" className=" object-contain w-[40px]" />
        <p>KidsHive</p>
      </div>
      <HamburgerNavBar />
    </div>
  );
};

 // Export the Navbar component for use in other parts of the application
export default Navbar;

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-screen bg-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center py-2">
        <div className="md:hidden mx-2">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          )}
        </div>
        <div className="flex items-center space-x-2 mx-4">
          <img
            src="https://casper.ca/_next/image?url=%2Fassets%2Fcasper_logo.png&w=240&q=75"
            alt="Canada flag"
            className="w-25 h-10"
          />
        </div>

        {/* Center navigation */}
        <div className="hidden md:flex font-normal space-x-8 text-[#1E306E]">
          <a href="#" className="hover:text-blue-700">
            Mattresses
          </a>
          <a href="#" className="hover:text-blue-700">
            Pillows
          </a>
          <a href="#" className="hover:text-blue-700">
            Bedding
          </a>
          <a href="#" className="hover:text-blue-700">
            Sheets
          </a>
          <a href="#" className="hover:text-blue-700">
            Furniture
          </a>
          <a href="#" className="hover:text-blue-700">
            Accessories
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 font-light"
          >
            Sales and Offers
          </a>
        </div>
        <div className="text-blue-900 mx-4">
          <FaShoppingCart className="text-2xl" />
        </div>
      </div>
      {/* Mobile Menu (shown when hamburger menu is clicked) */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-start p-8 space-y-6 text-xl z-40">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://casper.ca/_next/image?url=%2Fassets%2Fcasper_logo.png&w=240&q=75"
                alt="Canada flag"
                className="w-25 h-10"
              />
            </div>
            <FaTimes
              onClick={toggleMenu}
              className="text-2xl cursor-pointer text-blue-900"
            />
          </div>

          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Mattresses
          </a>
          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Pillows
          </a>
          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Bedding
          </a>
          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Sheets
          </a>
          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Furniture
          </a>
          <a href="#" className="text-[#1E306E] hover:text-blue-700">
            Accessories
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 font-semibold"
          >
            Sales and Offers
          </a>

          <div className="mt-auto pt-4 border-t w-full text-blue-900">
            <p>1.888.828.5448</p>
            <a href="#" className="hover:text-blue-700">
              Find a store
            </a>
            <a href="#" className="hover:text-blue-700">
              Blog
            </a>
            <div className="mt-4">
              <button className="border rounded-lg px-4 py-2 text-[#1E306E] border-blue-900 flex items-center">
                Canada (English)
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

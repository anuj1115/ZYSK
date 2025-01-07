import React, { useState } from "react";

const Navbar = ({ logo, menuItems, profileImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-[#475467] w-full text-md font-semibold px-8 md:px-32 border-b-[1px] py-4 flex items-center justify-between border-b-[#F2F4F7]">
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8" />
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <a href={item.link}>{item.label}</a>
              {item.subMenu && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Right Section: Profile or Burger Menu */}
      <div className="md:hidden">
        {/* Burger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Profile Image (Hidden on Small Screens) */}
      <div className="hidden md:block">
        <img
          src={profileImage}
          alt="Profile"
          className="h-8 w-8 rounded-full border border-white"
        />
      </div>

      {/* Mobile Menu (Shown when burger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-4 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-[#475467] font-semibold text-md hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaThLarge,
  FaMoon,
  FaUsers,
  FaBell,
  FaBox,
  FaCloud,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-teal-600 p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="text-white text-2xl font-bold">
              <img
                src="https://admin.pixelstrap.net/admiro/assets/images/logo/logo1.png"
                alt="Admiro Logo"
              />
            </div>

            <button
              className="text-white bg-teal-800 p-2 rounded-full"
              onClick={toggleSidebar}
            >
              <FaThLarge className="h-6 w-6" />
            </button>
          </div>

          <div className=" relative flex items-center bg-gray-100 rounded-full px-4 py-2  ">
            <input
              type="text"
              placeholder="Type to Search..."
              className="bg-transparent outline-none w-full"
            />
          </div>
          <CiSearch className="absolute left-[370px] text-gray-500 text-xl" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <img
                src="https://admin.pixelstrap.net/admiro/assets/fonts/flag-icon/us.svg"
                alt="Language"
                className="h-4 w-6"
              />
              <span className="text-white">ENG</span>
            </div>

            <button className="text-white bg-teal-800 p-2 rounded-full">
              <FaMoon className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              <button className="relative text-white">
                <FaUsers className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 text-xs text-white flex items-center justify-center">
                  2
                </span>
              </button>

              <button className="relative text-white">
                <FaBell className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 text-xs text-white flex items-center justify-center">
                  4
                </span>
              </button>
            </div>

            <button className="text-white">
              <FaBox className="h-6 w-6" />
            </button>

            <div className="text-white flex items-center bg-[#115E59] rounded-xl">
              <div className="h-10 w-10">
                <FaCloud className="h-6 w-6 text-center ml-3 mt-2" />
              </div>
              <span className="text-sm mb-2 mr-1">15°</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="https://admin.pixelstrap.net/admiro/assets/images/profile.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full bg-[#F39159]"
            />
            <div className="text-white">Ava Davis</div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-18 left-0 h-full bg-[#0D9488] text-white w-64 transition-transform duration-500 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)" }}
      >
        <div className="p-6">
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <FaThLarge className="mr-3" />
                Dashboards
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <FaBox className="mr-3" />
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0  opacity-50" onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default Header;

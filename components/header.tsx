import React from "react";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";
import { VscTriangleDown } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center shadow-md border-b border-gray-200 p-4 bg-white text-black">
      {/* Left side: Title */}
      <div className="mb-4 sm:mb-0">
        <h1 className="text-2xl text-gray-800 font-bold">My Courier BD</h1>
      </div>

      {/* Right side */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        {/* Language Dropdown */}
        <div className="dropdown text-gray-400">
          <button className="btn btn-ghost px-2 py-0 text-xs bg-gray-200 dropdown-toggle">
            <TbWorld className="text-xs" /> EN{" "}
            <IoIosArrowDown className="pl-1 text-sm text-gray-400" />
          </button>
          <ul className="dropdown-content text-xs menu p-1 shadow bg-gray-700 rounded-box w-32">
            <li>
              <a className="text-xs">EN</a>
            </li>
            <li>
              <a className="text-xs">BN</a>
            </li>
          </ul>
        </div>

        {/* New Delivery Button */}
        <button className="px-4 py-2 rounded-md bg-[#008000] text-white w-full sm:w-auto">
          New Delivery
        </button>

        <FaBell className="text-[#008000]" />

        {/* User Info Section */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image
            src="/profile.png"
            alt="Dashboard"
            className="rounded-full"
            width={50}
            height={50}
          />

          {/* User Dropdown */}
          <div className="dropdown">
            <div className="inline-flex">
              <div>
                <div className="text-[#008000]">Raha Ayat</div>
                <div className="text-xs text-gray-600">My Courier</div>{" "}
                {/* Small title below */}
              </div>
              <button className="btn p-0 bg-transparent border-0 ml-4 dropdown-toggle">
                <VscTriangleDown className="text-md text-[#008000]" />
              </button>
            </div>

            <ul className="dropdown-content menu p-2 shadow bg-gray-400 rounded-box w-32">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

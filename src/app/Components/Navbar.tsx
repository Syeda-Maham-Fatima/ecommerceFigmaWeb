"use client";
import React from "react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-full h-[100px] bg-[#FBEBB5] flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
        <button
          className="text-black sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute sm:static top-20 right-0 w-full sm:w-auto bg-[#FBEBB5] sm:flex sm:flex-1 flex-col sm:flex-row items-center text-black text-[16px] font-[500] leading-[24px] z-50`}
        >
          {/* Links Section */}
          <div className="flex flex-col sm:flex-1 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <Link
              href="/"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className=" flex justify-center items-center space-x-4 sm:space-x-6 text-[20px] sm:text-[24px]  sm:mt-0">
          <RiAccountCircleLine className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />
          <FaRegHeart className="cursor-pointer" />
          <IoCartOutline className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

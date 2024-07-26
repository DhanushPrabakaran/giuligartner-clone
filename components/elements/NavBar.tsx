"use client";
import React, { useState } from "react";
import Image from "next/image";
import cam from "@/public/cam.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header flex flex-row w-full justify-between lg:px-12 px-8 py-3 fixed bg-primary-black top-0 z-50 bg-opacity-85 backdrop-blur-md saturate-50 bg-transparent h-[64px]">
      <ul className="gap-3 items-center lg:flex hidden text-[11px]">
        <a
          href="/"
          className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px]"
        >
          STILLS
        </a>
        <a
          href="/"
          className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px]"
        >
          MOTION
        </a>
        <a
          href="/"
          className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px]"
        >
          ABOUT
        </a>
      </ul>
      <h1 className="text-3xl font-roslindale text-logo px-4 h-full">Giulia</h1>
      <ul className="space-x-4 items-center flex text-xs">
        <a
          href="/"
          className="border-primary-white lg:flex hidden content-center border rounded-full px-3 py-[10px] leading-[11px]"
        >
          INSTAGRAM
        </a>
        <a
          href="/"
          className="border-primary-white lg:flex hidden content-center border rounded-full px-3 py-[10px] leading-[11px]"
        >
          EMAIL
        </a>
        <a
          href="/"
          className="border-primary-white content-center border rounded-full px-2 py-[6px] flex gap-2 items-center"
        >
          F/24
          <Image src={cam} alt="" width={20} />
        </a>
        {/* Menu Toggle Button for Mobile */}
        <button
          className="lg:hidden flex items-center border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px]"
          onClick={toggleMenu}
        >
          MENU
        </button>
      </ul>
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 z-50 right-[35%] w-64 h-full bg-transparent  transform ${
          isMenuOpen ? "-translate-y-96" : "translate-y-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        
        <ul className="flex flex-col items-center mt-9 text-white bg-opacity-95 w-[70vw]  bg-primary-black rounded-2xl z-50">
          <a
            href="/"
            className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px] my-2"
          >
            STILLS
          </a>
          <a
            href="/"
            className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px] my-2"
          >
            MOTION
          </a>
          <a
            href="/"
            className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px] my-2"
          >
            ABOUT
          </a>
          <a
            href="/"
            className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px] my-2"
          >
            INSTAGRAM
          </a>
          <a
            href="/"
            className="border-primary-white content-center border rounded-full px-3 py-[10px] leading-[11px] my-2"
          >
            EMAIL
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

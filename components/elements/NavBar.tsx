import React from "react";
import Image from "next/image";
import cam from "@/public/cam.svg";
const NavBar = () => {
  return (
    <div className="header flex flex-row w-full justify-between lg:px-12 px-8  py-3 fixed  bg-primary-black top-0 z-50 bg-opacity-85 backdrop-blur-md saturate-50  bg-transparent h-[64px]">
      <ul className=" gap-3 items-center lg:flex hidden text-[11px]">
        <a
          href="/"
          className="border-primary-white content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          STILLS
        </a>
        <a
          href="/"
          className="border-primary-white content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          MOTION
        </a>
        <a
          href="/"
          className="border-primary-white content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          ABOUT
        </a>
      </ul>
      <h1 className=" text-3xl font-roslindale text-logo  px-4 h-full">
        Giulia
      </h1>
      <ul className=" space-x-4 items-center flex text-xs">
        <a
          href="/"
          className="border-primary-white lg:flex hidden content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          INSTAGRAM
        </a>
        <a
          href="/"
          className="border-primary-white lg:flex hidden content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          EMAIL
        </a>
        <a
          href="/"
          className="border-primary-white  content-center border rounded-full  px-2 py-[6px] flex gap-2 items-center"
        >
          F/24
          <Image src={cam} alt="" width={20} />
        </a>
        <a
          href="/"
          className="border-primary-white lg:hidden flex content-center border rounded-full  px-3 py-[10px] leading-[11px]"
        >
          MENU
        </a>
      </ul>
    </div>
  );
};

export default NavBar;

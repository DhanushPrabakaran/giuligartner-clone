import React from "react";
import Image from "next/image";
import about1 from "@/public/about-image-1.jpeg";
import about2 from "@/public/about-image-2.jpeg";
import about3 from "@/public/about-2.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen bg-primary-black text-primary-white font-MintGrotesk justify-center items-center flex flex-col "
    >
      <div className="max-w-[80vw] flex flex-col items-center h-[80vh] justify-center gap-14">

        <div className="font-roslindale max-md:text-[5vw] text-[4vw] w-full text-center flex flex-wrap justify-center items-center space-x-2">
          <div className="text-5xl md:text-6xl lg:text-7xl">A</div>
          <div className="relative">
            <span className="block w-[8vw] h-[8vw]">
              <Image
                className="absolute top-0 left-0 z-50 hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24"
                src={about1}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl">
            tiny mountain village
          </div>
          <div className="relative">
            <span className="block w-[8vw] h-[8vw]">
              <Image
                className="absolute top-0 left-0 hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24 hover:z-50"
                src={about2}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl">
            where it all began
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl">...</div>
          <div className="relative">
            <span className="block w-[8vw] h-[8vw]">
              <Image
                className="absolute bottom-0 left-0 hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24"
                src={about3}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

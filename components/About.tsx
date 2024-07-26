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
      <div className="max-w-[60vw] flex flex-col items-center h-[80vh] justify-center gap-14">
        <div className="font-roslindale max-md:text-[5vw] text-[4vw] w-full text-center">
          A
          <Image
            className="inline hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24"
            src={about1}
            width={80}
            height={40}
            alt={""}
          />
          tiny mountain village
          <Image
            className="inline hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24 hover:z-50"
            src={about2}
            width={80}
            height={40}
            alt={""}
          />
          where it all began...
          <Image
            className="inline hover:scale-150 hover:rotate-2 duration-150 rounded-2xl hover:w-24"
            src={about3}
            width={80}
            height={40}
            alt={""}
          />
        </div>
        <div
        className="text-center border-primary-white">
        Giulia Gartner (@Giulia Gartner) is an outdoor, travel, and commercial photographer, filmmaker, and storyteller from the Dolomites in northern Italy. Her work focuses on capturing wild and rugged landscapes with a vivid color palette and dreamy elements. Her love for photography has spilled over into filmmaking which is one of the main creative outlets she pursues today.
        </div>
        <button
        className=" border border-primary-white rounded-full p-2 text-xs">
            READ MY STORY
        </button>
      </div>
    </section>
  );
};

export default About;

"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landingpage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // vjxh
      // gsap.utils.toArray(".text").forEach(project => {
      gsap.from(textRef.current, {
        y: 100,
        z: 100,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="body"
      ref={containerRef}
      className="w-full h-screen bg-primary-black text-primary-white font-MintGrotesk  flex flex-wrap justify-center items-center "
    >
      <div className="relative flex items-center justify-center w-[90vw] h-[80vh] overflow-hidden rounded-3xl py-10 px-3 mt-16 flex-wrap ">
        <div
          ref={textRef}
          id="text"
          className="
          res-heading-4xl text-primary-white  z-10 text-center font-roslindale flex flex-wrap flex-row justify-center mx-[8vw]"
          // text-3xl max-md:text-5xl lg:text-7xl 
        >
          <div className="inline-block">GIULIA{" "}</div>
          <div className="inline-block">GARTNER {" "}</div>
          <div className="inline">PHOTOGRAPHER {" "}</div> 
          <div>& {" "}</div>
          <div>{" "}FILMMAKER</div>
        </div>
        <video
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          autoPlay
          muted
          loop
          className="absolute w-auto min-w-full min-h-full max-w-none"
        />
      </div>
    </section>
  );
};

export default Landingpage;

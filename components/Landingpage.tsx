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
    { scope: containerRef },
  );

  return (
    <section
      id="body"
      ref={containerRef}
      className="flex h-screen w-full flex-wrap items-center justify-center bg-primary-black font-MintGrotesk text-primary-white"
    >
      <div className="relative mt-16 flex h-[80vh] w-[90vw] flex-wrap items-center justify-center overflow-hidden rounded-3xl px-3 py-10">
        <div
          ref={textRef}
          id="text"
          className="res-heading-3xl z-10 mx-[8vw] flex flex-row flex-wrap justify-center text-center font-roslindale text-primary-white"
          // text-3xl max-md:text-5xl lg:text-7xl
        >
          <div className="inline-block">GIULIA </div>
          <div className="inline-block">GARTNER </div>
          <div className="inline">PHOTOGRAPHER </div>
          <div>& </div>
          <div> FILMMAKER</div>
        </div>
        <video
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          autoPlay
          muted
          loop
          className="absolute min-h-full w-auto min-w-full max-w-none"
        />
      </div>
    </section>
  );
};

export default Landingpage;

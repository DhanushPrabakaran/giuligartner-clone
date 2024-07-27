"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import about3 from "@/public/about-2.jpg";
import about1 from "@/public/about-image-1.jpeg";
import { useGSAP } from "@gsap/react";
const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box1", {
      x: -800,
      duration: 1,
      scrollTrigger: {
        trigger: ".box2",
        start: "top 40%", // Start the animation when the top of the image is 80% from the top of the viewport
        end: "top 0%", // End the animation when the top of the image is 20% from the top of the viewport
        toggleActions: "play none none reverse",
        scrub: 1, // Smooth animation while scrolling
        markers: true,
      },
    });
    gsap.to(
      ".box2",
      //   {
      //     xPercent: 50
      //   },
      {
        x: 800,
        duration: 1,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 40%", // Start the animation when the top of the image is 80% from the top of the viewport
          end: "top 20%", // End the animation when the top of the image is 20% from the top of the viewport
          toggleActions: "play none none reverse",
          scrub: 1, // Smooth animation while scrolling
          markers: true,
        },
      },
    );
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-around overflow-hidden align-middle"
      ref={container}
      id="conta"
    >
      <div className="inline-flex justify-center gap-2">
        <div>MARCH 2023</div>
        <div>icon</div>
        <div>GREENLAND</div>
      </div>
      <div className="res-heading-4xl max-w-md text-center font-roslindale">
        Visit Greenland
      </div>
      <button className="rounded-full border px-3 py-2 text-sm">
        SEE CASE STUDY
      </button>
      <Image
        className="box1 absolute rounded-2xl"
        src={about3}
        width={800}
        height={800}
        alt={""}
      />
      <Image
        className="box2 absolute rounded-2xl"
        src={about3}
        width={800}
        height={800}
        alt={""}
      />
    </div>
  );
};

export default Projects;

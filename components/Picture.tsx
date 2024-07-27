"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import about3 from "@/public/about-image-1.jpeg";
import imposter from "@/public/about-image-2.jpeg"
const Picture = () => {
  useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(
        "#box4",
        {
          xPercent: -100,
          duration: 1,
          scrollTrigger: {
            trigger: "#box4",
            start: "top 80%", // Start the animation when the top of the image is 80% from the top of the viewport
            end: "top 20%", // End the animation when the top of the image is 20% from the top of the viewport
            toggleActions: "play none none reverse",
            scrub: 1, // Smooth animation while scrolling
          },
        },
      );
    }, []);
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-around overflow-hidden">
      <h1 className="res-heading-3xl font-roslindale">PICTURE</h1>
      <div
      className="flex w-full justify-around gap-6 -rotate-6 py-4 bg-primary-white">
      <div 
      id="box4"
      className="flex w-full justify-around gap-6">
        <Image
          className="rounded-2xl"
          src={about3}
          width={85}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={90}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={imposter}
          width={80}
          height={80}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
        <Image
          className="rounded-2xl"
          src={about3}
          width={120}
          height={120}
          alt={""}
        />
      </div>
      </div>
    </section>
  );
};

export default Picture;
